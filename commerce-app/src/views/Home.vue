<template>
  <div class="container my-5">
    <div class="row px-0 px-md-3">
      <div
        v-for="item in itemsDatabase"
        :key="item"
        class="col-12 col-md-6 col-lg-3 d-flex justify-content-center my-3 px-3">
        <ItemCard :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import itemsDatabase from '@/data/itemsDatabase'
import CategoriesBar from '@/components/CategoriesBar.vue'
import ItemCard from '@/components/ItemCard.vue'

export default {
  name: 'Home',
  components: { CategoriesBar, ItemCard },
  setup() {
    return { itemsDatabase }
  }
}
</script>

<style></style>
