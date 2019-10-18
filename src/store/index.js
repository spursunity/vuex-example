import Vue from 'vue';
import Vuex from 'vuex';

import config from '../config/config.js';
import newModule from './modules/newModule.js';

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    /**
     * movies is array of objects 'movie'
     * movie: { name: String , year: Number }
     */
    movies: [],
    inputName: '',
    inputYear: 0,
  },
  getters: {
    MOVIES: state => state.movies,
    INPUT_NAME: state => state.inputName,
    INPUT_YEAR: state => state.inputYear,
  },
  mutations: {
    SET_MOVIES: (state, payload) => {
      state.movies = [ ...state.movies, ...payload ];
    },
    SET_INPUT_NAME: (state, payload) => {
      state.inputName = payload || '';
    },
    SET_INPUT_YEAR: (state, payload) => {
      state.inputYear = payload || 0;
    },
  },
  actions: {
    GET_MOVIES: async (context, payload) => {
      let apiUrl = config.url;

      if (payload.name) {
        apiUrl += `api/name?name=${payload.name}`
      } else {
        apiUrl += `api/year?year=${payload.year}&time=${payload.order}`
      }
      const response = await fetch(apiUrl);

      if (response.status == 200) {
        const data = await response.json();
        const formattedData = data.map(movie => ({ name: movie.name, year: movie.year }));
        context.commit('SET_MOVIES', formattedData);
      }
      console.log(response);
    },
  },
  modules: {
    newModule,
  },
});
