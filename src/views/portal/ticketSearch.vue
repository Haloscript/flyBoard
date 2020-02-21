<template>
  <div>
    <searchFilter
      header="Опции тарифа"
      name="flightType"
      type="radio"
      :filteredData="flightTypeList"
    />
    <searchFilter
      header="Авиокомпании"
      name="airlines"
      type="checkbox"
      :filteredData="airlinesList"
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
</template>

<script>
import searchFilter from "../../components/containers/searchFilter";
import Paginate from "vuejs-paginate";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "ticketSearch",
  components: {
    searchFilter,
    paginate: Paginate
  },
  created() {
    this.getFilterDataOnFile();
    this.paginated();
  },
  computed: {
    ...mapGetters(["getFilterData", "getPaginate"]),
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
    }
  },
  methods: {
    ...mapActions(["getFilterDataOnFile", "paginated"]),
    ...mapMutations(["setPaginate"])
  }
};
</script>

<style scoped></style>
