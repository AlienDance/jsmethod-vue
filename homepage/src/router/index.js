import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Lorem from '@/views/Lorem.vue'
import Portfolio from '@/views/Portfolio.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import TodoList from '@/views/TodoList.vue'

const titleEnd = ' - jsmethod'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home' + titleEnd
    }
  },
  {
    path: '/lorem',
    name: 'Lorem',
    component: Lorem,
    meta: {
      title: 'Lorem' + titleEnd
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      title: 'Portfolio' + titleEnd
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Log In' + titleEnd
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      title: 'Sign Up' + titleEnd
    }
  },
  {
    path: '/todo-list',
    name: 'TodoList',
    component: TodoList,
    meta: {
      title: 'To-Do List' + titleEnd
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  axios.get('/')
  next()
})

export default router
