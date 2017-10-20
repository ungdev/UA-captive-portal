<template>
  <div>
    <h2 class="a-title a-title--blue center">Authentification</h2>
    <div class="center-form-container">
      <form class="center-form">
        <div class="input-group">
          <input v-model="login" class="a-input" type="text" placeholder="Login" />
          <div class="form-error" v-if="submitted && !validateLogin">Login incorrect</div>
        </div>
        <div class="input-group">
          <input v-model="password" class="a-input" type="password" placeholder="Mot de passe" />
          <div class="form-error" v-if="submitted && !validatePassword">Mot de passe incorrect</div>
        </div>
        <div class="center">
          <button type="button" class="a-button a-button--blue" @click="submitLogin">s'authentifier</button>
        </div>
      </form>
    </div>
    <div class="help-message">
      Les informations demandées si dessous t'ont été données après ton inscription sur <b>arena.utt.fr</b>.
    </div>
  </div>
</template>

<script>
import AuthService from '../services/AuthService'

export default {
  name: 'Login',
  data: function() {
    return {
      login: '',
      password: '',
      submitted: false
    }
  },
  computed: {
    validateLogin: function() {
      // validate login
      return this.login.length > 3
    },
    validatePassword: function() {
      // validate password
      return this.password.length > 3
    }
  },
  methods: {
    submitLogin: function() {
      this.submitted = true;
      // send request only if form valid
      if (this.validateLogin && this.validatePassword) {
        AuthService.auth(this.login, this.password)
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
