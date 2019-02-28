// 入口文件

import Vue from 'vue';
import App from './App.vue';

import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'

import { Header } from 'mint-ui';



Vue.component(Header.name, Header)

new Vue({
    el: '#app',
    render: c => c(App)
})