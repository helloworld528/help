import Vue from 'vue'
import VueRouter from 'vue-router'
import Manage from '../views/Manage.vue'
import Login from '../views/Login.vue'
import HomePage from "@/components/HomePage/homepage.vue";
import admin from "@/components/User/admin.vue";
import AdminLogin from "@/views/AdminLogin.vue";
import city from "@/components/Shop/city.vue";
import App from "@/App.vue";
import manage from "@/views/Manage.vue";
import LeaseOrder from "@/components/Order/leaseorder.vue";
import LockerInfor from "@/components/Locker/lockerinfor.vue";
import ShopLocker from "@/components/Locker/shoplocker.vue";
import Shop from "@/components/Shop/shop.vue";

import { provinceAndCityData, regionData, provinceAndCityDataPlus, regionDataPlus, CodeToText, TextToCode } from 'element-china-area-data'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'manage',
    redirect: '/Login',
    component: Manage,
    children:[
      {
        path: '/client',
        name: 'Client',
        component: () => import('../components/User/client.vue')
      }, {
        path: '/homepage',
        name:'HomePage',
        component: HomePage
      },
      {
        path: '/admin',
        name:'admin',
        component: admin
      },
      {
        path: '/leaseorder',
        name:'LeaseOrder',
        component: LeaseOrder
      },
      {
        path: '/shop',
        name:'Shop',
        component: Shop
      },
      {
        path: '/city',
        name: 'City',
        component: city
      },
      {
        path: '/lockerinfor',
        name:'LockerInfor',
        component: LockerInfor
      },
      {
        path: '/shoplocker',
        name:'ShopLocker',
        component: ShopLocker
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/AdminLogin',
    name:'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/Manage',
    name:'manage',
    redirect: '/homepage',
    component: manage
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = VueRouter.prototype.push; VueRouter.prototype.push = function push(location, onResolve, onReject) { if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject); return originalPush.call(this, location).catch((err) => err); };
export default router
