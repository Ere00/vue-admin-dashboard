<template>
  <div
    class="container"
    :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
  >
    <div class="reguest" :class="{'light-reguest':isDarkMode,'dark-reguest':!isDarkMode}">
      Dont't have a Design Code account?
      <router-link to="/reguest">Reguest an account</router-link>
    </div>
    <div class="login">
      <img src="@/assets/logo-dark.svg" alt="Logo" v-show="!isDarkMode" />
      <img src="@/assets/logo-light.svg" alt="Logo" v-show="isDarkMode" />

      <h4 :class="{'light-text' : isDarkMode, 'dark-text' : !isDarkMode}">Sign in to Design Code HQ</h4>
      <input
        type="email"
        placeholder="Email"
        :class="{'light-field':isDarkMode,'dark-field':!isDarkMode}"
      />
      <input
        type="password"
        placeholder="Password"
        :class="{'light-field':isDarkMode,'dark-field':!isDarkMode}"
      />
      <button>Sign In</button>
      <router-link
        to="/recover"
        :class="{'light-link':isDarkMode, 'dark-link':!isDarkMode}"
      >Forgot your password?</router-link>
      <button @click="toggleDarkMode">Toggle</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      isDarkMode: true
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      document.body.style.background = this.isDarkMode ? "#212C4F" : "#F0F3F5";
    }
  }
};
</script>

<style lang="scss" scoped>
.light-background {
  background-color: $light-gray;
}

.dark-background {
  background-color: $dark-blue;
}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login {
  width: 400px;
}

.reguest {
  position: absolute;
  top: 40px;
  right: 40px;
}

.light-reguest {
  color: rgba(255, 255, 255, 0.3);

  a {
    color: white;
  }
}

.dark-reguest {
  color: rgba(0, 0, 0, 0.3);
  a {
    color: black;
  }
}

h4 {
  margin: 0;
  font-size: 24px;
  line-height: 34px;
  /* identical to box height */
  text-align: center;

  /* white */
  color: #ffffff;
}

input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  height: 60px;
  width: 100%;

  font-size: 20px;
  color: white;
  padding-left: 20px;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;
  margin-top: 20px;
  margin-bottom: 40px;

  height: 60px;
  width: 100%;

  font-size: 20px;
  color: white;
}

a {
  line-height: 25px;
  /* identical to box height */
  text-align: center;

  text-decoration: none;
}

.light-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}
</style>