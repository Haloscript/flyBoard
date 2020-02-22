<template>
  <div>
    <button class="greenButton">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "greenButton",
  props: {
    text: {
      type: String,
      require: true
    }
  }
};
</script>

<style lang="scss" scoped>
.greenButton {
  width: 200px;
  height: 40px;
  background: #55bb06;
  border-radius: 4px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
}
</style>
