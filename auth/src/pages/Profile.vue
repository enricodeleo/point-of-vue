// Index.vue
<template>
  <div class="page">
    <section class="section">
    <div class="container">
      <h1 class="title">
        Pagina profilo
      </h1>
    </div>
  </section>
    <section class="section">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img :src="avatar" alt="Avatar">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ name }}</p>
              <p class="subtitle is-6">{{ email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',

  data() {
    return {
      avatar: this.$store.state.user.avatar,
      name: this.$store.state.user.name,
      email: this.$store.state.user.email,
    };
  },
}
</script>
