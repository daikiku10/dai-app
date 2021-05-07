<template>
  <v-container textcenter justify-center mt-12>
    <v-layout row wrap>
      <v-flex>
        <h2>検索結果表示</h2>
        <v-data-table table :headers="headers" :items="this.$store.state.qiitaDatas">
          <template v-slot:item.title="{item}">
            <li><a target="_blank" :href="item.url">{{ item.title }}</a></li>
          </template>
          <template v-slot:item.check="{item}">
            <v-icon @click="click1(item)" color="red">mdi-cards-heart</v-icon>
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
        {text:"タイトル", value:"title"},
        {text:"お気に入り", value:"check"}
      ],
      titles:[]
    }
  },
  created(){
    this.titles = this.$store.state.qiitaDatas
  },
  methods:{
    ...mapActions(['addQiitaFavoriteData']),
    click1(item){
      let qiitaFavoriteDataUrls = []
      this.$store.state.qiitaFavoriteDatas.forEach((qiitaFavoriteData)=> {
        qiitaFavoriteDataUrls.push(qiitaFavoriteData.url)
      })
      if(qiitaFavoriteDataUrls.includes(item.url)){
        alert('すでに登録されています！')
      }else{
        if(confirm('お気に入り登録してもよろしいですか？')){
          this.addQiitaFavoriteData(item)
        }
      }
    }
  }
}
</script>