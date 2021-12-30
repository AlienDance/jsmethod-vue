<template>
  <div class="container px-lg-5">
    <div class="card my-5 p-1 p-lg-3 mx-lg-5 border-dark">
      <div class="row">
        <div class="col-12 col-lg-7 d-flex justify-content-center align-items-center">
          <div class="ratio ratio-1x1">
            <img class="img-thumbnail" style="object-fit: cover" :src="item.image" alt="" />
          </div>
        </div>
        <div class="col-12 col-lg-5 d-flex flex-column text-center text-lg-start">
          <div>
            <p class="fs-2 mt-2 m-lg-0">{{ item.title }}</p>
            <ul class="list-group fs-5">
              <li class="list-group-item border-0 py-1" v-for="item in statsNames" :key="item">
                {{ item }}: Lorem ipsum.
              </li>
            </ul>
          </div>
          <div class="d-flex justify-content-center align-items-center item-page-button my-2 my-lg-3">
            <span class="fs-4 me-3">${{ item.price }}</span>
            <button
              @click="setItemToLocalStorage(item, updateCart)"
              class="btn btn-lg btn-primary d-flex align-items-center">
              <span class="me-2">Add to Cart</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-cart4"
                viewBox="0 0 16 16">
                <path
                  d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemsDatabase from '@/data/itemsDatabase'
import setItemToLocalStorage from '@/composables/setItemToLocalStorage'
import updateCart from '@/composables/updateCart'

export default {
  props: ['id'],
  setup(props) {
    const item = itemsDatabase.find(item => item.id === Number(props.id))
    const statsNames = ['Screen Size', 'Battery Capacity', 'Display Type', 'Camera', 'Weight', 'Storage']

    return { item, statsNames, setItemToLocalStorage, updateCart }
  }
}
</script>

<style>
.container-image {
  background-color: rgb(147, 207, 235);
  /* height: 20rem; */
  padding-top: 6rem;
  padding-bottom: 2rem;
  box-shadow: 0em 0.3em 1em rgba(0, 0, 0, 0.2), 0em -0.3em 1em rgba(0, 0, 0, 0.2);
  /* background-position: center center;
  background-repeat: no-repeat; */
}

.navbar {
  box-shadow: 0em 0.3em 1em rgba(0, 0, 0, 0.2), 0em -0.3em 1em rgba(0, 0, 0, 0.2);
}

body {
  font-family: 'Open Sans', sans-serif !important;
}

footer {
  box-shadow: 0em -0.3em 1em rgba(0, 0, 0, 0.2), 0em 0.3em 1em rgba(0, 0, 0, 0.2);
}

.cart-item-link:hover,
.item-card-link:hover {
  color: #0d6efd !important;
  text-decoration: underline solid #0d6efd !important;
}

.card-img-top {
  background-color: dimgray;
  object-fit: cover;
}

.item-card:hover {
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.3);
  /* transform: scale(1.1); */
  /* cursor: pointer; */
}
.item-card {
  width: 40rem;
}

@media (min-width: 768px) {
  .item-card {
    width: 18rem;
  }
}

@media (max-width: 768px) {
  .container-image {
    padding-bottom: 2rem;
    padding-top: 2rem;
  }
}

@media (min-width: 992px) {
  .item-card:hover {
    transform: scale(1.1);
  }
  .item-page-button {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 16px;
    margin-right: 16px;
  }
}
</style>
