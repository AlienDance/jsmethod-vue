<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success p-0 px-2 d-flex align-items-center">
    <div class="container-fluid mx-0 mx-lg-5">
      <!-- navbar brand / title -->
      <router-link class="navbar-brand text-light mx-0 mx-lg-3 d-flex align-items-center" to="/">
        <h1 class="pt-1">JSMETHOD</h1>
      </router-link>
      <!-- toggle button for mobile nav -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- navbar links -->
      <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link lead text-light fw-bold p-3" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link lead text-light fw-bold p-3" to="/portfolio">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link lead text-light fw-bold p-3" to="/lorem">Lorem</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style></style>
