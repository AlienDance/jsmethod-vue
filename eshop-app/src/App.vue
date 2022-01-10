<template>
  <Navbar />
  <div class="container-fluid container-image shadow-item-bottom px-0">
    <div class="container px-3">
      <Carousel />
      <CategoriesBar />
    </div>
  </div>
  <router-view />
  <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import CategoriesBar from '@/components/CategoriesBar.vue'
import Footer from '@/components/Footer.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'App',
  components: { Navbar, CategoriesBar, Footer, Carousel },
  setup() {}
}
</script>

<style>
body {
  font-family: 'Open Sans', sans-serif !important;
}

.navbar,
.categories-bar,
.footer {
  background-color: rgb(31, 30, 30) !important;
}

.container-image {
  background-color: rgb(6, 185, 230);
  padding-top: 2rem;
  padding-bottom: 2rem;
  box-shadow: 0em 0.3em 1em rgba(0, 0, 0, 0.2), 0em -0.3em 1em rgba(0, 0, 0, 0.2);
}

.container-image-home {
  padding-top: 0;
  padding-bottom: 1rem;
}

@media (max-width: 768px) {
  .container-image {
    padding-bottom: 2rem;
    padding-top: 2rem;
  }
}
</style>
