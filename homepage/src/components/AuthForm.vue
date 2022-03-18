<template>
  <div v-if="!userIsAuth" class="card-container">
    <div class="card auth-card p-3 border border-light text-light">
      <form @submit.prevent @submit="sumbitAuthForm">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input ref="emailInput" type="email" class="form-control text-light" name="email" id="auth-email-input" />
        </div>
        <div>
          <p class="text-danger" ref="emailError"></p>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            ref="passwordInput"
            type="password"
            class="form-control text-light"
            name="password"
            id="auth-password-input" />
        </div>
        <div><p class="text-danger" ref="passwordError"></p></div>
        <div class="d-flex justify-content-center">
          <button class="btn btn-success">{{ buttonText }}</button>
        </div>
      </form>
    </div>
    <p v-if="props.login" class="small mt-2 text-muted text-center">
      Use <span class="text-primary">test123@test.com</span> and <span class="text-primary">test123</span> for testing
      purposes.
    </p>
    <p v-else class="small mt-2 text-muted text-center">
      Or log in with testing account <router-link to="/login">here</router-link>.
    </p>
  </div>
  <div v-else-if="userIsAuth" class="text-center">
    <p>You are already logged in...</p>
    <router-link class="btn btn-success me-3" to="/">Homepage</router-link>
    <button @click="logout" class="btn btn-dark">Log Out</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  props: ['login', 'signup'],

  setup(props) {
    const emailInput = ref(null)
    const passwordInput = ref(null)
    const emailError = ref(null)
    const passwordError = ref(null)
    let userIsAuth = null

    if ($cookies.get('user')) {
      userIsAuth = true
    } else {
      userIsAuth = false
    }

    let addressToFetch = null
    let buttonText = null

    if (props.signup) {
      addressToFetch = 'signup'
      buttonText = 'Sign Up'
    } else if (props.login) {
      addressToFetch = 'login'
      buttonText = 'Log In'
    }

    const sumbitAuthForm = () => {
      if (!userIsAuth) {
        console.log(addressToFetch)

        const data = { email: emailInput.value.value, password: passwordInput.value.value }

        if (data.email && data.password.length >= 6) {
          axios
            .post(`/${addressToFetch}`, {
              data
            })
            .then(res => {
              if (res.data.emailError || res.data.passwordError) {
                emailError.value.textContent = res.data.emailError
                passwordError.value.textContent = res.data.passwordError
              } else {
                window.location.href = '/'
              }
            })
            .catch(err => console.log(err))
        } else if (!data.email) {
          emailError.value.textContent = 'Please, enter a valid email!'
          passwordError.value.textContent = ''
        } else if (data.password.length < 6) {
          emailError.value.textContent = ''
          passwordError.value.textContent = 'Password must be at least 6 characters long!'
        }
      }
    }

    const logout = () => {
      axios
        .post('/logout')
        .then(res => (window.location.href = '/'))
        .catch(err => console.log(err))
    }

    return {
      emailInput,
      passwordInput,
      emailError,
      passwordError,
      buttonText,
      userIsAuth,
      logout,
      sumbitAuthForm,
      props
    }
  }
}
</script>

<style>
.card-container {
  width: 22rem;
}

.auth-card {
  background-color: #2e2e2e;
}

#auth-email-input,
#auth-password-input {
  background-color: #6c757d;
}
</style>
