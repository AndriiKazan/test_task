import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

createApp(App).use(store).use(VueAxios, axios).use(router).mount('#app')
