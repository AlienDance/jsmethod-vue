<template>
  <div class="container my-5 d-flex justify-content-center">
    <AuthForm :signup="true" />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm'

export default {
  name: 'Signup',
  components: { AuthForm }
}
</script>

<style></style>
