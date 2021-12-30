<template>
  <footer class="footer mt-auto bg-primary">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-lg-6 d-flex justify-content-center my-2">
          <ul class="nav flex-column">
            <li v-for="item in navArray" :key="item.title" class="nav-item">
              <router-link class="nav-link text-light fs-5" :to="item.to">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-6 d-flex justify-content-center my-2">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link text-light fs-5" href="/">Exit Portfolio</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    const navArray = [
      { title: 'Home', to: '/commerce' },
      { title: 'Contacts', to: '/commerce/contacts' },
      { title: 'Cart', to: '/commerce/cart' }
    ]

    return { navArray }
  }
}
</script>

<style></style>
