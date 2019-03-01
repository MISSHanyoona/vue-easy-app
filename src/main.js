// 入口文件

import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router.js';

import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import { Header, Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header)

Vue.prototype.$axios = axios;

new Vue({
    el: '#app',
    router,
    render: c => c(App)
})