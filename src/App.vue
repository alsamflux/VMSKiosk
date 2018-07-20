<template>
  <v-app>  <!-- Critical to proper sizing of screen!  DO NOT USE div id="app" -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <!-------------------------------------------------------------------------------------------------------------------------------->
    
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

    <!-------------------------------------------------------------------------------------------------------------------------------->

    <router-view></router-view>

    <!-------------------------------------------------------------------------------------------------------------------------------->

    <v-footer :fixed="fixed" style="padding: 0px 0px 114px;padding-left:32px;"> <!-- AHA! padding 32x pushes it UP from the bottom of the screen -->
      <v-layout column wrap>

      <v-flex> <!-- justify between makes HELP button go to far edge -->
        <v-layout align-end column justify-space-between> <!-- justify between makes HELP button go to far edge -->
          <img src="./assets/VolunteerServicesCoordinator.png">
          <div class="deep-purple--text flex caption font-weight-regular">Volunteer Services Coordinator</div> 
          <div class="deep-purple--text flex caption font-weight-regular">Jo Ann Daron - (208) 780-1700</div> 
        </v-layout>
      </v-flex>


      <v-flex> <!-- justify between makes HELP button go to far edge -->
        <v-layout align-end row justify-space-between> <!-- justify between makes HELP button go to far edge -->
          <!-- https://vuetifyjs.com/en/layout/spacing -->
          <v-flex style="padding: 20px 20px 10px;padding-right:10px;max-width:200px;"> <!-- The padding 3rd number works great at pushing the progress bar up off the floor;padding-right will force space between next object, but the object will still resize too big and too small, so use max-size -->
            <v-progress-linear color="grey" value="10" height="10"></v-progress-linear>
          </v-flex>
          <v-btn id="id1" v-if="pagefunction !== 'help'" class="yellow display-2" style="margin-right: 10px;padding:10px 30px 40px;"> <!-- second padding # is left-side/right-side padding -->
              <span style="padding: 0px 0px 10px;">I Need Help...</span> <!-- 32x is pushing up -->
          </v-btn>
        </v-layout>
      </v-flex>


      </v-layout>
    </v-footer> 

  </v-app>
</template>

<!--============================================================================================================================-->

<script>

  export default {
    name: 'app',
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
