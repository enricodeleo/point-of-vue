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

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <router-link :to="{ name: 'index' }" class="button is-light">
                  Log in
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <!-- component matched by the route will render here -->
      <router-view></router-view>
    </div>
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
    width: 100%;
    height: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
  }
</style>
