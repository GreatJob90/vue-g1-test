<template>
  <div class="page">
    <div class="page__row">
      <h1 class="page__title">Create new card</h1>
    </div>
    <div class="page__row">
      <AppInput title="Title"
                :value="newCard.name.value"
                :validation="newCard.name.validation"
                @value-changed="setNewCardName"
                @focused="clearValidation"
      />
    </div>
    <div class="page__row">
      <AppTextarea title="Description"
                   :value="newCard.description.value"
                   :validation="newCard.description.validation"
                   @value-changed="setNewCardDescription"
                   @focused="clearValidation"
      />
    </div>
    <div class="page__row">
      <div class="page__item">
        <AppButton title="Append"
                   type="main"
                   @click.stop.native="createNewCard"
        />
      </div>
      <div class="page__item">
        <AppButton title="Cancel"
                   type="alt"
                   @click.stop.native="goBack"
        />
      </div>
    </div>
  </div>
</template>

<script>

import AppInput from "@/components/simple/AppInput";
import AppButton from "@/components/simple/AppButton";
import AppTextarea from "@/components/simple/AppTextarea";
export default {
  name: 'Create',
  components: {
    AppTextarea,
    AppButton,
    AppInput
  },
  computed: {
    newCard () {
      return this.$store.getters.getNewCard
    }
  },
  methods: {
    setNewCardName (name) {
      this.$store.dispatch('setNewCardName', name)
    },
    setNewCardDescription (description) {
      this.$store.dispatch('setNewCardDescription', description)
    },
    createNewCard () {
      this.$store.dispatch('createNewCard')
    },
    clearValidation () {
      this.$store.dispatch('clearCreateCardValidation')
    },
    goBack () {
      window.history.length > 2 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
