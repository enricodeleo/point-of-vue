// App.vue
<template>
  <div>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <router-link :to="{ name: 'index' }" class="navbar-item">
            <strong>My App</strong>
          </router-link>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <router-link :to="{ name: 'index' }" class="navbar-item">
              Home
            </router-link>

            <router-link :to="{ name: 'profile' }" class="navbar-item">
              Profile
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- component matched by the route will render here -->
    <router-view></router-view>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>&copy; Copyleft {{ new Date().toLocaleString('it-IT', { year: 'numeric' }) }} Point of Vue</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
  @import '../node_modules/bulma/bulma.sass';

  html,
  body {
    overflow-x: hidden;
  }
</style>
