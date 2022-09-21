export default {
  // асинхронный метод через который получаем данные
  actions: {
    async fetchPosts({commit}, limit=3) {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=' + limit);
      const posts = await res.json();

      commit('updatePosts', posts)
    }
  },
  // синхронный метод через который меняется state
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
    // добавит новый пост
    createPost(state, newPost) {
      state.posts.unshift(newPost)
    }
  },
  // содержит состояние
  state: {
    posts: []
  },
  // забирать данные правильно отсюда
  getters: {
    // выводит только посты с данными
    validPosts(state) {
      return state.posts.filter(post => {
        return post.title && post.body
      })
    },
    allPosts(state) {
      return state.posts
    },
    // укажет только количество постов с данными
    postsCount(state, getters) {
      return getters.validPosts.length
    }
  },
}
