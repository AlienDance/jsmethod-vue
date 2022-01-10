<template>
  <ul class="nav categories-bar justify-content-center align-items-center bg-primary rounded text-light">
    <li v-for="item in categories" :key="item.title" class="nav-item">
      <router-link class="nav-link active text-light" :to="item.to">{{ item.title }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  setup() {
    const categories = [
      { title: 'Phones', to: '/eshop/phones' },
      { title: 'Headphones', to: '/eshop/headphones' },
      { title: 'Mouses', to: '/eshop/mouses' }
    ]

    return { categories }
  }
}
</script>

<style></style>
