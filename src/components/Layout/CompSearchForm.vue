<template>
  <div class="compSearchForm" :class="{ 'compSearchForm--open': open }">
    <form @submit.prevent="onSubmitForm" class="compSearchForm__form">
      <button @click="closeSearch" class="compSearchForm__form__closeBtn" type="button">
        <CompIcon name="close" />
      </button>

      <input class="compSearchForm__form__input"
             placeholder="Ex: Finanças"
             v-model="busca"
             type="search" />

      <button class="compSearchForm__form__btn" type="submit">Buscar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import CompIcon from '@/components/Icon/CompIcon.vue'

defineProps({ open: { type: Boolean, default: false } });
const emits = defineEmits(['closeSearchForm']);

const store = useStore();
const busca = ref('');

function closeSearch() {
  emits('closeSearchForm');
}

async function onSubmitForm() {
  await store.dispatch('app/setFilters', { busca: busca.value, search: true });
  (busca.value = '');
  emits('closeSearchForm');
}
</script>

<style lang="scss">
@import '@/styles/utilities/utils/all';
@import '@/styles/utilities/variables/all';

.compSearchForm {
  background-color: var(--neutral-color-low-dark);
  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;
  max-width: 320px;
  transition: left .12s ease-in-out, transform .12s ease-in-out;
  transform: scaleX(0);
  transform-origin: left;
  width: calc(100vh - 96px);
  z-index: 6;

  &__form {
    padding: var(--gap-14) var(--gap-3) var(--gap-5);
    position: relative;

    &__closeBtn,
    &__btn  {
      @extend %reset-btn;
    }

    &__closeBtn {
      color: var(--neutral-color-high-light);
      position: absolute;
      right: var(--gap-3);
      top: var(--gap-3);
    }

    &__input,
    &__btn {
      border-radius: var(--border-radius-xs);
      padding: var(--gap-3);
      width: 100%;
    }

    &__input {
      border: var(--border-width-md) solid var(--neutral-color-low-medium);
      @include placeholder {
        color: var(--neutral-color-low-medium);
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-medium);
      };

      margin-bottom: var(--gap-5);
      outline: none;
      transition: border-color .12s ease-in-out;

      &:hover,
      &:focus {
        border-color: var(--color-secondary-pure);
      }
    }

    &__btn {
      background-color: var(--color-secondary-pure);
      color: var(--neutral-color-high-medium-1);
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      padding: var(--gap-3);
    }
  }

  &--open {
    left: 96px;
    transform: scaleX(1);
  }
}
</style>
