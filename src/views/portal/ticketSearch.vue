<template>
  <div class="main-container">
    <div>
      <searchFilter
        header="Опции тарифа"
        name="flightType"
        type="radio"
        :filteredData="flightTypeList"
      />
      <searchFilter
        class="mr-12"
        header="Авиокомпании"
        name="airlines"
        type="checkbox"
        :filteredData="airlinesList"
      />
      <searchResult
        v-for="flight in airFlights"
        :flightItem="flight"
        :key="flight.id"
      />
      <paginate
        v-model="selectedPage"
        :page-count="pageCount"
        :click-handler="paginated"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'className'"
      />
    </div>
  </div>
</template>

<script>
import searchFilter from "../../components/containers/searchFilter";
import Paginate from "vuejs-paginate";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "ticketSearch",
  components: {
    searchFilter,
    paginate: Paginate,
    searchResult: () => import("../../components/containers/searchResult")
  },
  created() {
    this.getFilterDataOnFile();
    this.paginated();
  },
  computed: {
    ...mapGetters(["getFilterData", "getPaginate", "getAirFlights"]),
    flightTypeList: {
      get() {
        return this.getFilterData("flightTypeList");
      }
    },
    airlinesList: {
      get() {
        return this.getFilterData("airlinesList");
      }
    },
    pageCount: {
      get() {
        return this.getPaginate("pageCount");
      }
    },
    selectedPage: {
      get() {
        return this.getPaginate("selectedPage");
      },
      set(value) {
        this.setPaginate({ type: "selectedPage", data: value });
      }
    },
    airFlights: {
      get() {
        return this.getAirFlights;
      }
    }
  },
  methods: {
    ...mapActions(["getFilterDataOnFile", "paginated"]),
    ...mapMutations(["setPaginate"])
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 1140px;
  margin: 0 auto;
}
</style>
