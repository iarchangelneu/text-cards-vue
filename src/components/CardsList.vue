<template>

    <search-input  @searchFilter="(a) => search = a"></search-input>

  <div class="row">
    <div class="col-lg-4 col-md-6 col-sm-12 mb-2" v-for="card in filterByAuthor" :key="card.id">
        <div class="card">
            <div class="card__content text-start">
                <h4 class="card__name text-primary">
                    {{card.title}}
                </h4>
                <p class="card__desc">
                    {{card.body}}
                </p>
                <p class="card__author text-secondary" >
                    {{card.user.name}}
                </p>
            </div>
        </div>
    </div>
  </div>
  
</template>

<script>
import SearchInput from './SearchInput.vue'
export default {
  components: { SearchInput },
    data(){
        return{
              search: '',
        }
    },
    props: ['cards'],
    emits: ['loadCards'],

    computed:{
    
    filterByAuthor(){
      
    return this.cards.filter(
        (card) =>
        (String(card.user.name).toLowerCase().includes(String(this.search).toLowerCase()))
    )
  }
}
}
</script>

<style>
.card{
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
}
.card__content{
    flex: 1 1 auto;
    padding: 1rem 1rem;
}
</style>