<template>
  <button class="button" :class="`button-${type}`">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'app-button',
  props: {
    title: {
      type: String,
      default: 'push me'
    },
    type: {
      type: String,
      default: 'main'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/system/_vars';
@import '../../assets/css/system/_mixins';

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  color: $color_alt;
  font-weight: bold;
  width: 140px;
  border-radius: 3px;
  padding: 10px 20px;
  transition: .3s;
  cursor: pointer;
  user-select: none;
}

.button-main {
  background: $button_color;
  color: $color_main;
  box-shadow: 0 2px 2px #557428;

  &:hover {
    box-shadow: none;
  }

  &:active {
    box-shadow: inset 0 4px 4px #557428;
  }
}

.button-alt {
  background: $color_main;
  border: 1px solid $border_color;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.42);

  &:hover {
    box-shadow: none;
  }

  &:active {
    box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.45);
  }
}
</style>
