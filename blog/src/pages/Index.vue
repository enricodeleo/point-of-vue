<template>
  <div class="container">
    Index
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
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  },
}
</script>