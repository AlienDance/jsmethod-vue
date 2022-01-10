<template>
  <div class="container my-3 px-3">
    <p class="text-muted text-center">
      Control panel for order managment. Refreshes in real time with
      <a target="_blank" class="text-decoration-none" href="https://socket.io/">Socket.IO</a>
    </p>
    <div v-for="item in ordersArray" :key="item" class="card my-2 border text-center border-dark">
      <h4 class="mt-3">Order: #{{ item._id }}</h4>
      <h5><span class="text-primary">User: </span>{{ item.user.firstName }} {{ item.user.lastName }}</h5>
      <h5>
        <span class="text-primary">Email: </span>{{ item.user.email }} <span class="text-primary">Phone: </span
        >{{ item.user.phone }} <span class="text-primary">Address: </span>{{ item.user.address }}
      </h5>
      <div class="d-flex flex-column align-items-center">
        <p v-for="item in item.order.items" :key="item" class="my-1 border-bottom border-dark">
          <span class="text-success">Name: </span>{{ item.title }} <span class="text-success">Id: </span>{{ item.id }}
          <span class="text-success">Category: </span>{{ item.category }} <span class="text-success">Ammount: </span
          >{{ item.ammount }} <span class="text-success">Price: </span>{{ item.price }}
          <router-link class="text-info" :to="`/eshop/${item.category}/${item.id.slice(1)}`">Link</router-link>
        </p>
        <p class="border-bottom border-danger">Total: {{ item.order.totalOrderPrice }}</p>
        <p>Order Time: {{ new Date(item.date).toLocaleString() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import firstLetterToUpperCase from '@/composables/firstLetterToUpperCase'

export default {
  setup() {
    const ordersArray = ref([])
    const socket = io()

    const getData = async () => {
      const response = await axios.get('/eshop/orders')
      ordersArray.value = response.data
      console.log('fetching from db...')
    }

    getData()

    socket.on('NEW_ORDER', () => {
      console.log('new order. fetching...')
      getData()
    })

    return { ordersArray, firstLetterToUpperCase }
  }
}
</script>

<style></style>
