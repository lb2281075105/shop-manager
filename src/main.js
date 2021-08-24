import { createApp } from 'vue';
import App from './App.vue';

// 引入路由
import router from './router/index.js';

// 引入store
import store from './store/index.js';

// 引入ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


const app = createApp(App);

app.use(router).use(store).use(ElementPlus);

app.mount('#app');
