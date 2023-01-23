<template>
  <h1>This is Home Page</h1>
</template>

<script>
export default {
  name: "HomePage",
  // mounted is a life-cycle method, which always checks while the program is running
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) this.$router.push({ name: "SignUp" });
  },
};
</script>
