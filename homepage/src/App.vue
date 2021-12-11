<template>
  <Navbar />
  <router-view />
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import Navbar from '@/components/Navbar.vue'

export default {
  components: { Navbar },
  setup() {
    onMounted(() => {
      let script = document.createElement('script')
      script.setAttribute('src', 'homepage/homepage.js')
      document.body.append(script)
    })
  }
}
</script>

<style></style>
