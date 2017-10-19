<template>
  <div>
    <h2 class="a-title a-title--blue center">Ton adresse MAC</h2>
    <div class="center-form-container">
      <form class="center-form">
        <input class="a-input" type="text" placeholder="Adresse MAC" />
        <div class="center">
          <button type="button" class="a-button a-button--blue" @click="sendMacAddress">envoyer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MacAddress',
  methods: {
    sendMacAddress: function() {
      this.$emit('stepFinished')
    }
  }
}
</script>
