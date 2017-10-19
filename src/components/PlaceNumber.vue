<template>
  <div>
    <h2 class="a-title a-title--blue center">Ton emplacement</h2>
    <div class="center-form-container">
      <form class="center-form">
        <input class="a-input" type="text" placeholder="Numéro de place" />
        <div class="center">
          <button type="button" class="a-button a-button--blue" @click="sendPlaceNumber">envoyer</button>
        </div>
      </form>
    </div>
    <div class="help-message">
      Le numéro est écrit sur ta table.
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlaceNumber',
  methods: {
    sendPlaceNumber: function() {
      this.$emit('stepFinished')
    }
  }
}
</script>
