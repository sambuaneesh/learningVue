<template>
  <!-- <h1>Header</h1> -->
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <router-link to="/update">Update Restaurant</router-link>
    <a v-on:click="logout" href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "LogIn" });
    },
  },
};
</script>

<style>
.nav {
  background-color: black;
  overflow: hidden;
}

.nav a {
  float: left;
  color: whitesmoke;
  padding: 14px 16px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin-right: 5px;
}

.nav a:hover {
  background-color: whitesmoke;
  color: #120c24;
}
</style>
