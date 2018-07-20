import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(VueRouter)
Vue.use(Vuex)

import HomeComponent from './components/HomeComponent.vue'
import DashboardComponent from './components/DashboardComponent.vue'
import PostComponent from './components/PostComponent.vue'
import DecideAttendeeRoleComponent from './components/DecideAttendeeRoleComponent.vue'

//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

/*
  1. Make sure <router-view></router-view> is in App.vue
  2. The 'path' doesn't seem to matter;  in the vue file, only the Name is referenced. "<router-link :to="{ name: 'Post' }" class="nav-link">Post</router-link>"
*/
const routes = [
  { path: 'home', name: 'Home', component: HomeComponent },
  { path: 'post', name: 'Post', component: PostComponent },
  { path: 'dashboard', name: 'Dashboard', component: DashboardComponent },
  { path: 'role', name: 'DecideAttendeeRole', component: DecideAttendeeRoleComponent },
];

const router = new VueRouter({ mode: 'history', routes: routes });

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
