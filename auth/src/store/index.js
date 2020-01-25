import Vue from 'vue';
import Vuex from 'vuex';

import router from '../router';

Vue.use(Vuex);

const user = {
  state: {
    id: null,
    registeredAt: null,
    avatar: null,
    name: null,
    email: null,
    accessToken: null,
  },
  mutations: {
    updateUser: (state, data) => {
      state.id = data.id;
      state.registeredAt = data.registeredAt;
      state.avatar = data.avatar;
      state.name = data.name;
      state.email = data.email;
      state.accessToken = data.accessToken;
    },
    logout: (state) => {
      state.accessToken = null;
    },
  },
  actions: {
    async doLogin({ commit }, loginData) {
      const rawResponse = await fetch('https://5dfd619831f32a0014c82843.mockapi.io/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData),
      });
      const response = await rawResponse.json();

      // Check if response is okay, otherwise back to login
      if (response && response.accessToken) {
        await commit('updateUser', response);
        router.push('/profile');
      } else {
        router.push('/login');
      }
    },

    doLogout({ commit }) {
      commit('logout');
      router.push('/');
    }
  },
  getters: {},
};

const store = new Vuex.Store({
  modules: {
    user,
  },
});

export default store;
