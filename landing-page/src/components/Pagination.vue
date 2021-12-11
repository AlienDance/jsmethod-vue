<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination d-flex justify-content-center">
      <li class="page-item">
        <a @click="loadNewImages" class="page-link bg-dark text-light" href="" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <!-- <li class="page-item"><a class="page-link bg-dark text-light" href="">1</a></li> -->
      <!-- <li class="page-item"><a class="page-link bg-dark text-light" href="">2</a></li> -->
      <!-- <li class="page-item"><a class="page-link bg-dark text-light" href="">3</a></li> -->
      <li class="page-item">
        <a @click="loadNewImages" class="page-link bg-dark text-light" href="" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import generateImages from '@/composables/generateImages'
import { onMounted } from '@vue/runtime-core'

export default {
  setup() {
    const { generateRandomNumber, generateRandomImages } = generateImages()

    const loadNewImages = () => {
      let galleryImages = document.querySelectorAll('#gallery > .row > div > a > div > img')
      let galleryLinks = document.querySelectorAll('#gallery > .row > div > a')

      for (let i = 0; i < galleryImages.length; i++) {
        generateRandomImages(galleryImages[i], galleryLinks[i], '')
      }
    }

    onMounted(() => loadNewImages())

    return { loadNewImages }
  }
}
</script>

<style></style>
