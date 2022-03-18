<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: { Navbar, Footer }
}
</script>

<style>
/* @media (max-width: 768px) {
  #app {
    min-height: calc(100vh + 185px) !important;
  }
} */
</style>
