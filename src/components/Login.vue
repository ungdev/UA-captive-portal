<template>
  <div>
    <h2 class="a-title a-title--blue center">Authentification</h2>
    <div class="center-form-container">
      <form class="center-form">
        <input class="a-input" type="text" placeholder="Login" />
        <input class="a-input" type="password" placeholder="Mot de passe" />
        <div class="center">
          <button type="button" class="a-button a-button--blue" @click="login">s'authentifier</button>
        </div>
      </form>
    </div>
    <div class="help-message">
      Les informations demandées si dessous t'ont été données après ton inscription sur <b>arena.utt.fr</b>.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    login: function() {
      this.$emit('stepFinished')
    }
  }
}
</script>
