<template>
  <div id="app">

    <img alt="Vue logo" src="./assets/logo.png">
    <NewPost />
    <p>Количество постов {{postsCount}}</p>
    <div class="post" v-for="post in validPosts" :key="post.id">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import PostForm from './components/NewPost.vue'
import NewPost from './components/NewPost.vue';

export default {
  name: 'App',
  // computed: {
    // allPosts() {
    //   return this.$store.getters.allPosts
    // }
  // },
  computed: mapGetters(['validPosts', 'postsCount']),
  methods: mapActions(['fetchPosts']),
  components: {
    PostForm,
    NewPost
},
  async mounted() {
    this.fetchPosts(4)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  justify-content: center;
}

.post {
  border: solid 1px black;
  border-radius: 5px;
  margin-bottom: 10px;
}
</style>
