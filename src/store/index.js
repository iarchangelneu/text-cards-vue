import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async getCards(){
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/')
        return response?.data || []
      } catch (e) {
        console.log(e)
      }
  
    },
    async getAuthors(){
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/')
        return response?.data || []
      } catch (e) {
        console.log(e)
      }
    }
  },
  modules: {
  }
})
