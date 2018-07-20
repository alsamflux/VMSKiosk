<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Dashboard' }" class="nav-link">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Post' }" class="nav-link">Post</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'DecideAttendeeRole' }" class="nav-link">Decide Attendee Role</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import 'bootstrap/dist/css/bootstrap.min.css';

export default {
  name: 'app',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
