import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  vuetify,

  render: function(give_component) {
    return give_component(App);
  }
}).$mount("#app");