<template>
  <div>
    <h2 class="a-title a-title--blue center">Ton emplacement</h2>
    <div class="center-form-container">
      <form class="center-form">
        <div class="input-group">
          <input v-model="spot" class="a-input" type="text" placeholder="Numéro de place" />
          <div class="form-error" v-if="submitted && !validateSpot">Numéro de place incorrect</div>
        </div>
        <div class="center">
          <button type="button" class="a-button a-button--blue" @click="sendSpot">envoyer</button>
        </div>
      </form>
    </div>
    <div class="help-message">
      Le numéro est écrit sur ta table.
    </div>
  </div>
</template>

<script>
import PlayerService from '../services/PlayerService'

export default {
  name: 'Spot',
  data: function() {
    return {
      spot: '',
      submitted: false
    }
  },
  computed: {
    validateSpot: function() {
      return this.spot.length > 0
    }
  },
  methods: {
    sendSpot: function() {
      this.submitted = true;
      // send spot only if valid
      if (this.validateSpot) {
        PlayerService.sendSpot(this.spot)
        .then(res => {
          console.log(res);
          this.$emit('stepFinished');
        })
        .catch(err => console.error(err))
      }
    }
  }
}
</script>
