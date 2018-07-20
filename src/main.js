import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'es6-promise/auto'

Vue.use(VueRouter)
Vue.use(Vuex)

import DecideAttendeeRoleComponent from './components/DecideAttendeeRoleComponent.vue'
import DecideVolunteerActingInSocialGroupCapacityComponent from './components/DecideVolunteerActingInSocialGroupCapacityComponent.vue'

//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

/*
  1. Make sure <router-view></router-view> is in App.vue
  2. The 'path' doesn't seem to matter;  in the vue file, only the Name is referenced. "<router-link :to="{ name: 'Post' }" class="nav-link">Post</router-link>"
*/
const routes = [
  { path: '/', name: 'DecideAttendeeRole', component: DecideAttendeeRoleComponent 
     }, /* The main default page must be / */
  { path: 'socialcapacity', name: 'DecideVolunteerActingInSocialGroupCapacity', component: DecideVolunteerActingInSocialGroupCapacityComponent },
];

const router = new VueRouter({ 
  mode: 'history', 
  base: __dirname, // CRITICAL to routing to next page!!!!!
  routes: routes 
});

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
