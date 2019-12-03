<template>
  <div class="form">
      <v-spacer></v-spacer>
      <p></p>
    <v-card class="signUpCard">
      <tabs>
        <tab title="Sign Up">
          <v-text-field label="Your Full Name" v-model="userDisplayName"></v-text-field>
          <v-text-field label="Your Email" v-model="signUpEmail"></v-text-field>
          <v-text-field type="password" label="Password" v-model="signUpPassword"></v-text-field>
          <v-container v-show="isLoggedIn === false">
            <v-row justify="end">
              <v-btn @click="doSignUp">SignUp</v-btn>
            </v-row>
          </v-container>
        </tab>
      </tabs>
    </v-card>
  </div>
</template>
<script>
import { AppAUTH } from "../db-init.js";
import { Tabs, Tab } from "vue-slim-tabs";

export default {
  components: {
    Tabs,
    Tab
  },

  data: function() {
    return {
      isLoggedIn: false,
      userEmail: "",
      userPassword: "",
      signUpEmail: "",
      signUpPassword: "",
      userDisplayName: "",
    };
  },
  methods: {
    doSignUp() {
      if(this.signUpEmail != "" && this.signUpPassword != "" && this.userDisplayName != ""){
        AppAUTH.createUserWithEmailAndPassword(this.signUpEmail, this.signUpPassword)
        .then(u => {
            var user = u.user;
            user.updateProfile({
                displayName: this.userDisplayName
            });
          this.$router.push('/');
              
        })
        .catch(err => {
          alert("Error " + err);
        });
      }
      else{
          alert("Fill in all fields!");
      }
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
<style src="vue-slim-tabs/themes/default.css">
.form {
  display: grid;
  grid-template-columns: 1fr 6fr 1fr;
  width: 80%;
  border: 1px solid black;
}

</style>