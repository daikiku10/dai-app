import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase'

Vue.use(Vuex)

const qiitaUrl = 'https://qiita.com/api/v2/items'

export default new Vuex.Store({
  state: {
    login_user: null,
    qiitaDatas:[],
    qiitaFavoriteDatas:[],
    rakutenDatas:[],
  },
  getters:{
    userName: state => state.login_user ? state.login_user.displayName : '',
    photoURL: state => state.login_user ? state.login_user.photoURL : '',
    uid: state => state.login_user ? state.login_user.uid : null,
  },
  mutations: {
    setLoginUser(state, user){
      state.login_user = user
    },
    deleteLoginUser(state){
      state.login_user = null
    },
    QiitaApi(state, qiitaDatas){
      state.qiitaDatas = qiitaDatas
    },
    addQiitaFavoriteData(state, {id, item}){
      item.id = id,
      state.qiitaFavoriteDatas.push(item)
    },
    deleteQiitaFavoriteData(state, item){
      const index = state.qiitaFavoriteDatas.findIndex(qiitaFavoriteData => qiitaFavoriteData.id === item.id)
      state.qiitaFavoriteDatas.splice(index, 1)
    },
    rakutenApi(state, rakutenDatas){
      state.rakutenDatas = rakutenDatas
      console.log(state.rakutenDatas)
    }
  },
  actions: {
    setLoginUser({commit}, user){
      commit('setLoginUser', user)
    },
    deleteLoginUser({commit}){
      commit('deleteLoginUser')
    },
    QiitaApi({commit}, keyword){
      axios.get(qiitaUrl,{
        params:{query:keyword}
      }).then(res =>{
        let qiitaDatas = []
        res.data.forEach(apiData => {
          let qiitaData = {title: apiData.title, url: apiData.url}
          qiitaDatas.push(qiitaData)
        })
        commit('QiitaApi', qiitaDatas)
      })
    },
    addQiitaFavoriteData({getters, commit}, item){
      if(getters.uid){
        firebase.firestore().collection(`users/${getters.uid}/qiita_favorites/`).add(item).then(res =>{
          commit('addQiitaFavoriteData',{id:res.id, item});
        })
      }
    },
    deleteQiitaFavoriteData({getters, commit}, item){
      if(getters.uid){
        firebase.firestore().collection(`users/${getters.uid}/qiita_favorites/`).doc(item.id).delete().then(() => {
          commit('deleteQiitaFavoriteData', item)
        })
      }
    },


    // firebase側の処理ログイン・ログアウト
    login(){
    // Googleログインのため
    // Googleプロバイダオブジェクトのインスタンスの作成
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      // ログインページ（Googleの）にリダイレクトしてログインするためのコード
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    logout(){
      firebase.auth().signOut()
    },
    fetchQiitaFavoriteDatas({getters, commit}){
      firebase.firestore().collection(`users/${getters.uid}/qiita_favorites`).get().then(snapshot => {
        snapshot.forEach(doc => {
          commit('addQiitaFavoriteData', {id:doc.id, item: doc.data()})
        })
      })
    },
    rakutenApi({commit}){
      axios.get("https://app.rakuten.co.jp/services/api/BooksTotal/Search/20170404", {
        params:{
          applicationId: '1029557867360796334',
          keyword: 'サッカー'
        }
      }).then(res => {
        let rakutenDatas = []
        res.data.Items.forEach(item => {
          let rakutenData = {
            title: item.Item.title,
            url: item.Item.mediumImageUrl,
            price: item.Item.itemPrice,
            author: item.Item.author,
            sbTitle: item.Item.itemCaption,
            kbn: '0'
          }
          rakutenDatas.push(rakutenData)
        })
        commit('rakutenApi', rakutenDatas)
      })
    }

  },
  modules: {
  }
})
