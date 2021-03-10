<template>
  <label class="input__wrap">
    <span class="input__text" v-if="title">{{ title }}</span>
    <input class="input"
           type="text"
           :placeholder="placeholder"
           :value="value"
           ref="input"
           @keyup="valueChanged"
           @keyup.enter.prevent="keyupEnter"
           @focus="focused"
           :tabindex="1"
    />
    <transition name="scale-down">
      <span class="input__validation" :class="validation.type" v-if="validation.type">{{ validation.message }}</span>
    </transition>
  </label>
</template>

<script>
export default {
  name: 'app-input',
  props: {
    title: String,
    placeholder: String,
    value: String,
    validation: {
      type: Object,
      default: () => {
        return {
          type: null,
          message: ''
        }
      }
    }
  },
  methods: {
    valueChanged () {
      this.$emit('value-changed', this.$refs.input.value)
    },
    keyupEnter () {
      this.$emit('keyup-enter')
    },
    focused () {
      this.$emit('focused')
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/system/_vars';
@import '../../assets/css/system/_mixins';

.input {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 40px;
  padding: 10px 15px 10px 15px;
  color: $font_color_main;
  border: 1px solid $border_color;
  border-radius: 3px;
  transition: .3s;
  font: inherit;

  &__wrap {
    position: relative;
    width: 100%;
    max-width: 400px;
    display: block;
  }

  &__text {
    display: block;
    margin-bottom: 10px;
    color: $font_color_main;
  }

  &__validation {
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    padding: 2px 10px;
    width: 100%;
    border-radius: 3px;
    color: $color_main;
    transition: .3s;
    transform-origin: top;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.25;

    &.error {
      background: $color_error;
    }

    &.warning {
      background: $color_warning;
    }
  }

  &:focus {
    box-shadow: inset 0 4px 4px rgba(23, 63, 125, 0.25);
  }
}
</style>
