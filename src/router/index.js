import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Homepage";
import About from "../views/About";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About NASA",
    component: About,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
