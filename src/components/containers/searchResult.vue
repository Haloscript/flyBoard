<template>
  <div v-if="flightItem">
    <i></i>
  </div>
</template>

<script>
export default {
  name: "serchResult.container",
  props: {
    flightItem: {
      type: Object,
      require: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
