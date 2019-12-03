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

      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="goToProfile" v-show="isLoggedIn === true">
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item @click="doSignOut" v-show="isLoggedIn === true">
            <v-list-item-title>Sign Out</v-list-item-title>
          </v-list-item>
          <v-list-item @click="doSignIn" v-show="isLoggedIn === false">
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item @click="doSignUp" v-show="isLoggedIn === false">
            <v-list-item-title>Sign Up</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
    <v-footer>2019 studique</v-footer>
  </v-app>
</template>

<script>
import { AppAUTH } from "./db-init.js";

export default {
  name: "App",

  data: () => ({
    isLoggedIn: false  }),

  methods: {
    doSignOut() {
      AppAUTH.signOut().then(() => {
        this.$router.push('/' );
      });
    },
    doSignIn() {
      this.$router.push( '/login');
    },
    goToProfile() {
      this.$router.push( '/profile');
    },
    doSignUp() {
      this.$router.push('/signup');
    }
    
  },
  mounted() {
    AppAUTH.onAuthStateChanged(u => {
      if (u == null) this.isLoggedIn = false;
      else this.isLoggedIn = true;
    });
  }
};
</script>