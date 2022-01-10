<template>
  <div v-if="!formSent" class="card border-dark p-3 mx-lg-5">
    <form @submit.prevent @submit="sendForm">
      <p class="text-danger text-center text-uppercase">
        Don't use real data (it will be publicly available
        <router-link class="warning-link" to="/eshop/orders">here</router-link>). Generate fake data instead!
      </p>
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
          <span class="text-decoration-underline">I didn't use any real data in this form.</span>
        </div>
      </div>
      <div class="d-flex justify-content-center mt-3 mb-2">
        <button @click.prevent @click="fetchFakerForm" class="btn faker-data-btn me-2">Generate Fake Data</button>
        <button class="btn btn-success d-flex align-items-center">
          <span class="me-1">Submit Order</span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-arrow-up-right-circle"
            viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
          </svg>
        </button>
      </div>
    </form>
  </div>
  <div v-else class="text-center display-5 text-success">
    <p>Order sent successfuly!</p>
    <router-link to="/eshop" class="btn btn-primary btn-lg my-2 mx-2">Back to shopping</router-link>
    <router-link to="/eshop/orders" class="btn btn-warning btn-lg">Order Managment</router-link>
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
    const socket = io()

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
      socket.emit('NEW_ORDER', orderInfo)
      localStorage.setItem('cart', JSON.stringify([]))
      formSent.value = true
      updateCart([])
    }

    const fetchFakerForm = () => {
      axios
        .get('/eshop/fakerform')
        .then(response => {
          firstNameInput.value.value = response.data.firstName
          lastNameInput.value.value = response.data.lastName
          emailInput.value.value = response.data.email
          phoneInput.value.value = response.data.phone
          addressInput.value.value = response.data.address
        })
        .catch(err => console.log(err))
    }

    return { sendForm, firstNameInput, lastNameInput, emailInput, phoneInput, addressInput, formSent, fetchFakerForm }
  }
}
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.faker-data-btn {
  background-color: rgb(6, 185, 230);
}

.warning-link {
  color: rgb(6, 185, 230);
}
</style>
