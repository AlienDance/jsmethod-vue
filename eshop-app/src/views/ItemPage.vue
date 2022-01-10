<template>
  <div class="container px-3 px-lg-5">
    <div class="card my-5 p-1 p-lg-3 mx-lg-5 border-dark">
      <div class="row">
        <div class="col-12 col-lg-7 d-flex justify-content-center align-items-center">
          <div class="ratio ratio-1x1">
            <img class="img-thumbnail" style="object-fit: cover" :src="item.image" alt="" />
          </div>
        </div>
        <div class="col-12 col-lg-5 d-flex flex-column text-center text-lg-start">
          <div>
            <p class="fs-3 mt-2 m-lg-0">{{ item.title }}</p>
            <p class="ps-lg-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, ipsum. Voluptatem corporis quas aliquam
              animi, tempora esse facere autem expedita velit quis. At eaque assumenda in expedita, eligendi inventore
              unde itaque voluptates explicabo iste voluptatum soluta nisi, sapiente atque laudantium dolores,
              repellendus accusamus magni magnam placeat ab natus rerum veritatis.
            </p>
          </div>
          <div class="input-group justify-content-center justify-content-lg-end item-page-button my-2 my-lg-3">
            <span class="fs-5 input-group-text border-primary">${{ item.price }}</span>
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
  props: ['id', 'category'],
  setup(props) {
    const item = itemsDatabase[`${props.category}`].find(item => item.id === Number(props.id))
    item.category = props.category
    const statsNames = ['Screen Size', 'Battery Capacity', 'Display Type', 'Camera', 'Weight', 'Storage']

    return { item, statsNames, setItemToLocalStorage, updateCart }
  }
}
</script>

<style>
@media (min-width: 992px) {
  .item-page-button {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 16px;
    margin-right: 16px;
  }
}
</style>
