<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary p-0 px-2">
    <div class="container-fluid">
      <!-- navbar brand / title -->
      <router-link class="navbar-brand text-light p-2 p-lg-0 d-flex align-items-center" to="/commerce">
        <span class="lead fs-2">Commerce</span>
      </router-link>
      <!-- toggle button for mobile nav -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- navbar links -->
      <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
        <ul class="navbar-nav">
          <li v-for="item in navArray" :key="item.title" class="nav-item mx-lg-2 d-flex justify-content-end">
            <router-link class="nav-link lead text-light" :to="item.to">{{ item.title }}</router-link>
          </li>
          <li class="nav-item mx-lg-2 d-flex justify-content-end">
            <router-link class="nav-link lead text-light d-flex align-items-center" to="/commerce/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-cart4"
                viewBox="0 0 16 16">
                <path
                  d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
              <span class="ms-1 cart-num">0</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from '@vue/reactivity'
import updateCart from '@/composables/updateCart'
import { onMounted } from '@vue/runtime-core'

export default {
  setup() {
    const navArray = [
      { title: 'Home', to: '/commerce' },
      { title: 'Contacts', to: '/commerce/contacts' }
      // { title: `Cart${stuff.value.length}`, to: '/cart' }
    ]

    onMounted(async () => {
      try {
        const storedItems = JSON.parse(localStorage.getItem('cart'))
        updateCart(storedItems)
      } catch (err) {
        localStorage.setItem('cart', JSON.stringify([]))
        console.log('cart reset')
      }
    })

    return { navArray }
  }
}
</script>

<style></style>
