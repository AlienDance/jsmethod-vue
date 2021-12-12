<template>
  <InfoCard />
</template>

<script>
// @ is an alias to /src
import InfoCard from '@/components/InfoCard.vue'
import { onMounted } from '@vue/runtime-core'
import Bootstrap from '@/composables/bootstrap'
import noRefreshOnEmptyLink from '@/composables/noRefreshOnEmptyLink'

export default {
  name: 'Home',
  components: { InfoCard },
  setup() {
    onMounted(() => {
      const { bootstrapPopoverOn, bootstrapTooltipOn } = Bootstrap
      bootstrapTooltipOn()
      bootstrapPopoverOn()
      noRefreshOnEmptyLink()
    })
  }
}
</script>
