import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Task from '../views/Task.vue'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Task
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

export default router
