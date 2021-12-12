<template>
  <div class="container-fluid my-5">
    <div class="d-flex justify-content-center">
      <textarea ref="loremTextarea" class="rounded px-1" cols="120" rows="15"></textarea>
    </div>
    <div class="row justify-content-center mt-3">
      <div class="col-12 col-lg-3 d-flex justify-content-center justify-content-lg-end pe-1 mb-3 mb-lg-0">
        <div class="input-group" style="width: 200px">
          <span class="input-group-text justify-content-center" style="width: 110px">Sentences</span>
          <input ref="loremInput" type="number" min="1" max="1000" value="1" class="form-control text-center" />
        </div>
      </div>
      <div class="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-start ps-1">
        <button @click="fetchLorem" class="btn btn-success ms-2 me-1 d-inline-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-card-text"
            viewBox="0 0 16 16">
            <path
              d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
            <path
              d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" /></svg
          ><span class="ms-1">Generate Lorem</span>
        </button>
        <button @click="copyLorem" class="btn btn-primary d-inline-flex align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-clipboard"
            viewBox="0 0 16 16">
            <path
              d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
            <path
              d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
          </svg>
          <span class="ms-1">Copy</span>
        </button>
      </div>
    </div>
    <p class="text-muted text-center mt-2">Generates from 1 to 1000 sentences.</p>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

export default {
  setup() {
    const loremTextarea = ref(null)
    const loremInput = ref(null)

    const fetchLorem = () => {
      const sentences = { sentQuan: Number(loremInput.value.value) }

      if (sentences.sentQuan <= 0) {
        sentences.sentQuan = 1
        loremInput.value.value = 1
      } else if (sentences.sentQuan > 1000) {
        sentences.sentQuan = 1000
        loremInput.value.value = 1000
      }

      fetch('https://jsmethod.com/lorem', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sentences)
      })
        .then(res => res.json())
        .then(data => (loremTextarea.value.value = data.lorem))
        .catch(err => console.log(err))
    }

    const copyLorem = () => {
      navigator.clipboard.writeText(loremTextarea.value.value)
    }

    onMounted(fetchLorem)

    return { fetchLorem, loremTextarea, loremInput, copyLorem }
  }
}
</script>

<style></style>
