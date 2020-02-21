import Vue from "vue";
import Vuex from "vuex";
import ticketSearch from "./modules/ticketSearch";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { ticketSearch }
});
