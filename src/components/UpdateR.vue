<template>
  <HeaderComponent />
  <h1>This is Update Restaurant Page</h1>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
export default {
  name: "UpdateR",
  components: {
    HeaderComponent,
  },
  // mounted is a life-cycle method, which always checks while the program is running
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) this.$router.push({ name: "SignUp" });
  },
};
</script>
