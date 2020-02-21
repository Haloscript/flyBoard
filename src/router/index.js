import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/ru/ticketSearch"
  },
  {
    path: "/:lang",
    component: () => import("../views/AppLang.vue"),
    children: [
      {
        path: "ticketSearch",
        name: "ticketSearch",
        component: () => import("../views/portal/ticketSearch")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
