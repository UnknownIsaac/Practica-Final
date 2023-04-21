import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Producto from "./views/Productos.vue";
import Log from "./views/Log.vue";
import Acc from "./views/Acc.vue";
import Cart from "./views/Cart.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/productos",
    name: "Product",
    component: Producto,
  },
  {
    path: "/Log",
    name: "Log",
    component: Log,
  },
  {
    path: "/Acc",
    name: "Acc",
    component: Acc,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
  }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;