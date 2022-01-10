<template>
  <div class="container my-5 py-3">
    <div v-if="cartState === 'cart'">
      <div v-for="item in finalItemArray" :key="item" class="px-3 mb-4 mb-md-2 px-lg-5">
        <div class="row justify-content-center border border-dark rounded">
          <div class="col-md-4 col-lg-2 d-flex align-items-center p-0">
            <router-link class="ratio ratio-1x1" :to="`/eshop/${item.category}/${item.id}`">
              <img class="rounded" style="object-fit: cover" :src="item.image" alt="" />
            </router-link>
          </div>
          <div class="col-md-5 col-lg-5 d-flex flex-column justify-content-center align-items-center py-2 fs-5">
            <router-link
              class="text-decoration-none text-dark cart-item-link"
              :to="`/eshop/${item.category}/${item.id}`">
              <span class="item-title">{{ item.title }}</span>
            </router-link>
            <router-link class="text-muted small text-decoration-none category-link" :to="`/eshop/${item.category}`">
              <span class="item-category">{{ firstLetterToUpperCase(item.category) }}</span>
            </router-link>
            <span class="text-muted small item-id">#{{ item.id }}</span>
          </div>
          <div class="col-md-3 col-lg-5 fs-5 d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex align-items-center">
              <span class="me-2 d-none d-lg-inline">Ammount:</span>
              <a href="" @click.prevent>
                <svg
                  @click="changeItemAmmount(item.id, '-', item.price)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-dash-circle"
                  viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                </svg>
              </a>
              <span class="fs-4 mx-2 item-ammount">{{ item.ammount }}</span>
              <a href="" @click.prevent>
                <svg
                  @click="changeItemAmmount(item.id, '+', item.price)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-plus-circle"
                  viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </a>
            </div>
            <div>
              <span class="me-2 d-none d-lg-inline">Price:</span>
              <span class="item-price">${{ item.price * item.ammount }}</span>
            </div>
            <button
              @click="deleteItem(item.id, item.ammount * item.price)"
              class="btn btn-warning my-2 d-flex align-items-center">
              <span class="me-1">Remove</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16">
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div v-if="!finalItemArray.length" class="text-center display-5">
        <p>Cart is empty...</p>
        <router-link to="/eshop" class="btn btn-primary btn-lg">Back to shopping</router-link>
      </div>
      <div v-else class="row fs-4 px-lg-5 justify-content-between">
        <!-- tablet+ clear button -->
        <div
          class="col-md-6 d-none d-md-flex align-items-center justify-content-center justify-content-md-start px-lg-0 my-2">
          <button @click="clearCart" class="btn btn-danger d-flex align-items-center">
            <span class="me-1">Clear Cart</span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16">
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
            </svg>
          </button>
        </div>
        <div class="col-md-6 d-flex align-items-center justify-content-center justify-content-md-end my-2 px-lg-0">
          <span class="total-price">Total: ${{ totalPrice }}</span>
          <button @click="confirmOrder" class="btn btn-success ms-2 d-flex align-items-center">
            <span class="me-1">Confirm Order</span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-check-circle"
              viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path
                d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </button>
        </div>
        <!-- tablet- clear button -->
        <div class="d-block d-md-none px-lg-0 text-center my-2">
          <button @click="clearCart" class="btn btn-danger">Clear Cart</button>
        </div>
      </div>
    </div>
    <div v-else-if="cartState === 'form'" class="px-lg-5">
      <CartUserForm :orderObject="orderObject" />
    </div>
  </div>
</template>

<script>
import itemsDatabase from '@/data/itemsDatabase'
import { ref } from '@vue/reactivity'
import updateCart from '@/composables/updateCart'
import CartUserForm from '@/components/CartUserForm.vue'
import firstLetterToUpperCase from '@/composables/firstLetterToUpperCase'

export default {
  components: { CartUserForm },

  setup() {
    const finalItemArray = ref([])
    const totalPrice = ref([])
    const cartState = ref('cart')
    const orderObject = ref({})

    try {
      const itemsFromLocalStorage = JSON.parse(localStorage.getItem('cart'))
      if (itemsFromLocalStorage.length) {
        const arrayOfPrices = []
        for (let i = 0; i < itemsFromLocalStorage.length; i++) {
          const itemFromDatabase = itemsDatabase[`${itemsFromLocalStorage[i].category}`].find(
            item => item.id === itemsFromLocalStorage[i].id
          )
          finalItemArray.value.push(itemFromDatabase)
          finalItemArray.value[i].category = itemsFromLocalStorage[i].category
          finalItemArray.value[i].ammount = itemsFromLocalStorage[i].ammount
          arrayOfPrices.push(itemsFromLocalStorage[i].ammount * itemFromDatabase.price)
        }

        totalPrice.value = arrayOfPrices.reduce((prevValue, currentValue) => {
          return prevValue + currentValue
        })
      }
    } catch (err) {
      localStorage.setItem('cart', JSON.stringify([]))
    }

    const pushItemsToLocalStorage = dataArray => {
      const itemsToLocalStorage = []
      for (let i = 0; i < dataArray.length; i++) {
        itemsToLocalStorage.push({
          id: dataArray[i].id,
          title: dataArray[i].title,
          ammount: dataArray[i].ammount,
          category: dataArray[i].category
        })
      }
      localStorage.setItem('cart', JSON.stringify(itemsToLocalStorage))
    }

    const changeItemAmmount = (id, operation, price) => {
      const item = finalItemArray.value.find(item => item.id === id)
      if (operation === '+') {
        item.ammount++
        totalPrice.value += price
      } else {
        if (item.ammount === 1) return
        item.ammount--
        totalPrice.value -= price
      }
      pushItemsToLocalStorage(finalItemArray.value)
      updateCart(finalItemArray.value)
    }

    const deleteItem = (id, price) => {
      const newArray = finalItemArray.value.filter(item => item.id !== id)
      finalItemArray.value = newArray
      totalPrice.value -= price
      pushItemsToLocalStorage(finalItemArray.value)
      try {
        updateCart(finalItemArray.value)
      } catch (err) {
        localStorage.setItem('cart', JSON.stringify([]))
      }
    }

    const clearCart = () => {
      localStorage.setItem('cart', JSON.stringify([]))
      finalItemArray.value = []
      try {
        updateCart(finalItemArray.value)
      } catch (err) {
        localStorage.setItem('cart', JSON.stringify([]))
      }
    }

    const confirmOrder = () => {
      const itemTitles = document.querySelectorAll('.item-title')
      const itemCategories = document.querySelectorAll('.item-category')
      const itemIds = document.querySelectorAll('.item-id')
      const itemAmmounts = document.querySelectorAll('.item-ammount')
      const itemPrices = document.querySelectorAll('.item-price')
      const totalOrderPrice = document.querySelector('.total-price')
      const orderItems = []
      for (let i = 0; i < itemTitles.length; i++) {
        orderItems.push({
          title: itemTitles[i].textContent,
          id: itemIds[i].textContent,
          category: itemCategories[i].textContent.toLowerCase(),
          ammount: itemAmmounts[i].textContent,
          price: itemPrices[i].textContent
        })
      }
      orderObject.value.items = orderItems
      orderObject.value.totalOrderPrice = totalOrderPrice.textContent.slice(
        totalOrderPrice.textContent.indexOf(':') + 2
      )
      cartState.value = 'form'
    }

    return {
      finalItemArray,
      deleteItem,
      changeItemAmmount,
      totalPrice,
      clearCart,
      confirmOrder,
      cartState,
      orderObject,
      firstLetterToUpperCase
    }
  }
}
</script>

<style>
.cart-item-link:hover {
  color: #0d6efd !important;
  text-decoration: underline solid !important;
}

.category-link:hover {
  text-decoration: underline solid !important;
}
</style>
