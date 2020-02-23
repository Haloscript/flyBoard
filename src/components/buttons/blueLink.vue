<template>
  <span @click="$emit('blueLinkClick')">{{ title }}</span>
</template>

<script>
export default {
  name: "blueLink",
  props: {
    title: {
      type: String,
      require: true
    }
  }
};
</script>

<style lang="scss" scoped>
span {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  margin-right: 23px;
  color: #7284e4;
  cursor: pointer;
  width: fit-content;
  border-bottom: 1px dashed #7284e4;
}
</style>
