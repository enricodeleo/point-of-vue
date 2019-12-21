import Vue from 'vue';
import Vuex from 'vuex';

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
      state = data;
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
      commit('updateUser', response);
    },

    doLogout({ commit }) {
      commit('logout');
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
