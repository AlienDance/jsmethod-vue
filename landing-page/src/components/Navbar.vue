<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark border-bottom border-light p-0 px-2">
    <div class="container-fluid" id="navbar-spy">
      <!-- navbar brand / title -->
      <a class="navbar-brand text-light p-0" href="/landing">
        <h1 class="display-5 my-2 mt-lg-0 mb-lg-1">SOMETHING</h1>
      </a>
      <!-- toggle button for mobile nav -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- navbar links -->
      <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
        <ul class="navbar-nav">
          <li v-for="item in navArray" :key="item.title" class="nav-item mx-lg-2 d-flex justify-content-end">
            <a class="nav-link lead text-light" :href="item.href">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    const navArray = [
      { title: 'Home', href: '#home' },
      { title: 'About Us', href: '#about' },
      { title: 'Gallery', href: '#gallery' },
      { title: 'Contacts', href: '#contacts' }
    ]

    return { navArray }
  }
}
</script>

<style>
.nav-link {
  width: fit-content;
}

.nav-link:hover,
.nav-item > .active {
  text-decoration: underline 1px;
  text-underline-offset: 3px;
}

.navbar,
#contacts {
  background-color: rgb(22, 22, 22);
}
</style>
