<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
@import "./assets/css/main";

.page {
  padding: 60px 40px 120px;

  &__row {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-bottom: 40px;
  }

  &__item {
    display: flex;
    margin-right: 20px;
  }

  &__title {
    font-weight: bold;
    font-size: 1.3em;
  }
}

</style>
