import Vue from 'vue';
import VueRouter from 'vue-router';

import store from './store';

import IndexPage from './pages/Index';
import ProfilePage from './pages/Profile';
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
      path: '/profile',
      name: 'profile',
      component: ProfilePage,
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
  if (store.state.user.accessToken || to.name === 'login') {
    return next();
  }
  return next('/login');
});

Vue.use(VueRouter);

export default router;
