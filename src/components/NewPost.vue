<template>
  <form @submit.prevent="submit">
    <h3>Добавить пост</h3>
    <input type="text" placeholder="Заголовок" v-model="title">
    <input type="text" placeholder="Текст" v-model="body">
    <button type="submit">Добавить</button>
  </form>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    data() {
      return {
        title: '',
        body: ''
      }
    },
    methods: {
      ...mapMutations(['createPost']),
      submit() {
        this.createPost({
          title: this.title,
          body: this.body,
          id: Date.now()
        })
        this.title = ""
        this.body = ""
      }
    }
  }
</script>

<style>
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  input {
    display: block;
    width: 250px;
    height: 30px;
    border: solid 1px black;
    border-radius: 5px;
    margin-bottom: 20px;
  }
</style>
