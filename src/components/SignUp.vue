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
};
</script>

<style>
.logo {
  width: 150px;
}

.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid #110c24;
  border-radius: 0.5rem;
  opacity: 90%;
}

.register button {
  width: 320px;
  height: 40px;
  background: black;
  color: white;
  cursor: pointer;
  border-radius: 0.5rem;
}
</style>
