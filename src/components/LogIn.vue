<template>
  <img class="logo" src="../assets/logo.png" />
  <!-- Header -->
  <h1 style="color: aliceblue">Login</h1>
  <!-- Input Fields -->
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <button v-on:click="login">Login</button>
    <!-- Link to SignUp Page -->
    <p><router-link to="/sign-up">Register</router-link></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "HomePage" });
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) this.$router.push({ name: "HomePage" });
  },
};
</script>
