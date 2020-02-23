<template>
  <div>
    <label class="checkbox" :for="id">
      <input type="radio" :id="id" :checked="isChecked" @change="onChange" />
      {{ title }}
      <span class="checkbox__checkmark"></span>
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

<style lang="scss" scoped>
.checkbox {
  margin-left: 12px;
  display: block;
  position: relative;
  height: 32px;
  cursor: pointer;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  padding-left: 24px;
  color: #000000;
}

.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox__checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 12px;
  width: 12px;
  background: #ffffff;
  border: 1px solid #b9b9b9;
  box-sizing: border-box;
  border-radius: 2px;
}

.checkbox:hover input ~ .checkbox__checkmark {
  background-image: url(../../assets/img/checkHover.svg);
  background-position: center;
  height: 12px;
  width: 12px;
}

.checkbox input:checked ~ .checkbox__checkmark {
  background-color: #55bb06;
  border: 1px solid #55bb06;
  box-sizing: border-box;
  border-radius: 2px;
}

.checkbox__checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox input:checked ~ .checkbox__checkmark:after {
  display: block;
}

.checkbox .checkbox__checkmark:after {
  background-image: url(../../assets/img/check.svg);
  background-position: center;
  height: 12px;
  width: 12px;
  right: -1px;
  top: -1px;
}
</style>
