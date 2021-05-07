<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <v-flex xs12 mt-16 pt-16>
        <h1>Qiitaお気に入り</h1>
        <v-data-table :headers="headers" :items="this.$store.state.qiitaFavoriteDatas">
          <template v-slot:item.title="{item}">
            <li><a target="_blank" :href="item.url">{{ item.title }}</a></li>
          </template>
          <template v-slot:item.delete="{item}">
            <v-icon @click="release(item)">mdi-delete</v-icon>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default{
  data(){
    return{
      headers:[
        {text:'タイトル', value:'title'},
        {text:'解除', value:'delete'}
      ]
    }
  },
  methods:{
    ...mapActions(['deleteQiitaFavoriteData']),
    release(item){
      if(confirm('お気に入り解除してもよろしいですか？')){
        this.deleteQiitaFavoriteData(item)
      }
    }
  }
}
</script>
