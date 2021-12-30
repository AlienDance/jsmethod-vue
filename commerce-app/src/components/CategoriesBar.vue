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
      { title: 'Phones', to: '#' },
      { title: "PC's", to: '#' },
      { title: 'Audio', to: '#' },
      { title: 'Keyboards', to: '#' },
      { title: 'Headphones', to: '#' },
      { title: "TV's", to: '#' }
    ]

    return { categories }
  }
}
</script>

<style></style>
