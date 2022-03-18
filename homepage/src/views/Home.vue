<template>
  <div class="container lead text-center fs-4 text-light">
    <p class="mt-5">Homepage still in development...</p>
    <p>
      <router-link class="homepage-link" to="/login">log in</router-link> /
      <router-link class="homepage-link" to="/signup">sign up</router-link>
    </p>
    <ul class="list-unstyled">
      <li><router-link class="homepage-link" to="/portfolio">Portfolio</router-link></li>
      <li><router-link class="homepage-link" to="/to-do">Todo List</router-link></li>
      <li><router-link class="homepage-link" to="/lorem">Lorem</router-link></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style>
.homepage-link {
  text-decoration: none;
  color: rgb(44, 126, 250);
}

.homepage-link:hover {
  text-decoration: underline;
}
</style>
