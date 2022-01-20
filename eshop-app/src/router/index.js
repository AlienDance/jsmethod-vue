import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ItemPage from '../views/ItemPage.vue'
import Cart from '../views/Cart.vue'
import OrderManagment from '../views/OrderManagment.vue'
import Contacts from '../views/Contacts.vue'

const routes = [
  {
    path: '/eshop',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Eshop - jsmethod'
    }
  },
  {
    path: '/eshop/:category/:id',
    name: 'ItemPage',
    component: ItemPage,
    props: true,
    meta: {
      title: `Eshop - jsmethod`
    }
  },
  {
    path: '/eshop/cart',
    name: 'Cart',
    component: Cart,
    meta: {
      title: 'Eshop - jsmethod'
    }
  },
  {
    path: '/eshop/orders',
    name: 'OrderManagment',
    component: OrderManagment,
    meta: {
      title: 'Eshop - jsmethod'
    }
  },
  {
    path: '/eshop/contacts',
    name: 'Contacts',
    component: Contacts,
    meta: {
      title: 'Eshop - jsmethod'
    }
  },
  {
    path: '/eshop/:category',
    name: 'Category',
    component: Home,
    props: true,
    meta: {
      title: 'Eshop - jsmethod'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  window.scrollTo(0, 0)
  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]))
  }
  document.title = to.meta.title
})

export default router
