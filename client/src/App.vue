<template>
  <div>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "./views/LoginPage.vue";
import Navbar from "./components/Navbar.vue"
export default {
  name: "App",
  components: {
    Login,
    Navbar
  },
};
</script>