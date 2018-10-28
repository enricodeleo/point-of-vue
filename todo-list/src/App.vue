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

<style lang="scss">

  @import '../node_modules/milligram/src/milligram.sass';


  #app-template {
    background-color: #ed68a1;
  }
</style>
