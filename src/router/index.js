import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Homepage";
import About from "../views/About";
import Gallery from "../views/Gallery";
import Detail from "../views/Detail";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
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
