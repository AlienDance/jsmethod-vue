<template>
  <footer class="footer mt-auto py-3 bg-success">
    <div class="container text-center text-light fw-bold">
      <span class="h4 mx-3"><router-link class="text-decoration-none text-light" to="/">JSMETHOD</router-link></span>
      <ul class="list-group list-unstyled d-flex d-lg-inline">
        <li class="d-lg-inline-flex m-1 mx-lg-2 my-lg-0" v-for="item in navbarLinks" :key="item.title">
          <router-link class="text-decoration-none text-light" :to="item.href">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import navbarLinks from '@/composables/navbarLinks'

export default {
  setup() {
    return { navbarLinks }
  }
}
</script>

<style>
.footer {
  padding: 13px 0px !important;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .footer {
    height: 185px;
  }
}
</style>
