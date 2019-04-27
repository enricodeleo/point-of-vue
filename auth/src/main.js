// main.js
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import { store } from './store';
import IndexPage from './pages/Index';
import LoginPage from './pages/Login';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
  ]
});

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
});