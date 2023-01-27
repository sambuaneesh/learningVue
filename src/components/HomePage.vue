<template>
  <HeaderComponent />
  <h1 style="color: grey">Hello {{ name }}, Welcome to Home Page!!</h1>
  <table border="5">
    <tr style="color: white; font-weight: bolder">
      <td>Id</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
    </tr>
  </table>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import axios from "axios";
export default {
  name: "HomePage",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      name: "",
      restaurant: [],
    };
  },
  // mounted is a life-cycle method, which always checks while the program is running
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) this.$router.push({ name: "SignUp" });
    this.name = JSON.parse(user).name;
    let result = await axios.get(`${process.env.VUE_APP_SERVER_IP}/restaurant`);
    this.restaurant = result.data;
  },
};
</script>

<style>
td {
  height: 40px;
  width: 160px;
}
table {
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  color: whitesmoke;
  border-radius: 10px;
  width: 60%;
}
</style>
