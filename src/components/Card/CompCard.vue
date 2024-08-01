<template>
  <div class="compCard">
    <figure class="compCard__figure">
      <div class="compCard__figure__wrapImg">
        <img class="compCard__figure__img" :src="showImage" :alt="dataInfo?.titulo" />
      </div>

      <figcaption class="compCard__content">
        <h6 class="compCard__content__title">{{ dataInfo?.titulo }}</h6>
        <p class="compCard__content__text">{{ dataInfo?.introducao }}</p>

        <div class="compCard__content__actions">
          <CompIcon @click="saveToFavorites"
                    name="bookmarks"
                    v-if="checkIsMark" />

          <CompIcon @click="saveToFavorites"
                    name="bookmark"
                    v-else />

          <CompIcon @click="openNewTab"
                    name="open_in_new" />
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import CompIcon from '@/components/Icon/CompIcon.vue'
const props = defineProps({ checkIsMark: { type: Boolean, default: false }, dataInfo: { type: Object } });

const store = useStore();

const bookmarks = computed(() => store.getters['app/getBookmarks']);
const lastSeenList = computed(() => store.getters['app/getLastSeenList']);


const showImage = computed(() => {
  const { imagens } = props.dataInfo;
  const url = imagens ? JSON.parse(imagens) : '';
  return url?.image_intro ? `https://agenciadenoticias.ibge.gov.br/${url?.image_intro}` : 'https://placehold.co/320x160/EEE/31343C';
});

function openNewTab() {
  store.dispatch('app/setLastSeenList', { ...props.dataInfo });
  return window.open(props.dataInfo?.link, '_blank').focus();
}

function saveToFavorites() {
  store.dispatch('app/setBookmarks', { ...props.dataInfo });
}
</script>

<style lang="scss">
@import '@/styles/utilities/utils/all';
@import '@/styles/utilities/variables/all';

.compCard {
  background-color: #fff;
  border-radius: var(--border-radius-xs);

  &__figure {
    display: flex;
    flex-direction: column;
    min-height: 100%;

    &__wrapImg {
      border-radius: var(--border-radius-xs) var(--border-radius-xs) 0 0;
      height: 92px;
      overflow: hidden;
    }

    &__img {
      object-fit: cover;
      height: 100%;
      max-width: 100%;
      width: 100%;
    }
  }

  &__content {
    color: var(--neutral-color-low-medium);
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    padding: var(--gap-3);

    &__title {
      @include highlight-subtitle-sm($lh: var(--line-height-sm));
      margin-bottom: var(--gap-3);
    }

    &__text {
      font-size: var(--font-size-sm);
    }

    &__actions {
      display: flex;
      gap: var(--gap-2);
      justify-content: flex-end;
      margin-top: auto;
      padding-top: var(--gap-2);

      .compIcon {
        cursor: pointer;
      }
    }
  }
}
</style>
