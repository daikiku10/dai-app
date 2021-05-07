<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <v-flex xs12 mt-16 pt-16>
        <h1>楽天API</h1>
        <v-btn @click="rakuten">楽天検索実行</v-btn>
          <v-data-table table :headers="headers" :items="this.$store.state.rakutenDatas">
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
        {title:"タイトル", value:'title'},
        {url:'画像', value:'url'},
        {price:'金額', value:'price'},
        {author:'著者', value:'author'},
        {sbTitle:'サブタイトル', value:'sbTitle'}
      ]
    }
  },
  methods:{
    ...mapActions(['rakutenApi']),
    rakuten(){
      console.log('楽天')
      this.rakutenApi()
    }
  }
}
</script>
