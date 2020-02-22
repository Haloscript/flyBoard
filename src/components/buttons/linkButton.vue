<template>
  <a class="linkButton"
    ><span>{{ text }}</span></a
  >
</template>

<script>
export default {
  name: "linkButton",
  props: {
    text: {
      type: String,
      require: true
    }
  }
};
</script>

<style lang="scss" scoped>
.linkButton {
  height: 24px;
  width: 128px;
  background: #eaf0fa;
  border-radius: 2px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #5763b3;
  cursor: pointer;

  & span {
    vertical-align: middle;
  }
}
</style>
