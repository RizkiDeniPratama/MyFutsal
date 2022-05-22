import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginPage.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterPage.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token && to.name == "home") next({ name: "login" });
  else if (localStorage.access_token && to.name == "login")
    next({ name: "home" });
  else next();
});

export default router;
