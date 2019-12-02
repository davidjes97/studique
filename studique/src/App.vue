<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="QS"
          class="shrink mr-2"
          contain
          src="./assets/Q.png"
          transition="scale-transition"
          width="40"
        />

        <h1>studique</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="doSignOut" v-show="isLoggedIn === false">SignOut</v-btn>
    </v-app-bar>

    <v-content>
      <Dashboard />
    </v-content>
    <v-footer>2019 studique</v-footer>
  </v-app>
</template>

<script>
import Dashboard from "./components/Dashboard";
//import { AppAUTH } from "./db-init.js";
import Login from './components/Login';

export default {
  name: "App",

  components: {
    Dashboard
    Login,
  },

  data: () => ({
    isLoggedIn: false
  }),

  methods: {
    doSignOut() {
      alert("Attempted Logout");
      /*AppAUTH.signOut().then(() => {
        this.$router.back();
      });*/
    }
  },
  mounted() {
    /*AppAUTH.onAuthStateChanged((u) => {
        if(u == null) this.isLoggedIn = false;
        else this.isLoggedIn = true;
      });*/
  }
};
</script>


