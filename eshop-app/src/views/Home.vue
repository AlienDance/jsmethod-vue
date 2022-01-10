<template>
  <div class="container my-5">
    <div class="row px-0">
      <div
        v-for="item in itemsArray"
        :key="item"
        class="col-12 col-md-6 col-lg-3 d-flex justify-content-center my-3 px-3">
        <ItemCard :category="category" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import itemsDatabase from '@/data/itemsDatabase'
import ItemCard from '@/components/ItemCard.vue'
import { onBeforeUpdate, onMounted, onUnmounted, ref } from '@vue/runtime-core'

export default {
  name: 'Home',
  components: { ItemCard },
  props: ['category'],
  setup(props) {
    const itemsArray = ref([])
    const carousel = document.querySelector('.carousel')
    const containerImage = document.querySelector('.container-image')
    const category = ref(props.category)

    if (!category.value) {
      for (let i = 0; i < 4; i++) {
        itemsArray.value.push(itemsDatabase.phones[i])
        itemsArray.value.push(itemsDatabase.headphones[i])
        itemsArray.value.push(itemsDatabase.mouses[i])
      }
    } else {
      itemsArray.value = itemsDatabase[`${category.value}`]
    }

    onMounted(() => {
      carousel.classList.add('d-md-flex')
      containerImage.classList.add('container-image-home')
    })

    onBeforeUpdate(() => {
      category.value = props.category
      if (!category.value) {
        itemsArray.value = []
        for (let i = 0; i < 4; i++) {
          itemsArray.value.push(itemsDatabase.phones[i])
          itemsArray.value.push(itemsDatabase.headphones[i])
          itemsArray.value.push(itemsDatabase.mouses[i])
        }
        return
      }
      itemsArray.value = itemsDatabase[`${category.value}`]
    })

    onUnmounted(() => {
      carousel.classList.remove('d-md-flex')
      containerImage.classList.remove('container-image-home')
    })

    return { itemsArray, category }
  }
}
</script>

<style></style>
