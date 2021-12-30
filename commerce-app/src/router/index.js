import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ItemPage from '../views/ItemPage.vue'
import Cart from '../views/Cart.vue'

const routes = [
  {
    path: '/commerce/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Commerce - jsmethod'
    }
  },
  {
    path: '/commerce/item/:id',
    name: 'ItemPage',
    component: ItemPage,
    props: true,
    meta: {
      title: `Buy - jsmethod`
    }
  },
  {
    path: '/commerce/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      title: 'Cart - jsmethod'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]))
  }
  document.title = to.meta.title
  next()
})

export default router
