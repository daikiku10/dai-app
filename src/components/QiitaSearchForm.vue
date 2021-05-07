<template>
  <div>
    <h2>検索フォーム</h2>
    <v-text-field label="検索ワード" outlined v-model="keyword"></v-text-field>
    <v-btn @click="QiitaData" color="orange lighten-2">検索</v-btn>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data(){
    return{
      keyword:''
    }
  },
  methods:{
    ...mapActions(['QiitaApi']),
    QiitaData(){
      this.QiitaApi(this.keyword)
      this.keyword = ''
    }
  }
}
</script>

