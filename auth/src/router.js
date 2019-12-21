import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store';

import IndexPage from './pages/Index';
import LoginPage from './pages/Login';

const router = new VueRouter({
  mode: 'history',
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

/**
 * Navigation Guards
 * Redirect to login if the user is not authenticated
 */
router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !store.state.accessToken) {
    next('/login');
  }
  next();
});

Vue.use(VueRouter);

export default router;
