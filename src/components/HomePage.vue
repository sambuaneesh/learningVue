<template>
  <HeaderComponent />
  <h1 class="heading" style="color: grey">
    Hello {{ name }}, Welcome to Home Page!!
  </h1>
  <table border="5" class="mainTable">
    <thead style="color: white; font-weight: bolder">
      <td>Id</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
      <td>Actions</td>
    </thead>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <table border="1" style="display: flex">
        <tr>
          <router-link :to="'/update/' + item.id"><td>Update</td></router-link>
        </tr>
        <tr style="cursor: pointer">
          <td
            v-on:click="deleteRestaurant(item.id)"
            style="color: red; opacity: 90%"
          >
            Delete
          </td>
        </tr>
      </table>
    </tr>
    <tr v-on:click="navigateToHome" style="cursor: pointer">
      <td align="center" colspan="5">Add</td>
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
  methods: {
    navigateToHome() {
      this.$router.push("/add");
    },
    async deleteRestaurant(id) {
      let result = await axios.delete(
        `${process.env.VUE_APP_SERVER_IP}/restaurant/${id}`
      );
      if (result.status == 200) window.location.reload();
    },
  },
};
</script>

<style>
td {
  height: 40px;
  width: 160px;
}
.mainTable {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  color: whitesmoke;
  border-radius: 10px;
  width: 20rm;
}
td:hover {
  background-color: white;
  color: black;
  font-size: x-large;
  transition: 0.3s;
}
</style>
