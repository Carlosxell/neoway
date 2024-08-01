<template>
  <div class="about">
    <h1>This is the home page</h1>

    <CompEmptyState title="Nenhuma notícia encontrada." subtitle="" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { NewsService } from '../services';
import CompEmptyState from '@/components/EmptyState/CompEmptyState.vue'

let loading = ref(false);
let list = ref([]);

async function fetchNews() {
  let params = { qtd: 100, busca: 'Preços' };

  loading.value = true;

  try {
    const response = await NewsService.fetchNews(params);
    list.value = response.items;
    console.info(response, 'API RESPONSE');
  } catch (error) {
    console.log(error, 'ERROR');
  } finally {
    loading.value = false;
  }
}

onMounted(() => { fetchNews() });
</script>

<style lang="scss">
</style>
