<template>
  <div class="card item-card d-flex flex-column border-dark">
    <router-link class="ratio ratio-1x1" :to="`/eshop/${category}/${item.id}`">
      <img :src="item.image" class="card-img-top" alt="..." />
    </router-link>
    <div class="card-body">
      <div style="width: fit-content">
        <router-link class="text-decoration-none item-card-link text-dark" :to="`/eshop/${category}/${item.id}`">
          <h5 class="card-title">{{ item.title }}</h5>
        </router-link>
      </div>
    </div>
    <div class="input-group mb-3 me-3 d-flex justify-content-end pe-3">
      <span class="input-group-text text-center fs-6 border-primary" id="basic-addon1">${{ item.price }}</span>
      <button @click="setItemToLocalStorage(item, updateCart)" class="btn btn-primary">
        <span> Buy </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-cart-plus"
          viewBox="0 0 16 16">
          <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
          <path
            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import setItemToLocalStorage from '@/composables/setItemToLocalStorage'
import updateCart from '@/composables/updateCart'
import { onBeforeUpdate, ref } from '@vue/runtime-core'

export default {
  props: ['item', 'category'],
  setup(props) {
    const item = props.item
    const category = ref(props.category)
    item.category = category
    if (!category.value) {
      if (item.id > 300) {
        item.category = 'mouses'
      } else if (item.id > 200) {
        item.category = 'headphones'
      } else if (item.id > 100) {
        item.category = 'phones'
      }
    }

    onBeforeUpdate(() => {
      category.value = props.category
      if (!category.value) {
        if (item.id > 300) {
          item.category = 'mouses'
        } else if (item.id > 200) {
          item.category = 'headphones'
        } else if (item.id > 100) {
          item.category = 'phones'
        }
      }
    })

    return { item, category, setItemToLocalStorage, updateCart }
  }
}
</script>

<style>
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
}

.item-card {
  width: 40rem;
}

@media (min-width: 992px) {
  .item-card:hover {
    transform: scale(1.1);
  }
}

@media (min-width: 768px) {
  .item-card {
    width: 18rem;
    height: 28rem;
  }
}

@media (min-width: 992px) {
  .item-card {
    width: 18rem;
    height: 24rem;
  }
}

@media (min-width: 1200px) {
  .item-card {
    width: 18rem;
    height: 28rem;
  }
}
</style>
