<template>
  <transition name="slide-in-right" enter-active-class="animate__animated animate__fadeInRight">
    <div
      v-show="show"
      class="reguest"
      :class="{'light-reguest':isDarkMode,'dark-reguest':!isDarkMode}"
    >
      Dont't have a Design Code account?
      <router-link to="/reguest">Reguest an account</router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: "RequestAccount",

  data() {
    return {
      show: false
    };
  },
  mounted() {
    this.show = true;
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>