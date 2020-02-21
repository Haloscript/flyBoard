<template>
  <div>
    <label :for="id">
      <input type="radio" :id="id" :checked="isChecked" @change="onChange" />
      {{ title }}
    </label>
  </div>
</template>

<script>
export default {
  name: "radio",
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    id: {
      type: String
    },
    title: {
      type: String,
      default() {
        return "";
      }
    },
    checked: {
      type: String,
      required: true
    },
    radioKey: {
      type: String,
      required: true
    }
  },
  computed: {
    isChecked: function() {
      return this.checked === this.radioKey;
    }
  },
  methods: {
    onChange: function() {
      this.$emit("change", this.radioKey);
    }
  }
};
</script>

<style scoped></style>
