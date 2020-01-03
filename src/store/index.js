import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


const userSelectedDarkMode = window.localStorage.getItem("isDarkMode") === "true";




// Initial state
const state = {
  isDarkMode: userSelectedDarkMode
}

// Getters 
const getters = {
  isDarkMode(state) {
    return state.isDarkMode
  }
}


// Mutations 
const mutations = {
  toggleDarkMode(state) {
    if (state.isDarkMode === true) {
      state.isDarkMode = false
      document.body.style.background = "#F0F3F5"
      window.localStorage.setItem("isDarkMode", "false")
    } else {
      state.isDarkMode = true
      document.body.style.background = "#212C4F"
      window.localStorage.setItem("isDarkMode", "true")
    }
  }
}

// Actions 
const actions = {
  triggerDarkMode(context) {
    context.commit('toggleDarkMode');
  }
}

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {}
});
