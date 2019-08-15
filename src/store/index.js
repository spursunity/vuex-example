import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    /**
     * movies is array of objects 'movie'
     * movie: { name: String , year: Number }
     */
    movies: null,
  },
  getters: {
    MOVIES: state => state.movies,
  },
  mutations: {
    SET_MOVIES: (state, payload) => {
      state.movies = payload;
    },
  },
  actions: {
    GET_MOVIES: async (context, payload) => {
      const data = await fetch('<url>');

      context.commit('SET_MOVIES', data);
    },
  },
});
