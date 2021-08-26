import {createRouter,createWebHashHistory} from 'vue-router';
// Web 是浏览器网页端

import Login from './../views/login/Login.vue';
import Layout from './../views/layout/Layout.vue';

const routes = [
    {path: '/login', component: Login},
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {path: 'home', component: ()=> import('../views/home/Home.vue')}
        ]
    },
    {
        path: '/pm',
        component: Layout,
        redirect: '/pm/product',
        children: [
            {path: 'product', component: ()=> import('../views/pm/product/List.vue')},
            {path: 'addProduct', component: ()=> import('../views/pm/product/Add.vue')},
            {path: 'updateProduct', component: ()=> import('../views/pm/product/Update.vue')},
            {path: 'productCategory', component: ()=> import('../views/pm/productCategory/List.vue')},
            {path: 'productCateAdd', component: ()=> import('../views/pm/productCategory/Add.vue')},
            {path: 'productCateUpdate', component: ()=> import('../views/pm/productCategory/Update.vue')}
        ]
    },
    {
        path: '/om',
        component: Layout,
        redirect: '/om/order',
        children: [
            {path: 'order', component: ()=> import('../views/om/List.vue')},
            {path: 'setting', component: ()=> import('../views/om/Setting.vue')}
        ]
    },
    {
        path: '/um',
        component: Layout,
        redirect: '/om/admin',
        children: [
            {path: 'admin', component: ()=> import('../views/um/admin/List.vue')},
            {path: 'role', component: ()=> import('../views/um/role/List.vue')},
            {path: 'allocMenu', component: ()=> import('../views/um/role/AllocMenu.vue')},
            {path: 'menu', component: ()=> import('../views/um/menu/List.vue')},
        ]
    },
    // 所有的未定义路由,统一跳转
    {
        path: '/:catchAll(.*)',
        component: ()=>import('../views/NotFound.vue')
    }
];

const router = createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;