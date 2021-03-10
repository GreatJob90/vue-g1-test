<template>
  <label class="textarea__wrap">
    <span class="textarea__text" v-if="title">{{title}}</span>
    <textarea class="textarea"
              :value="value"
              :placeholder="placeholder"
              ref="input"
              @keyup="valueChanged"
              @focus="focused"
              :tabindex="1"
    >
    </textarea>
    <transition name="scale-down">
      <span class="textarea__validation" :class="validation.type" v-if="validation.type">{{ validation.message }}</span>
    </transition>
  </label>
</template>

<script>
export default {
  name: 'app-textarea',
  props: {
    title: {
      type: String,
      default: 'Textarea'
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
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
      this.$refs.input.scrollTop = this.$refs.input.scrollHeight
    },
    focused () {
      this.$emit('focused')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/system/_vars';
@import '../../assets/css/system/_mixins';

.textarea {
  width: 100%;
  min-width: 400px;
  min-height: 160px;
  padding: 10px 15px 10px 15px;
  color: $font_color_main;
  border: 1px solid $border_color;
  border-radius: 3px;
  transition: .3s;
  font: inherit;

  &__wrap {
    position: relative;
  }

  &__text {
    color: $font_color_main;
    display: block;
    margin-bottom: 10px;
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
