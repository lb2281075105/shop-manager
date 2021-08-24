import {createRouter,createWebHashHistory} from 'vue-router';
// Web 是浏览器网页端

import Login from './../views/login/Login.vue';
import Layout from './../views/layout/Layout.vue';

const routes = [
    {path:"/",redirect:"/layout"},
    {path:"/layout",component:Layout},
    {path:"/login",component:Login}

];

const router = createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;