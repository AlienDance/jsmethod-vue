<template>
  <Navbar />
  <div class="container carousel-container" id="home">
    <Carousel />
  </div>
  <div class="container my-0" id="about">
    <p class="lead text-center display-3 text-light">ABOUT US</p>
    <div class="row">
      <Card />
      <Card />
      <Card />
    </div>
    <div class="row mt-lg-4">
      <Card :isLargeCard="true" />
    </div>
  </div>
  <div class="container" id="gallery">
    <p class="lead text-center display-3 text-light">GALLERY</p>
    <div class="row">
      <Gallery />
    </div>
  </div>
  <div class="container mb-3" id="contacts">
    <Contacts />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Carousel from '@/components/Carousel.vue'
import Card from '@/components/Card.vue'
import Gallery from '@/components/Gallery.vue'
import Pagination from '@/components/Pagination.vue'
import Contacts from '@/components/Contacts.vue'
import { onMounted } from '@vue/runtime-core'

export default {
  name: 'App',
  components: { Navbar, Carousel, Card, Gallery, Pagination, Contacts },
  setup() {
    onMounted(() => {
      const links = document.querySelectorAll('a')
      links.forEach(a => {
        let href = a.getAttribute('href')
        if (href === '') {
          a.addEventListener('click', e => e.preventDefault())
        }
      })
    })
  }
}
</script>

<style></style>
