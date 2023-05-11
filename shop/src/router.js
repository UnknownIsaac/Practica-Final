import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Producto from "./views/Productos.vue";
import Register from "./views/Register.vue";
import Log from "./views/Log.vue";
import Cart from "./views/Cart.vue";
import Detail from "./views/Detail.vue";
import Perfil from "./views/Perfil.vue";

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
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/Log",
    name: "Log",
    component: Log,
  },
  {
    path: "/Cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/Detail/:id",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/Perfil",
    name: "Perfil",
    component: Perfil,
  }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;