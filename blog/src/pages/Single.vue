<template>
  <div class="container">
    <div class="row">
      <div class="column">
        <h3 v-html="post.title.rendered"></h3>
      </div>
    </div>
    <div class="row">
      <div class="column" v-html="post.content.rendered"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SinglePage',

  data() {
    return {
      post: [],
    };
  },

  async mounted() {
    const postsRequest = await fetch(`https://blog.enricodeleo.com/wp-json/wp/v2/posts/${this.$route.params.id}`);
    try {
      const post = this.post = await postsRequest.json();
    } catch (error) {
      console.log(error);
    }
  },
}
</script>