<template>
  <v-app> 
    <v-app-bar absolute color="orange lighten-2" >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>daiアプリ</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-heart</v-icon></v-btn>
      <template v-if="$store.state.login_user">
        <v-list color="orange lighten-2">
          <v-list-item>
            <v-list-item-avatar>
              <img v-if="photoURL" :src="photoURL"/>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ userName }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-btn color="info" @click="logout">ログアウト</v-btn>
      </template>
      <template v-else>
        <v-btn color="info" @click="login">ログイン</v-btn>
      </template>
      <template v-slot:extension v-if="$store.state.login_user">
        <v-tabs align-with-title>
          <v-tab :to="{name: 'Home'}">ホーム</v-tab>
          <v-tab :to="{name: 'QiitaSearch'}">Qiita検索</v-tab>
          <v-tab :to="{name: 'QiitaFavorite'}">Qiitaお気に入り</v-tab>
          <v-tab :to="{name: 'AddressForm'}">住所入力</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-container>
      <v-container fluid fill-height align-start>
        <router-view/>
      </v-container>
    </v-container>
  </v-app>
</template>


<script>
import {mapActions, mapGetters} from 'vuex'
import firebase from 'firebase'

export default {
  name: 'App',
  data: () => ({
    //
  }),
  created(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.setLoginUser(user)
        this.fetchQiitaFavoriteDatas()
      }else{
        this.deleteLoginUser()
      }
    })
  },
  computed:{
    ...mapGetters(['userName', 'photoURL']),
  },
  methods:{
      ...mapActions(['login', 'logout', 'setLoginUser', 'deleteLoginUser', 'fetchQiitaFavoriteDatas']),
  }
};
</script>
