<template>
  <div
    class="container"
    :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
  >
    <RequestAccount />
    <div class="login">
      <img src="@/assets/logo-dark.svg" alt="Logo" v-show="!isDarkMode" />
      <img src="@/assets/logo-light.svg" alt="Logo" v-show="isDarkMode" />

      <h4 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Sign in to Design Code HQ</h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          placeholder="Email"
          :class="{'light-field':isDarkMode,'dark-field':!isDarkMode}"
          v-model="email"
        />
        <input
          type="password"
          placeholder="Password"
          :class="{'light-field':isDarkMode,'dark-field':!isDarkMode}"
          v-model="password"
        />
        <button @click="onClick">Sign In</button>
      </form>
      <router-link
        to="/recover"
        :class="{'light-link':isDarkMode, 'dark-link':!isDarkMode}"
      >Forgot your password?</router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch";

//import * as netlifyIdentityWidget from "netlify-identity-widget";

//import { auth } from "@/main";

export default {
  name: "SignIn",
  components: {
    RequestAccount,
    ThemeSwitch
  },
  data() {
    return {
      email: null,
      password: null
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    onClick() {
      this.$router.push("/");
    }
  },
  /*
  methods: {
    onSubmit() {
      const email = this.email;
      const password = this.password;

      auth
        .login(email, password)
        .then(response => {
          alert("Response " + response.email, true);
          this.$router.replace("/");
        })
        .catch(error => {
          alert("Error " + error);
        });
    }
  },
  */
  mounted() {
    // GoTrue works in only in production. Use this in dev
    //netlifyIdentityWidget.open();
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login {
  width: 400px;
}
</style>