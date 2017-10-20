<template>
  <div>
    <h2 class="a-title a-title--blue center">Ton adresse MAC</h2>
    <div class="center-form-container">
      <form class="center-form">
        <div class="input-group">
          <input v-model="macAddress" class="a-input" type="text" placeholder="xx:xx:xx:xx:xx:xx" />
          <div class="form-error" v-if="submitted && !validateMacAddress">Adresse MAC invalide</div>
        </div>
        <div class="center">
          <button type="button" class="a-button a-button--blue" @click="sendMacAddress">envoyer</button>
        </div>
      </form>
    </div>

    <!-- display help according to the user's OS -->
    <div class="help-message">
      Pour afficher ton adresse MAC:
      <ul v-if="userOS == 'windows'">
        <li>Presse les touches <b>Windows</b> et <b>R</b> en même temps</li>
        <li>Tape <b>cmd</b> dans la barre de recherche</li>
        <li>Execute <b>ipconfig /all</b></li>
        <li>Ta MAC est l'<b>adresse physique</b> affichée</li>
      </ul>
      <ul v-else-if="userOS == 'mac'">
        <li>Va dans <b>préférences système</b></li>
        <li>Onglet <b>réseau</b></li>
        <li>Clique sur <b>avancé</b></li>
        <li>Ton adresse MAC est affichée !</li>
      </ul>
      <ul v-else>
        <li>Ouvre un terminal</li>
        <li>Execute <b>ifconfig -a</b></li>
        <li>Ta MAC est la valeur qui suit <b>HWaddr</b></li>
      </ul>
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
      return (/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/).test(this.macAddress)
    },
    userOS: function() {
      // return the user OS
      if (navigator.appVersion.indexOf("Win")!=-1) return "windows";
      if (navigator.appVersion.indexOf("Mac")!=-1) return "mac";
      return "linux";
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
