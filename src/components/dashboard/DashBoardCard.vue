<template>
  <div class="card">
    <h3 class="card__name">
      {{ shortText(title, 80) }}
    </h3>
    <p class="card__description">
      {{ shortText(description, 200) }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'dash-board-card',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    description: {
      type: String,
      default: 'Description'
    }
  },
  methods: {
    shortText (text, length) {
      return text.length > length ? `${text.slice(0, length)}...` : text
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/system/_vars';
@import '../../assets/css/system/_mixins';

.card {
  display: flex;
  flex-flow: column;
  padding: 24px;
  border: 2px solid $border_color;
  border-radius: 3px;
  height: 100%;
  cursor: pointer;
  background: $color_main;
  transition: .3s;
  word-break: break-all;

  &__name {
    font-size: 1.1em;
    font-weight: bold;
    margin-bottom: 16px;
  }

  &__description {
    flex: 1;
  }

  &_drag {
    transform: rotate(5deg);
  }
}
</style>
