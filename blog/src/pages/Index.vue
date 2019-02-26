// Index.vue
<template>
  <div class="container">
    <div class="row" v-for="i in Math.ceil(posts.length / 5)" style="margin-top: 25px">
      <div class="column column-20" v-for="post in posts.slice((i - 1) * 5, i * 5)">
        <div class="card">
          <img src="https://fakeimg.pl/300/">
          <h5 v-html="post.title.rendered"></h5>
          <p>{{ new Date(post.date_gmt).toLocaleString('it-IT', { year: 'numeric', month: 'numeric', day: 'numeric' }) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  data() {
    return {
      posts: [],
    };
  },

  async mounted() {
    const postsRequest = await fetch('https://blog.enricodeleo.com/wp-json/wp/v2/posts');
    try {
      const posts = this.posts = await postsRequest.json();
    } catch (error) {
      console.log(error);
    }
  },
}
</script>

<style lang="scss">
.card {
  background: white;
  padding: 0 0 5px 0;
  border-radius: 5px;

  p,
  h5 {
    padding: 0 10px;
  }
}
</style>
