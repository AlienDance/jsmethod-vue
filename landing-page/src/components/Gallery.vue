<template>
  <div v-for="item in imgQuan" :key="item" class="col-lg-4 col-12 mb-0">
    <a class="lightbox-link" v-for="item in imgQuan" :key="item" data-fslightbox href="">
      <div class="ratio ratio-1x1 mb-lg-4 mb-2">
        <img src="" class="rounded gallery-image" />
      </div>
    </a>
  </div>
  <nav aria-label="Page navigation example">
    <ul class="pagination d-flex justify-content-center">
      <li class="page-item">
        <a class="page-link bg-dark text-light firstPageBtn current-page" href="#gallery">1</a>
      </li>
      <li class="page-item">
        <a class="page-link bg-dark text-light secondPageBtn" href="#gallery">2</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core'
import imagesArrays from '../../public/landing-page/images/imagesArrays'

export default {
  setup() {
    let imgQuan = 3

    const { firstPageImgArray, secondPageImgArray } = imagesArrays

    const setFromArray = (imageElements, imageLinks, imagesArray) => {
      for (let i = 0; i < imageElements.length; i++) {
        imageElements[i].src = imagesArray[i]
        imageLinks[i].href = imagesArray[i]
      }
    }

    const setImages = () => {
      let currentPage = document.querySelector('.current-page')
      let imageElements = document.querySelectorAll('.gallery-image')
      let imageLinks = document.querySelectorAll('.lightbox-link')
      if (currentPage.textContent === '1') {
        setFromArray(imageElements, imageLinks, firstPageImgArray)
      } else if (currentPage.textContent === '2') {
        setFromArray(imageElements, imageLinks, secondPageImgArray)
      }
      refreshFsLightbox()
    }

    const changePage = addClassTo => {
      document.querySelector('.current-page').classList.remove('current-page')
      addClassTo.classList.add('current-page')
      setImages()
    }

    onMounted(() => {
      let pageButtons = document.querySelectorAll('.page-link')
      setImages()
      pageButtons.forEach(btn => {
        btn.addEventListener('click', e => {
          changePage(btn)
        })
      })
    })

    return { imgQuan, changePage }
  }
}
</script>

<style></style>
