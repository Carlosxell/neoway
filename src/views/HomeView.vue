<template>
  <section class="homeView">
    <CompEmptyState subtitle=""
                    title="Nenhuma notícia encontrada."
                    v-if="!list?.length && !loading" />

    <div class="homeView__grid" v-else>
      <CompCard :checkIsMark="checkIsMark(item.id)"
                :dataInfo="item" v-for="(item, index) in list"
                :key="index" />
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { NewsService } from '../services';
import CompEmptyState from '@/components/EmptyState/CompEmptyState.vue';
import CompCard from '@/components/Card/CompCard.vue';

const store = useStore();

let loading = ref(false);
let list = ref([]);

const filters = computed(() => store.getters['app/getCheckedFilters']);

const checkIsMark = (id) => {
  return store.getters['app/getBookmarks'].some((i) => (i.id === id))
};

async function fetchNews() {
  let params = { qtd: 100 };

  loading.value = true;
  list.value = [];

  if (filters.value.search) {
    params = { ...params, ...filters.value };
  }

  try {
    const { items } = await NewsService.fetchNews(params);
    list.value = [ ...items ];
  } catch (error) {
    console.log(error, 'ERROR');
  } finally {
    loading.value = false;
  }
}

watch(() => filters.value, () => fetchNews(), { immediate: true, deep: true });
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
