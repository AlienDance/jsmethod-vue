<template>
  <div
    class="d-flex flex-md-column align-items-center form-check form-switch text-light border border-primary rounded p-0 py-1 m-0 ms-1 ms-md-0 mt-md-2"
    data-bs-toggle="tooltip"
    data-bs-placement="bottom"
    title="Clear input field after adding new To Do">
    <label
      class="form-check-label me-2 me-md-0 text-center d-flex align-items-center justify-content-center"
      for="resetInput">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        fill="currentColor"
        class="bi bi-arrow-repeat d-inline d-md-none me-1"
        viewBox="0 0 16 16">
        <path
          d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
        <path
          fill-rule="evenodd"
          d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
      </svg>
      <span>Reset</span>
      <span class="d-none d-md-inline ms-1">Input</span></label
    >
    <input
      v-model="inputChecked"
      @change="saveStateToStorage"
      class="form-check-input m-0 mt-1"
      type="checkbox"
      role="switch"
      name="resetInput"
      id="resetInput" />
  </div>
</template>

<script>
import bootstrapFunctions from '@/composables/bootstrapFunctions'
import { onMounted, ref } from '@vue/runtime-core'

export default {
  setup() {
    const inputChecked = ref(false)

    onMounted(() => {
      bootstrapFunctions.bootstrapTooltipOn()
      inputChecked.value = JSON.parse(localStorage.getItem('todoResetInput')) ?? true
    })

    const saveStateToStorage = () => {
      localStorage.setItem('todoResetInput', inputChecked.value)
    }

    return { saveStateToStorage, inputChecked }
  }
}
</script>

<style>
@media (max-width: 768px) {
  .form-check {
    padding: 6px 3px !important;
  }
  #resetInput {
    margin-top: 2px !important;
  }
}

@media (min-width: 768px) {
  .form-check {
    width: 6rem !important;
  }
}
</style>
