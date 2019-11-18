<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="doSignOut" v-show="isLoggedIn === false">SignOut</v-btn>
      <!--<v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>-->
    </v-app-bar>

    <v-content>
      <Login/>
    </v-content>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
//import { AppAUTH } from "./db-init.js";
import Login from './components/Login';

export default {
  name: 'App',

  components: {
    Login,
  },

  data: () => ({
    isLoggedIn: false
  }),

  methods: {
    doSignOut(){
      
      alert("Sign Out");
      /*AppAUTH.signOut().then(() => {
        this.$router.back();
      });*/
    }
  },
    mounted(){

      alert("Mounted");
      /*AppAUTH.onAuthStateChanged((u) => {
        if(u == null) this.isLoggedIn = false;
        else this.isLoggedIn = true;
      });*/
    }
};
</script>

