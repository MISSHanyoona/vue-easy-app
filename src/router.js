import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

import Home from './views/home.vue';
import Member from './views/member.vue';
import ShopCar from './views/shopcar.vue';
import Search from './views/search.vue';


export default  new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', name: 'home', component: Home },
        { path: '/member', name: 'member', component: Member },
        { path: '/shopcar', name: 'shopcar', component: ShopCar },
        { path: '/search', name: 'search', component: Search },
    ],
    linkActiveClass: 'mui-active'
})

