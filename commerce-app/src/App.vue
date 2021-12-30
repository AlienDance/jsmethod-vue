<template>
  <Navbar />
  <div class="container-fluid container-image shadow-item-bottom">
    <div class="container">
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

<style></style>
