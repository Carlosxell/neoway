<template>
  <section class="bookmarksView">
    <CompEmptyState title="Nenhuma notícia foi encontrada dentre os favoritos." subtitle="" v-if="!bookmarks?.length" />

    <div class="homeView__grid" v-else>
      <CompCard :checkIsMark="checkIsMark(item.id)"
                :dataInfo="item" v-for="(item, index) in bookmarks"
                :key="index" />
    </div>
  </section>
</template>

<script setup>
import CompCard from '@/components/Card/CompCard.vue';
import CompEmptyState from '@/components/EmptyState/CompEmptyState.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const bookmarks = computed(() => store.getters['app/getBookmarks']);
const checkIsMark = (id) => store.getters['app/getBookmarks'].some((i) => (i.id === id));
</script>

<style lang="scss">
.bookmarksView {
  &__grid {
    display: grid;
    gap: var(--gap-5);
    margin-top: var(--gap-10);

    @media(min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    @media(min-width: 912px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
}
</style>
