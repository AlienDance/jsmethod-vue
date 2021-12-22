<template>
  <div v-for="item in imgQuan" :key="item" class="col-lg-4 col-12 mb-0">
    <a class="lightbox-link" v-for="item in imgQuan" :key="item" data-fslightbox href="">
      <div class="ratio ratio-1x1 mb-lg-4 mb-2">
        <img src="" class="shadow-1-strong rounded" alt="" />
      </div>
    </a>
  </div>
  <nav aria-label="Page navigation example">
    <ul class="pagination d-flex justify-content-center">
      <li class="page-item">
        <a @click="generateImages" class="page-link bg-dark text-light" href="" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <!-- <li class="page-item"><a class="page-link bg-dark text-light" href="">1</a></li> -->
      <!-- <li class="page-item"><a class="page-link bg-dark text-light" href="">2</a></li> -->
      <!-- <li class="page-item"><a class="page-link bg-dark text-light" href="">3</a></li> -->
      <li class="page-item">
        <a @click="generateImages" class="page-link bg-dark text-light" href="" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import generateRandomImages from '@/composables/generateRandomImages'

export default {
  setup() {
    let imgQuan = 3

    const generateImages = () => {
      let images = document.querySelectorAll('.ratio > img')
      let imagesLinks = document.querySelectorAll('.lightbox-link')
      for (let i = 0; i < images.length; i++) {
        generateRandomImages(images[i], imagesLinks[i], '', '')
      }
    }

    onMounted(generateImages)

    return { imgQuan, generateImages }
  }
}
</script>

<style></style>
