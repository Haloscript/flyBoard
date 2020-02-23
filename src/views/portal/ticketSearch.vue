<template>
  <div class="main-container">
    <div>
      <div class="content">
        <div class="content__left">
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
          <blueLink
            title="Сбросить все фильтры"
            @blueLinkClick="clearAllFilters"
          />
        </div>
        <div class="content__center">
          <searchResult
            v-for="flight in airFlights"
            :flightItem="flight"
            :key="flight.id"
          />
        </div>
      </div>
      <paginate
        v-model="selectedPage"
        :page-count="pageCount"
        :click-handler="paginated"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'paginate-container'"
      />
    </div>
  </div>
</template>

<script>
import searchFilter from "../../components/containers/searchFilter";
import Paginate from "vuejs-paginate";
import blueLink from "../../components/buttons/blueLink";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "ticketSearch",
  components: {
    searchFilter,
    paginate: Paginate,
    blueLink,
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
    ...mapActions(["getFilterDataOnFile", "paginated", "clearAllFilters"]),
    ...mapMutations(["setPaginate"])
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  width: 1140px;
  margin: 0 auto;
  & .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & .content__left {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
