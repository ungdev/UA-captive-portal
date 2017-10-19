<template>
  <div class="workflow-container">
    <div class="workflow">
      <h1 class="a-title a-title--blue center">Connexion au réseau UTT arena</h1>
      <div class="workflow-item">
        <div class="step-number">{{ step }} / 4</div>
        <Login v-if="step === 1" v-on:stepFinished="incrementStep" />
        <PlaceNumber v-if="step === 2" v-on:stepFinished="incrementStep" />
        <MacAddress v-if="step === 3" v-on:stepFinished="incrementStep" />
        <SuccessfulConnection v-if="step === 4" />
      </div>
    </div>
  </div>
</template>

<script>
import Login from './Login'
import PlaceNumber from './PlaceNumber'
import MacAddress from './MacAddress'
import SuccessfulConnection from './SuccessfulConnection'

export default {
  name: 'Workflow',
  components: {
    Login,
    PlaceNumber,
    MacAddress,
    SuccessfulConnection
  },
  data() {
    return {
      step: 1
    };
  },
  methods: {
    incrementStep: function() {
      this.step++;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './Workflow.css';
</style>
