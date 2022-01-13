<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success p-0 px-2">
    <div class="container-fluid px-lg-5">
      <!-- navbar brand / title -->
      <router-link class="navbar-brand text-light m-0 py-2 mx-lg-3 d-flex align-items-center" to="/">
        <span class="h2 mb-0">JSMETHOD</span>
      </router-link>
      <!-- toggle button for mobile nav -->
      <div class="d-flex align-items-center">
        <AuthDropdown class="d-block d-lg-none" />
        <button class="navbar-toggler h-50" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <!-- navbar links -->
      <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
        <ul class="navbar-nav">
          <li v-for="item in navItems" :key="item.title" class="nav-item">
            <router-link class="nav-link text-end text-lg-center lead text-light fw-bold p-3" :to="item.href">{{
              item.title
            }}</router-link>
          </li>
          <li class="nav-item d-none d-lg-block">
            <AuthDropdown />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import AuthDropdown from '@/components/AuthDropdown.vue'

export default {
  components: { AuthDropdown },
  setup() {
    const navItems = [
      { title: 'Home', href: '/' },
      { title: 'Portfolio', href: '/portfolio' },
      { title: 'To Do', href: '/to-do' },
      { title: 'Lorem', href: '/lorem' }
    ]

    const logout = () => {
      axios
        .post('/logout')
        .then(res => (window.location.href = '/'))
        .catch(err => console.log(err))
    }

    return { navItems, logout }
  }
}
</script>

<style>
.nav-item:hover {
  background-color: rgb(0, 99, 33);
}

.nav-item > .nav-link {
  font-size: 16px;
}

.navbar-brand > span {
  margin-bottom: 2px !important;
}
</style>
