<template>
  <div ref="col" class="col-lg-4 col-12 mb-lg-0 mb-4">
    <div class="card">
      <div class="card-body text-light bg-dark rounded">
        <h5 ref="cardTitle" class="card-title">Card Title</h5>
        <p ref="cardContent" class="card-text lead">Card content</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core'

export default {
  props: ['isLargeCard'],
  setup(props) {
    const cardTitle = ref(null)
    const cardContent = ref(null)
    const col = ref(null)

    onMounted(() => {
      if (props.isLargeCard) {
        col.value.setAttribute('class', 'col-12')
      }

      fetch('https://jsmethod.com/lorem')
        .then(res => res.json())
        .then(data => {
          if (props.isLargeCard) {
            cardContent.value.textContent = data.loremBig
          } else {
            cardContent.value.textContent = data.loremSmall
          }
          cardTitle.value.textContent = data.loremTitle
        })
        .catch(err => console.log(err))
    })

    return { cardTitle, cardContent, col }
  }
}
</script>

<style></style>
