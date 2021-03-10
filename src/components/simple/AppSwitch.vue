<template>
  <label class="switch">
    <input class="switch__input" type="checkbox" :checked="active" @change="toggle">
    <span class="switch__custom"></span>
    <span v-if="title" class="switch__text">{{ title }}</span>
  </label>
</template>

<script>
export default {
  name: 'app-switch',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'toggle me'
    },
  },
  methods: {
    toggle () {
      this.$emit('toggle')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/system/_vars';
@import '../../assets/css/system/_mixins';

.switch {
  display: flex;
  flex-flow: row nowrap;
  width: max-content;
  cursor: pointer;
  user-select: none;

  &__input {
    display: none;

    &:checked+.switch__custom {
      &:before {
        border: 1px solid $color_second;
      }

      &:after {
        background-color: $color_second;
        border: 1px solid $color_second;
        transform: translateX(-28px);
      }
    }
  }

  &__custom {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    &:before {
      content: '';
      width: 48px;
      height: 20px;
      border: 1px solid $border_color;
      border-radius: 10px;
      transition: .3s;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: auto;
      right: 3px;
      @include size(14px);
      border-radius: 50%;
      background-color: $border_color;
      transition: .3s;
    }
  }

  &__text {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-left: 15px;
  }

  &:hover {
    .switch__custom:before {
      border: 1px solid $color_second;
    }
  }
}
</style>
