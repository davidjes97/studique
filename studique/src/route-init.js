import Dashboard from "@/components/Dashboard.vue";
import Login from "@/components/Login.vue";
import Profile from "@/components/Profile.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
/* Map path to component */
const routeTable = [
  { path: "/", component: Login },
  { path: "/profile", component: Profile },
  { path: "/dashboard", component: Dashboard }
];

const AppRouter = new VueRouter({ 
    routes: routeTable, 
    mode: "history"
    });
export { AppRouter };