<template>
  <aside class="compSidebar">
    <ul class="menu">
      <li class="menu__item">
        <button class="menu__btn" type="button">
          <span class="menu__btn__text">Busca</span>
          <CompIcon class="menu__icon" name="search" size="large" />
        </button>
      </li>

      <li class="menu__item">
        <RouterLink class="menu__btn" to="/" exactActiveClass="menu__btn--active">
          <span class="menu__btn__text">Home</span>
          <CompIcon class="menu__icon" name="home" size="large" />
        </RouterLink>
      </li>

      <li class="menu__item">
        <RouterLink class="menu__btn" to="/favoritos" exactActiveClass="menu__btn--active">
          <span class="menu__btn__text">Favoritos</span>
          <CompIcon class="menu__icon" name="bookmarks" size="large" />
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import CompIcon from '@/components/Icon/CompIcon.vue';
</script>

<style lang="scss">
@import '@/styles/utilities/utils/all';
@import '@/styles/utilities/variables/all';

.compSidebar {
  background-color: var(--bgColor--dark-4);
  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;
  width: 96px;
}

.menu {
  list-style: none;
  margin: 0;
  padding: 0;

  &__item {}

  &__btn {
    @extend %reset-btn;
    align-items: center;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    padding: var(--gap-3) var(--gap-2);
    transition: background-color .12s ease-in-out, color .12s ease-in-out;
    text-decoration: none;
    width: 100%;

    &:hover,
    &:focus {
      background-color: var(--neutral-color-low-medium);
      cursor: pointer;
      color: inherit;
    }

    &--active {
      background-color: var(--neutral-color-low-medium);
    }

    &__text {
      color: var(--neutralColor--light-1);
      padding-bottom: var(--gap-2);
      text-decoration: none;
    }
  }

  &__icon {
    fill: var(--neutral-color-high-medium);
  }
}
</style>
