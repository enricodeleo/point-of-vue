<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <p class="subtitle has-text-black">Please login to proceed.</p>
          <div class="box">
            <form @submit.prevent="loginSubmit">
              <div class="field">
                <div class="control">
                  <input v-model="email" class="input" type="text" placeholder="Your Email" autofocus="">
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input v-model="password" class="input" type="password" placeholder="Your Password">
                </div>
              </div>
              <button class="button is-block is-info is-fullwidth">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginPage',

  data() {
    return {
      email: null,
      password: null,
    };
  },

  methods: {
    loginSubmit() {
      this.$store.dispatch('doLogin', {
        email: this.email,
        password: this.password,
      });
    }
  }
}
</script>