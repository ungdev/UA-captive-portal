<template>
  <div class="workflow-item">
    <div class="step-counter">1 / 4</div>
    <h2 class="a-title a-title--blue center">Authentification</h2>
    <div class="login-form-container">
      <form class="login-form">
        <input class="a-input" type="text" placeholder="Login" />
        <input class="a-input" type="password" placeholder="Mot de passe" />
        <div class="center">
          <button class="a-button a-button--blue">valider</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>
.login-form > * {
  margin-top: 10px;
  margin-right: auto;
  margin-left: auto;
}

.login-form-container {
  flex: 1;
}
</style>
