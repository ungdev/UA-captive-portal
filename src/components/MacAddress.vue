<template>
  <div>
    <h2 class="a-title a-title--blue center">Ton adresse MAC</h2>
    <div class="center-form-container">
      <form class="center-form">
        <div class="input-group">
          <input v-model="macAddress" class="a-input" type="text" placeholder="Adresse MAC" />
          <div class="form-error" v-if="submitted && !validateMacAddress">Adresse MAC invalide</div>
        </div>
        <div class="center">
          <button type="button" class="a-button a-button--blue" @click="sendMacAddress">envoyer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import PlayerService from '../services/PlayerService'

export default {
  name: 'MacAddress',
  data: function() {
    return {
      submitted: false,
      macAddress: ''
    }
  },
  computed: {
    validateMacAddress: function() {
      return this.macAddress.length > 0
    }
  },
  methods: {
    sendMacAddress: function() {
      this.submitted = true;
      // submit only if the mac address is valid
      if (this.validateMacAddress) {
        PlayerService.sendMacAddress(this.macAddress)
        .then(res => {
          console.log(res);
          this.$emit('stepFinished')
        })
        .catch(err => console.log(err))
      }
    }
  }
}
</script>
