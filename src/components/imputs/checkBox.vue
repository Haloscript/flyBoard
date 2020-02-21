<template>
  <label :for="id">
    <input type="checkbox" :id="id" v-model="model" />
    {{ title }}
  </label>
</template>

<script>
export default {
  name: "checkBox",
  props: {
    id: {
      type: String,
      require: true
    },
    title: {
      type: String,
      require: true
    },
    // checked: {
    //   type: Array,
    //   required: true
    // },
    boxKey: {
      type: String,
      required: true
    }
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set() {
        this.$emit("input", this.boxKey);
      }
    }
  },
  methods: {}
};
</script>

<style scoped></style>
