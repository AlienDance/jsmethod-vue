<template>
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner rounded">
      <div class="carousel-item active" data-bs-interval="3000">
        <img src="" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button
      class="carousel-control-prev d-flex justify-content-start ps-4"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next d-flex justify-content-end pe-4"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import generateImages from '@/composables/generateImages'

export default {
  setup() {
    onMounted(() => {
      let carouselImages = document.querySelectorAll('.carousel-item > img')

      const { generateRandomNumber, generateRandomImages } = generateImages()
      carouselImages.forEach((image) => {
        generateRandomImages(image, null, '1920x1080', '?sig=')
      })
    })
  }
}
</script>

<style></style>
