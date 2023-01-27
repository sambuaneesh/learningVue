<template>
  <HeaderComponent />
  <h1 style="color: grey">You can add your Restaurants here!</h1>
  <form class="addR">
    <input
      type="text"
      name="name"
      placeholder="Enter Name"
      v-model="restaurant.name"
    />
    <input
      type="text"
      name="address"
      placeholder="Enter Address"
      v-model="restaurant.address"
    />
    <input
      type="text"
      name="contact"
      placeholder="Enter Contact"
      v-model="restaurant.contact"
    />
    <!-- by adding type=button for button tag, it prevents the site from reloading -->
    <button type="button" v-on:click="addRestaurant">Add new Restaurant</button>
  </form>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import axios from "axios";
export default {
  name: "AddR",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  methods: {
    async addRestaurant() {
      console.log(this.restaurant);
      const result = await axios.post(
        `${process.env.VUE_APP_SERVER_IP}/restaurant`,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        }
      );
      if (result.status == 201) {
        this.$router.push({ name: "HomePage" });
      }
      // console.log("result :>> ", result);
    },
  },
  // mounted is a life-cycle method, which always checks while the program is running
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) this.$router.push({ name: "SignUp" });
  },
};
</script>
