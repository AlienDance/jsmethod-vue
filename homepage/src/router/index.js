import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Lorem from '@/views/Lorem.vue'
import Portfolio from '@/views/Portfolio.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import TodoList from '@/views/TodoList.vue'
import Chat from '@/views/Chat.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/lorem',
    name: 'Lorem',
    component: Lorem,
    meta: {
      title: 'Lorem'
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      title: 'Portfolio'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Log In'
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      title: 'Sign Up'
    }
  },
  {
    path: '/to-do',
    name: 'TodoList',
    component: TodoList,
    meta: {
      title: 'To Do'
    }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    meta: {
      title: 'Chat'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  window.scrollTo(0, 0)
  document.title = to.meta.title + ' - jsmethod'
  axios.get('/')
})

export default router
