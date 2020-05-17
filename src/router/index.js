import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import SignIn from "../views/Authtentication/SignIn.vue";
import Reguest from "../views/Authtentication/Reguest.vue";
import Recover from "../views/Authtentication/Recover.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/team",
    name: "team",
    component: Team
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn
  },
  {
    path: "/reguest",
    name: "reguest",
    component: Reguest
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
