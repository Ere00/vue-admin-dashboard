import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import SignIn from "../views/Authtentication/SignIn.vue";
import Reguest from "../views/Authtentication/Reguest.vue";
import Recover from "../views/Authtentication/Recover.vue";
import * as netlifyIdentityWidget from "netlify-identity-widget";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/team",
    name: "team",
    component: Team,
    meta: {
      requiresAuth: true
    }
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

router.beforeEach((to, from, next) => {
  const currentUser = netlifyIdentityWidget.currentUser();
  const requiresAuth = to.matched.some(record => {
    return record.meta.requiresAuth
  })

  if (requiresAuth && !currentUser) {
    next("signin");
  } else {
    next()
  }

})

export default router;
