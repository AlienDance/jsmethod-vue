<template>
  <div class="input-group">
    <input type="text" class="bg-light p-2 border rounded-start form-control" />
    <button class="input-group-text">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-trash-fill"
        viewBox="0 0 16 16">
        <path
          d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
      </svg>
    </button>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'

export default {
  setup() {
    onMounted(() => {
      console.log('item mounted')
    })
    // const deleteItem = () => {

    // }
  }
}
</script>

<style></style>
