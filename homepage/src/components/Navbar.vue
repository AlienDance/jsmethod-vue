<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success p-0 px-2 d-flex align-items-center">
    <div class="container-fluid mx-0 mx-lg-5">
      <!-- navbar brand / title -->
      <router-link class="navbar-brand text-light mx-0 mx-lg-3 d-flex align-items-center" to="/">
        <h1 class="pt-1">JSMETHOD</h1>
      </router-link>
      <!-- toggle button for mobile nav -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- navbar links -->
      <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link lead text-light fw-bold p-3" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link lead text-light fw-bold p-3" to="/portfolio">Portfolio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link lead text-light fw-bold p-3" to="/lorem">Lorem</router-link>
          </li>
          <!-- auth dropdown -->
          <li class="nav-item">
            <div class="dropdown auth-dropdown">
              <a
                class="dropdown-toggle text-light d-flex align-items-center"
                href=""
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-person-circle"
                  viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
              </a>
              <ul style="margin: -1px" class="dropdown-menu dropdown-menu-dark dropdown-menu-end py-1">
                <div v-if="showLogin">
                  <li>
                    <router-link class="dropdown-item d-flex align-items-center" to="/login">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-house-door"
                        viewBox="0 0 16 16">
                        <path
                          d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                      </svg>
                      <span class="ms-1">Log In</span></router-link
                    >
                  </li>
                  <li><hr class="dropdown-divider m-0" /></li>
                  <li>
                    <router-link class="dropdown-item" to="/signup"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-plus"
                        viewBox="0 0 16 16">
                        <path
                          d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        <path
                          fill-rule="evenodd"
                          d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" /></svg
                      ><span class="ms-1">Sign Up</span></router-link
                    >
                  </li>
                </div>
                <li v-if="!showLogin">
                  <a @click="logout" class="dropdown-item d-flex align-items-center" href=""
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-door-open"
                      viewBox="0 0 16 16">
                      <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
                      <path
                        d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" /></svg
                    ><span class="ms-1">Log Out</span></a
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    const logout = () => {
      axios
        .post('/logout')
        .then(res => (window.location.href = '/'))
        .catch(err => console.log(err))
    }

    let showLogin = null

    if (!$cookies.get('user')) {
      showLogin = true
    } else {
      showLogin = false
    }

    return { logout, showLogin }
  }
}
</script>

<style></style>
