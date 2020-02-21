<template>
  <label :for="id">
    <input type="radio" :id="id" :checked="isChecked" @change="onChange" />
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
    }
  }
};
</script>

<style scoped></style>
