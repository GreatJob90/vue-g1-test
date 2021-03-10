<template>
  <div class="page">
    <div class="page__row">
      <h1 class="page__title">Dashboard</h1>
    </div>
    <div class="page__row">
      <div class="page__item">
        <AppButton title="Append card"
                   type="main"
                   @click.stop.native="goToCreatePage"
        />
      </div>
      <div class="page__item">
        <AppSwitch :title="`drag n\` drop | ${dragActive ? 'ON' : 'OFF'}`"
                   :active="dragActive"
                   @toggle="toggleDragActive"
        />
      </div>
    </div>
    <Container orientation="horizontal"
               class="card-list"
               drag-class="card_drag"
               non-drag-area-selector=".card-wrap_locked"
               @drop="onCardDrop">
      <Draggable class="card-wrap"
                 :class="dragActive ? '' : 'card-wrap_locked'"
                 v-for="card in cardList"
                 :key="card.id">
        <DashBoardCard :title="card.name"
                       :description="card.description"
                       @click.stop.native="showCardInfoModal(card.id)"
        />
      </Draggable>
    </Container>
    <transition name="fade">
      <DashBoardModal v-if="infoModal.active"
                      :state="infoModal"
                      @close-modal="closeCardInfoModal"
      />
    </transition>
  </div>
</template>

<script>
import AppButton from '../components/simple/AppButton.vue'
import { Container, Draggable } from 'vue-smooth-dnd'
import AppSwitch from "@/components/simple/AppSwitch";
import DashBoardModal from "@/components/dashboard/DashBoardModal";
import DashBoardCard from "@/components/dashboard/DashBoardCard";

export default {
  name: 'Dashboard',
  components: {
    DashBoardCard,
    DashBoardModal,
    AppSwitch,
    AppButton,
    Container,
    Draggable
  },
  computed: {
    cardList () {
      return this.$store.getters.getCardList
    },
    dragActive () {
      return this.$store.getters.getDragActive
    },
    infoModal () {
      return this.$store.getters.getDashBoardInfoModal
    }
  },
  methods: {
    goToCreatePage () {
      this.$router.push({ path: '/create' })
    },
    onCardDrop (dropResult) {
      this.$store.dispatch('setCardListSort', dropResult)
    },
    toggleDragActive () {
      this.$store.dispatch('toggleDragActive')
    },
    showCardInfoModal (cardId) {
      this.$store.dispatch('showCardInfoModal', cardId)
    },
    closeCardInfoModal () {
      this.$store.dispatch('closeCardInfoModal')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/system/_vars";
@import "../assets/css/system/_mixins";

.card-list {
  display: flex !important;
  flex-flow: row wrap;
}

.card-wrap {
  width: calc(100% / 4);
  min-width: 200px;
  padding-right: 20px;
  padding-bottom: 20px;
  height: auto !important;
}
</style>
