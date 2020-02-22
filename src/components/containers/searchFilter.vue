<template>
  <div class="filter-container mb-12">
    <div class="filter-header mb-12">
      <span>{{ header }}</span>
    </div>
    <div class="filter-body">
      <!-- eslint-disable -->
      <radioInput
        v-if="type === 'radio'"
        v-for="(val, keyName) in filteredData"
        :id="keyName"
        :title="val"
        :radioKey="keyName"
        :key="keyName"
        v-model="flightType"
      />
      <checkBoxInput
        v-if="type === 'checkbox'"
        v-for="(val, keyName) in filteredData"
        :id="keyName"
        :key="keyName"
        :boxKey="keyName"
        :title="val"
        v-model="airlines"
      />
      <!-- eslint-enable -->
    </div>
  </div>
</template>

<script>
import radio from "../imputs/radio";
import checkBox from "../imputs/checkBox";
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "searchFilter",
  props: {
    filteredData: {
      type: Object,
      require: true
    },
    type: { type: String, require: true },
    name: { type: String, require: true },
    header: { type: String, require: true }
  },
  components: {
    radioInput: radio,
    checkBoxInput: checkBox
  },
  computed: {
    ...mapGetters(["getSelectedFilterData"]),
    flightType: {
      get() {
        return this.getSelectedFilterData("flightType");
      },
      set(val) {
        this.setSelectedFilterFlightType({ data: val });
        this.startFiltration();
      }
    },
    airlines: {
      get() {
        return this.getSelectedFilterData("airlines");
      },
      set(val) {
        this.setSelectedFilterAirlines({ data: val });
        this.startFiltration();
      }
    }
  },
  methods: {
    ...mapMutations([
      "setSelectedFilter",
      "setSelectedFilterFlightType",
      "setSelectedFilterAirlines"
    ]),
    ...mapActions(["startFiltration"])
  }
};
</script>

<style lang="scss" scoped>
.filter-container {
  width: 240px;
  background: #f5f5f5;
  border-radius: 4px;
  & .filter-header {
    span {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      color: #202123;
    }
  }
}
</style>
