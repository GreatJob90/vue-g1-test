<template>
  <div class="modal-mask" @mousedown.self.stop="closeModal">
    <div class="modal" @click.stop>
      <div class="modal__head">
        <h3 class="modal__title">{{ state.cardName }}</h3>
        <div class="close" @click.stop="closeModal">
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L16 16" stroke="currentColor" stroke-width="2"/>
            <path d="M1 16L16 1" stroke="currentColor" stroke-width="2"/>
          </svg>
        </div>
      </div>
      <div class="modal__body">
        {{ state.cardDescription }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dash-board-modal',
  props: {
    state: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    closeModal () {
      this.$emit('close-modal')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/system/_vars';
@import '../../assets/css/system/_mixins';

.modal-mask {
  position: fixed;
  z-index: 99999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10% 0 10%;
  overflow: auto;
  background: rgba(0, 0, 0, .4);
}

.modal {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 90%;
  max-width: 520px;
  border-radius: 3px;
  background: $color_main;
  box-shadow: 0 4px 4px rgba(23, 63, 125, 0.25);
  word-break: break-all;

  &__head {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 100%;
    background: $color_second;
    padding: 20px;
  }

  &__title {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
    font-weight: bold;
    color: $color_main;
    font-size: 18px;
    margin-left: auto;
  }

  &__body {
    width: 100%;
    padding: 40px 20px;
    word-break: break-all;
  }

  .close {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    @include size(40px);
    flex-shrink: 0;
    margin-left: auto;
    color: $color_main;
    cursor: pointer;
    transition: .3s;

    &:hover {
      color: $color_alt;
    }
  }
}
</style>
