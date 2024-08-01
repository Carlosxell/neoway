<template>
  <main class="app__wrapper">
    <CompSidebar class="app__sidebar" />

    <div class="app__content">
      <RouterView />
    </div>
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import { NewsService } from './services';
import { onMounted } from 'vue'
import CompSidebar from '@/components/Layout/CompSidebar.vue'

onMounted(async () => {
  const params = { q: 'tesla', from: '2024-06-29', sortBy: 'publishedAt', language: 'en' };

  try {
    const response = await NewsService.fetchNews(params);
    console.info(response, 'API RESPONSE');
  } catch (error) {
    console.log(error);
  }
})
</script>

<style lang="scss">
@import '@/styles/utilities/utils/all';
@import '@/styles/utilities/utils/root';
@import '@/styles/utilities/variables/all';

@include root();

#app {
  display: inline-flex;
  height: 100%;
  min-height: 100vh;
  max-width: 100vw;
  width: 100%;
}

.app {
  &__sidebar {}

  &__wrapper {
    background-color: var(--bgColor--dark-1);
    color: var(--neutral-color-high-light);
    display: inline-block;
    min-height: 100vh;
    padding-left: 96px;
    width: 100%;
  }

  &__content {
    margin: auto;
    max-width: 1048px;
    padding: var(--gap-2);
    width: 100%;
  }
}
</style>
