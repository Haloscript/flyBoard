import { flightType, airlines } from "../../static/filter_data";
const state = {
  filterStaticData: {
    flightTypeList: null,
    airlinesList: null
  },
  selectFilter: {
    flightType: '',
    airlines: []
  }
};

const getters = {
  getFilterData: state => name => state.filterStaticData[name],
  getSelectedFilterData: state => name => state.selectFilter[name]
};

const mutations = {
  setFilterData(state, { type, data }) {
    state.filterStaticData[type] = data;
  },
  setSelectedFilter(state, { type, data }) {
    if (type === "flightType") state.selectFilter[type] = data;
    else state.selectFilter[type].push(data);
  }
};

const actions = {
  getFilterDataOnFile({ commit }) {
    console.log(flightType, airlines);
    commit("setFilterData", { type: "flightTypeList", data: flightType });
    commit("setFilterData", { type: "airlinesList", data: airlines });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
