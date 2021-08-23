import { createApp } from 'vue';
import App from './App.vue';

import router from './router/index.js';
import store from './store/index.js';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


const app = createApp(App);

app.use(router).use(store).use(ElementPlus);

app.mount('#app');
