// main.js
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import IndexPage from './pages/Index';
import SinglePage from './pages/Single';

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexPage,
    },
    {
      path: '/article/:id',
      name: 'single',
      component: SinglePage,
    },
  ]
});

Vue.use(VueRouter);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
});