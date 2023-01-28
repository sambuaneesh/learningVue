<template>
  <HeaderComponent />
  <h1 class="heading" style="color: grey">
    Update the details for Restaurant-{{ restaurant.id }}
  </h1>
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
    <button type="button" v-on:click="updateRestaurant">
      Update this Restaurant
    </button>
  </form>
</template>

<script>
import axios from "axios";
import HeaderComponent from "./HeaderComponent.vue";
export default {
  name: "UpdateR",
  components: {
    HeaderComponent,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
        temp: "",
      },
    };
  },
  // mounted is a life-cycle method, which always checks while the program is running
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) this.$router.push({ name: "SignUp" });
    const result = await axios.get(
      `${process.env.VUE_APP_SERVER_IP}/restaurant/${this.$route.params.id}`
    );
    this.temp = result.name;
    this.restaurant = result.data;
  },
  // async mounted() {
  //   let user = localStorage.getItem("user-info");
  //   if (!user) this.$router.push({ name: "SignUp" });
  //   if (this.$route.params.id) {
  //     const result = await axios.get(
  //       `${process.env.VUE_APP_SERVER_IP}/restaurant/${this.$route.params.id}`
  //     );
  //     this.restaurant = result.data;
  //   } else {
  //     console.log(typeof this.$route.params.id);
  //     this.$router.push({ path: "/update/1" });
  //   }
  // },
  methods: {
    async updateRestaurant() {
      const result = await axios.put(
        `${process.env.VUE_APP_SERVER_IP}/restaurant/${this.$route.params.id}`,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        }
      );
      // 200 means updating data whereas 201 means data created
      if (result.status == 200) {
        this.$router.push({ name: "HomePage" });
      }
    },
  },
};
</script>
