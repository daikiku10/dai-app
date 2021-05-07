<template>
  <v-container text-center justify-center>
    <v-layout row wrap>
      <v-flex xs12 mt-16 pt-16>
        <h1>Qiita検索</h1>
      </v-flex>
      <v-flex>
        <QiitaSearchForm/>
        <QiitaShow/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import { component } from 'vue/types/umd'
import QiitaSearchForm from '../components/QiitaSearchForm.vue'
import QiitaShow from '../components/QiitaShow.vue'

export default {
  components:{
    QiitaSearchForm,
    QiitaShow,
  }
}
</script>