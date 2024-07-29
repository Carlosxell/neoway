import { createStore } from 'vuex';
import { VuexPersistence } from 'vuex-persist';
import App from './modules/app/index.js';

const modules = {
  app: { ...App },
}

const vuexLocalStorage = new VuexPersistence({})

export default createStore({
  modules,
  plugins: [vuexLocalStorage.plugin]
});
