// App.vue
<template>
  <div>
    <header class="header-main">
      <div class="row">
        <div class="column text-center">
          <h2 class="no-margin"><strong>My Blog</strong></h2>
        </div>
      </div>
    </header>
    <div class="container">
      <!-- component matched by the route will render here -->
      <router-view></router-view>
    </div>
    <footer class="footer-main">
      <div class="row">
        <div class="column text-center">
          <p class="no-margin">&copy; Copyleft {{ new Date().toLocaleString('it-IT', { year: 'numeric' }) }} Enrico Deleo</p>
        </div>
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
  $color-secondary: #9c9c9c;

  @import '../node_modules/milligram/src/milligram.sass';
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i');

  html,
  body {
    width: 100%;
    height: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
    background-color: #f8f9f9;
  }

  body {
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Oxygen-Sans", Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  .text-left {
    text-align: left;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .text-medium {
    font-weight: 500;
  }

  .text-white {
    color: #ffffff;
  }

  .no-margin {
    margin: 0;
  }

  .footer-main,
  .header-main {
    background: white;
    padding: 1rem 0;
  }

</style>
