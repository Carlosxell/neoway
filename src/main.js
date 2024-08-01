import './assets/reset.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import { useVuelidate } from '@vuelidate/core';

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
