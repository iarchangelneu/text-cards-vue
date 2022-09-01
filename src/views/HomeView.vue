<template>
  <div class="container">
  <cards-list
  :cards="cards"
  @loadCards="loadCards"
  >
  </cards-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CardsList from '@/components/CardsList.vue'
export default {
  components:{
    CardsList
  },
  data(){
    return{
      cards: [],
      users: [],
    }
  },
  methods:{
    ...mapActions(['getCards']),
    ...mapActions(['getAuthors']),

    async loadAuthors(){
     this.users = await this.getAuthors()
    },
    
        async loadCards(){
          this.cards = (await this.getCards()).map(card => ({
            ...card,
            user: this.users.find(user => user.id === card.userId)
          }))
    },
   

  },
 async mounted(){
    await  this.loadAuthors()
    await this.loadCards() 
  },
}
</script>

<!-- Ad
Cardsd "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
