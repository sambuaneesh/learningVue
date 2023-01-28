import HomePage from "./components/HomePage.vue";
import SignUp from "./components/SignUp.vue";
import LogIn from "./components/LogIn.vue";
import AddR from "./components/AddR.vue";
import UpdateR from "./components/UpdateR.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    component: HomePage,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "LogIn",
    component: LogIn,
    path: "/login",
  },
  {
    name: "AddR",
    component: AddR,
    path: "/add",
  },
  {
    name: "UpdateR",
    component: UpdateR,
    path: "/update/:id",
  },
  {
    name: "Update",
    component: UpdateR,
    path: "/update",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
