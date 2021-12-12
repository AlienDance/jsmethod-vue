import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Lorem from '../views/Lorem.vue'
import Portfolio from '../views/Portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home - jsmethod'
    }
  },
  {
    path: '/lorem',
    name: 'Lorem',
    component: Lorem,
    meta: {
      title: 'Lorem - jsmethod'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      title: 'Portfolio - jsmethod'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
