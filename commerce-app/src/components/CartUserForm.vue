<template>
  <div v-if="!formSent" class="card border-dark p-3 mx-lg-5">
    <form @submit.prevent @submit="sendForm">
      <div class="row">
        <div class="col-12 col-md-6 my-2">
          <label for="firstName">First Name</label>
          <input
            ref="firstNameInput"
            class="form-control"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="John"
            required />
        </div>
        <div class="col-12 col-md-6 my-2">
          <label for="LastName">Last Name</label>
          <input
            ref="lastNameInput"
            class="form-control"
            type="text"
            name="LastName"
            id="LastName"
            placeholder="Doe"
            required />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 my-2">
          <label for="email">Email Address</label>
          <input
            ref="emailInput"
            class="form-control"
            type="email"
            name="email"
            id="email"
            placeholder="somemail@email.com"
            required />
        </div>
        <div class="col-12 col-md-6 my-2">
          <label for="telephone">Phone Number</label>
          <input
            ref="phoneInput"
            class="form-control"
            type="number"
            name="telephone"
            id="telephone"
            placeholder="+123456789"
            required />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 my-2">
          <label for="adress">Address</label>
          <input
            ref="addressInput"
            class="form-control"
            type="text"
            name="adress"
            id="adress"
            placeholder="09703 Stokes Drive"
            required />
        </div>
        <div
          class="col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start mt-2 mt-md-4">
          <input type="checkbox" name="tos" id="tos" class="me-2" required />
          <span>I have read and accept <a href="#">Terms of Service</a></span>
        </div>
      </div>
      <div class="text-center mt-3 mb-2">
        <button  class="btn btn-success">Submit Order</button>
      </div>
    </form>
  </div>
  <div v-else class="text-center display-5 text-success">
    <p>Order sent successfuly!</p>
    <router-link to="/commerce" class="btn btn-primary btn-lg">Back to shopping</router-link>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import updateCart from '@/composables/updateCart'

export default {
  props: ['orderObject'],
  setup(props) {
    const firstNameInput = ref(null)
    const lastNameInput = ref(null)
    const emailInput = ref(null)
    const phoneInput = ref(null)
    const addressInput = ref(null)
    const formSent = ref(false)

    const sendForm = () => {
      const orderInfo = {
        user: {
          firstName: firstNameInput.value.value,
          lastName: lastNameInput.value.value,
          email: emailInput.value.value,
          phone: phoneInput.value.value,
          address: addressInput.value.value
        },
        order: props.orderObject
      }
      console.log(orderInfo)
      axios.post('http://localhost:5000/commerce/sendorder', {
        orderInfo
      })
      localStorage.setItem('cart', JSON.stringify([]))
      formSent.value = true
      updateCart([])
    }

    return { sendForm, firstNameInput, lastNameInput, emailInput, phoneInput, addressInput, formSent }
  }
}
</script>

<style></style>
