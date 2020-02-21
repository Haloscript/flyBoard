<template>
  <div>
    <div class="filter-header"></div>
    <div class="filter-body">
      <radioInput
        v-for="(val, keyName) in filteredData"
        :id="keyName"
        :title="val"
        :radioKey="keyName"
        :key="keyName"
        v-model="flightType"
      ></radioInput>
    </div>
  </div>
</template>

<script>
import radio from "../imputs/radio";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "searchFilter",
  props: { filteredData: Object, type: String, name: String },
  components: {
    radioInput: radio
  },
  computed: {
    ...mapGetters(["getSelectedFilterData"]),
    flightType: {
      get() {
        return this.getSelectedFilterData("flightType");
      },
      set(val) {
        this.setSelectedFilter({ type: "flightType", data: val });
      }
    },
    airlines: {
      get() {
        return this.getSelectedFilterData("airlines");
      },
      set(val) {
        this.setSelectedFilter({ type: "airlines", data: val });
      }
    }
  },
  methods: {
    ...mapMutations(["setSelectedFilter"])
  }
};
</script>

<style lang="scss" scoped></style>
