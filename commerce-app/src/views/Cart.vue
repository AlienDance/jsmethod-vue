<template>
  <div class="container my-5 px-lg-5">
    <div v-if="cartState === 'cart'">
      <div v-for="item in finalItemArray" :key="item" class="my-2 mx-2 mx-lg-5">
        <div class="row justify-content-center border border-dark rounded">
          <div class="col-md-4 col-lg-2 d-flex align-items-center p-0">
            <router-link class="ratio ratio-1x1 m-1" :to="`/commerce/item/${item.id}`">
              <img class="" style="object-fit: cover" :src="item.image" alt="" />
            </router-link>
          </div>
          <div class="col-md-5 col-lg-5 d-flex flex-column justify-content-center align-items-center py-2 fs-5">
            <router-link class="text-decoration-none text-dark cart-item-link" :to="`/commerce/item/${item.id}`">
              <span class="item-title">{{ item.title }}</span>
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
            <button @click="deleteItem(item.id, item.ammount * item.price)" class="btn btn-primary my-2">Remove</button>
          </div>
        </div>
      </div>
      <div v-if="!finalItemArray.length" class="text-center display-5">
        <p>Cart is empty...</p>
        <router-link to="/commerce" class="btn btn-primary btn-lg">Back to shopping</router-link>
      </div>
      <div v-else class="row fs-4 px-lg-5 justify-content-between">
        <!-- tablet+ clear button -->
        <div
          class="col-md-5 d-none d-md-flex align-items-center justify-content-center justify-content-md-start px-lg-0 my-2">
          <button @click="clearCart" class="btn btn-danger">Clear Cart</button>
        </div>
        <div class="col-md-5 d-flex align-items-center justify-content-center justify-content-md-end my-2 px-lg-0">
          <span class="total-price">Total: ${{ totalPrice }}</span>
          <button @click="confirmOrder" class="btn btn-success ms-2">Confirm Order</button>
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
          const itemFromDatabase = itemsDatabase.find(item => item.id === itemsFromLocalStorage[i].id)
          finalItemArray.value.push(itemFromDatabase)
          finalItemArray.value[i].ammount = itemsFromLocalStorage[i].ammount
          arrayOfPrices.push(itemsFromLocalStorage[i].ammount * itemFromDatabase.price)
        }

        totalPrice.value = arrayOfPrices.reduce((prevValue, currentValue) => {
          return prevValue + currentValue
        })
      }
    } catch (err) {
      localStorage.setItem('cart', JSON.stringify([]))
      console.log('cart reset')
    }

    const pushItemsToLocalStorage = dataArray => {
      const itemsToLocalStorage = []
      for (let i = 0; i < dataArray.length; i++) {
        itemsToLocalStorage.push({
          id: dataArray[i].id,
          title: dataArray[i].title,
          ammount: dataArray[i].ammount
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
        console.log('cart reset')
        localStorage.setItem('cart', JSON.stringify([]))
      }
    }

    const clearCart = () => {
      localStorage.setItem('cart', JSON.stringify([]))
      finalItemArray.value = []
      try {
        updateCart(finalItemArray.value)
      } catch (err) {
        console.log('cart reset')
        localStorage.setItem('cart', JSON.stringify([]))
      }
    }

    const confirmOrder = () => {
      const itemTitles = document.querySelectorAll('.item-title')
      const itemIds = document.querySelectorAll('.item-id')
      const itemAmmounts = document.querySelectorAll('.item-ammount')
      const itemPrices = document.querySelectorAll('.item-price')
      const totalOrderPrice = document.querySelector('.total-price')
      const orderItems = []
      for (let i = 0; i < itemTitles.length; i++) {
        orderItems.push({
          title: itemTitles[i].textContent,
          id: itemIds[i].textContent,
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
      orderObject
    }
  }
}
</script>

<style></style>
