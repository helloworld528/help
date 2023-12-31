import Vue from 'vue'

import 'element-ui/lib/theme-chalk/index.css'; // 添加
import ElementUI from 'element-ui';// 添加

import App from './App.vue'
import router from './router'

import './assets/gloable.css'

import axios from "axios";

import request from '@/utils/request'//添加

Vue.config.productionTip = false
Vue.use(ElementUI);// 添加
Vue.prototype.request=request // 添加

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
