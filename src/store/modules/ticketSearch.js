import { flightType, airlines } from "../../static/filter_data";
import { AirFlightsService } from "../../app/Services/AirFlights.service";

const FLIGHTS = new AirFlightsService();

const state = {
  filterStaticData: {
    flightTypeList: null,
    airlinesList: null
  },
  selectFilter: {
    flightType: "",
    airlines: []
  },
  airFlights: [],
  paginate: {
    selectedPage: 1,
    pageCount: 0
  }
};

const getters = {
  getFilterData: state => name => state.filterStaticData[name],
  getSelectedFilterData: state => name => state.selectFilter[name],
  getPaginate: state => name => state.paginate[name],
  getAirFlights: state => state.airFlights
};

const mutations = {
  setFilterData(state, { type, data }) {
    state.filterStaticData[type] = data;
  },
  setAirFlights(state, { data }) {
    state.airFlights = data;
  },
  setSelectedFilterFlightType(state, { data }) {
    state.selectFilter.flightType = data;
  },
  setSelectedFilterAirlines(state, { data }) {
    if (state.selectFilter.airlines.indexOf(data) >= 0)
      state.selectFilter.airlines.splice(
        state.selectFilter.airlines.indexOf(data),
        1
      );
    else state.selectFilter.airlines.push(data);
  },
  setPaginate(state, { type, data }) {
    state.paginate[type] = data;
  }
};

const actions = {
  getFilterDataOnFile({ commit }) {
    commit("setFilterData", { type: "flightTypeList", data: flightType });
    commit("setFilterData", { type: "airlinesList", data: airlines });
  },
  paginated({ state, commit }) {
    FLIGHTS.paginate(state.paginate.selectedPage);
    commit("setAirFlights", { data: FLIGHTS.sendFlights });
    commit("setPaginate", { type: "pageCount", data: FLIGHTS.pageCount });
  },
  startFiltration({ state, commit }) {
    FLIGHTS.filtration(state.selectFilter);
    commit("setAirFlights", { data: FLIGHTS.sendFlights });
    commit("setPaginate", { type: "pageCount", data: FLIGHTS.pageCount });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
