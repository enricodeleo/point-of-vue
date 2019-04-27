import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const user = {
  state: {
    email: null,
    password: null,
  },
  mutations: {},
  actions: {},
  getters: {}
}

const store = new Vuex.Store({
  modules: {
    user,
  }
})

export { store }
