<template>
  <img class="logo" src="../assets/logo.png" />
  <!-- Header -->
  <h1 style="color: aliceblue">Login</h1>
  <!-- Input Fields -->
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <button>Login</button>
    <!-- Link to SignUp Page -->
    <p><router-link to="/sign-up">Register</router-link></p>
  </div>
</template>

<script>
export default {
  name: "LogIn",
};
</script>
