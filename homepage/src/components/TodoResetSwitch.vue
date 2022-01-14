<template>
  <div
    class="d-flex flex-md-column align-items-center form-check form-switch text-primary border border-primary rounded p-0 py-1 m-0 ms-2 ms-md-0 mt-md-2"
    data-bs-toggle="tooltip"
    data-bs-placement="bottom"
    title="Clear input field after adding new To Do">
    <label class="form-check-label me-2 me-md-0 text-center" for="resetInput">Reset Input</label>
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
      inputChecked.value = JSON.parse(localStorage.getItem('todoResetInput'))
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
    padding: 6px !important;
  }
}

@media (min-width: 768px) {
  .form-check {
    width: 6rem !important;
  }
}
</style>
