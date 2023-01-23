<template>
  <img class="logo" src="../assets/logo.png" />
  <!-- Header -->
  <h1 style="color: aliceblue">Register</h1>
  <!-- Input Fields -->
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter name" />
    <input type="text" v-model="email" placeholder="Enter email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <button v-on:click="signUp">Sign Up</button>
    <!-- Link to LogIn Page -->
    <p><router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      if (result.status == 201) {
        alert("Signed Up Successfully");
        // Storing our signed in details in the browser's local storage data
        localStorage.setItem("user-info", JSON.stringify(result.data));
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
