<template>
  <div id="app-template">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: 'Hello World!'
    }
  }
}
</script>

<style lang="css">
  #app-template {
    color: #56b983;
  }
</style>
