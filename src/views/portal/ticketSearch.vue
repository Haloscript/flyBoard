<template>
  <div>
    <searchFilter
      name="flightType"
      type="radio"
      :filteredData="flightTypeList"
    />
    <!--    <searchFilter-->
    <!--      name="airlines"-->
    <!--      type="checkbox"-->
    <!--      :filteredData="airlinesList"-->
    <!--    />-->
  </div>
</template>

<script>
import searchFilter from "../../components/containers/searchFilter";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ticketSearch",
  components: {
    searchFilter
  },
  created() {
    this.getFilterDataOnFile();
  },
  computed: {
    ...mapGetters(["getFilterData"]),
    flightTypeList: {
      get() {
        return this.getFilterData("flightTypeList");
      }
    },
    airlinesList: {
      get() {
        return this.getFilterData("airlinesList");
      }
    }
  },
  methods: {
    ...mapActions(["getFilterDataOnFile"])
  }
};
</script>

<style scoped></style>
