import { createRouter, createWebHistory } from 'vue-router'

import Home from "../views/Home.vue";
import Tasks from "../views/Tasks.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/tasks",
    name: "Tasks",
    component: Tasks
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
