import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
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
    path: "/about",
    name: "about",
    component: About
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
