<template>
  <v-app>  <!-- Critical to proper sizing of screen!  DO NOT USE div id="app" -->
    <!-- https://nicolas-hoizey.com/2015/02/viewport-height-is-taller-than-the-visible-part-of-the-document-in-some-mobile-browsers.html -->
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <v-toolbar app>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- http://graphemica.com/%E2%98%9E -->
        <v-btn v-if="pagefunction !== 'home'"><v-icon>home</v-icon>Start Over</v-btn> 
        <v-fab-transition>
          <v-btn v-if="pagefunction !== 'sign-out'" round dark>
            Sign-Out <span class="red--text display-1">☞</span>
          </v-btn> 
        </v-fab-transition>
    </v-toolbar>
    <router-view></router-view>
     <v-content>
        <DecideAttendeeRole/>
    </v-content>
    <v-footer :fixed="fixed" style="padding: 0px 0px 34px;padding-left:32px;"> <!-- AHA! padding 32x pushes it UP from the bottom of the screen -->
         <v-layout align-end row justify-space-between> <!-- justify between makes HELP button go to far edge -->
              <!-- https://vuetifyjs.com/en/layout/spacing -->
              <v-flex style="padding: 0px 0px 10px;padding-right:10px;max-width:200px;"> <!-- The padding 3rd number works great at pushing the progress bar up off the floor;padding-right will force space between next object, but the object will still resize too big and too small, so use max-size -->
                <v-progress-linear color="grey" value="10" height="10"></v-progress-linear>
              </v-flex>
              <v-btn v-if="pagefunction !== 'help'" class="yellow display-2" style="margin-right:10px;padding:10px 30px 40px;"> <!-- second padding # is left-side/right-side padding -->
                  <span style="padding: 0px 0px 0px;">I Need Help...</span> <!-- 32x is pushing up -->
              </v-btn>
        </v-layout>
    </v-footer> 
  </v-app>
</template>

<script>
import DecideAttendeeRole from './components/DecideAttendeeRoleComponent'
  export default {
    name: 'app',
    components: { DecideAttendeeRole },
    data() {
        return {
            clipped: false,
            drawer: true,
            fixed: true, /* This is very important in page height of viewport.  false and it overlaps bottom of screen. */
            items: [{
                icon: 'bubble_chart',
                title: 'VMS'
            }],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            pagefunction: "home",   /* home, help, sign-in, sign-out */ /* Controls visibility of shared buttons so not silly. (help on a help page, etc.) */
            title: 'Volunteer & Visitor Sign-In Kiosk'
        }
        
    }
   }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px  /* Arg! This pushes everything down! */
}
</style>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
