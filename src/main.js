import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import firebase from 'firebase'
Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCvwzNClG71T7xSR-V-GUi7cCiZ24jkLJA",
  authDomain: "dai-app-7aef1.firebaseapp.com",
  projectId: "dai-app-7aef1",
  storageBucket: "dai-app-7aef1.appspot.com",
  messagingSenderId: "317778877155",
  appId: "1:317778877155:web:d8add96c4dc815b4a083d6",
  measurementId: "G-VMSPP718NW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
