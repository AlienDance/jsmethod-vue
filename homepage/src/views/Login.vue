<template>
  <div class="container my-5 d-flex justify-content-center">
    <AuthForm :login="true" />
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm'

export default {
  name: 'Login',
  components: { AuthForm }
}
</script>

<style></style>
