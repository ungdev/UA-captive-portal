<template>
  <div class="workflow-container">
    <div class="workflow">
      <h1 class="a-title a-title--blue center">Connexion au réseau UTT arena</h1>
      <Login />
    </div>
  </div>
</template>

<script>
import Login from './Login'

export default {
  name: 'Workflow',
  components: {
    Login
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import './Workflow.css';
</style>
