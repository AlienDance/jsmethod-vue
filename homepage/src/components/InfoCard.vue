<template>
  <div class="card row border border-light">
    <div class="card-body portfolio-about-card rounded-top">
      <img style="width: 150px" src="homepage/images/Kot.png" alt="" class="rounded-pill d-block mx-auto" />
      <div class="mt-3 text-center lead">
        <p class="mb-1">Hi, my name is vlader. I'm a web developer.</p>
        <p class="mb-1">I love building different stuff and learning various technologies.</p>
        <p class="mb-4">Check out my projects below &#11107;</p>
      </div>
    </div>
    <div class="d-flex justify-content-center bg-success rounded-bottom py-1">
      <div class="dropdown d-flex">
        <a href="" class="d-flex mx-2 contact-bar-link" role="button" data-bs-toggle="dropdown"
          ><img src="homepage/images/envelope-fill.svg"
        /></a>
        <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end py-1">
          <li>
            <a class="dropdown-item d-flex align-items-center" href="mailto:vlad0502vlader@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-envelope-plus"
                viewBox="0 0 16 16">
                <path
                  d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                <path
                  d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
              </svg>
              <span class="ms-2">Send Mail</span>
            </a>
          </li>
          <li>
            <button @click="copyEmailAddress" class="dropdown-item d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clipboard"
                viewBox="0 0 16 16">
                <path
                  d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                <path
                  d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" /></svg
              ><span class="ms-2">Copy Address</span>
            </button>
          </li>
        </ul>
      </div>
      <a target="_blank" href="https://github.com/AlienDance" class="d-flex mx-2 contact-bar-link"
        ><img src="homepage/images/github.svg"
      /></a>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const copyEmailAddress = () => {
      navigator.clipboard.writeText('vlad0502vlader@gmail.com')
    }

    return { copyEmailAddress }
  }
}
</script>

<style>
.contact-bar-link > img {
  width: 50px;
}
</style>
