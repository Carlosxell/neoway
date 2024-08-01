<template>
  <section class="homeView">
    <CompEmptyState title="Nenhuma notícia encontrada." subtitle="" v-if="!list?.length && !loading" />

    <div class="homeView__grid" v-else>
      <CompCard :checkIsMark="checkIsMark(item.id)"
                :dataInfo="item" v-for="(item, index) in list"
                :key="index" />
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { NewsService } from '../services';
import CompEmptyState from '@/components/EmptyState/CompEmptyState.vue'
import CompCard from '@/components/Card/CompCard.vue'

let loading = ref(false);
let list = ref([]);

const store = useStore();

const checkIsMark = (id) => {
  return store.getters['app/getBookmarks'].some((i) => (i.id === id))
};

async function fetchNews() {
  let params = { qtd: 100, busca: 'Preços' };

  loading.value = true;
  list.value = [];

  try {
    const { items } = await NewsService.fetchNews(params);
    list.value = [ ...items ];
    console.info(items, 'API RESPONSE');
  } catch (error) {
    console.log(error, 'ERROR');
  } finally {
    loading.value = false;
  }
}

onMounted(() => { fetchNews() });
</script>

<style lang="scss">
.homeView {
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
