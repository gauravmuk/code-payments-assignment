import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import { ProductRoute } from "./enums";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/product/details/:productId",
    name: `${ProductRoute.DETAILS}`,
    component: ProductDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.name === `${ProductRoute.DETAILS}`) return { x: 0, y: 0 };

    return savedPosition;
  },
});

export default router;
