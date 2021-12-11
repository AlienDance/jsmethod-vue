<template>
  <div class="container-fluid container-md my-3 my-md-5">
    <div class="card">
      <div class="card-body">
        <img style="width: 150px" src="homepage/images/Kot.png" alt="" class="rounded-pill d-block mx-auto" />
        <h3 class="mt-2 lead text-center">Hi, my name is vlader. I'm coding some stuff here and there...</h3>
        <p class="lead text-center">
          I like web development, both back-end and front-end. In free time i'm usually learning these technologies:
        </p>
        <div class="container">
          <div class="row d-flex justify-content-center tech-bar align-items-center">
            <div class="col-md-3 d-flex justify-content-center justify-content-md-end my-2 my-md-0">
              <img
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Node.js"
                src="homepage/images/node-logo-black.svg"
                alt="" />
            </div>
            <div class="col-md-3 d-flex justify-content-center my-2 my-md-0">
              <img
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Bootstrap"
                src="homepage/images/bootstrap-logo.svg"
                alt="" />
            </div>
            <div class="col-md-3 d-flex justify-content-center justify-content-md-start my-2 my-md-0">
              <img
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="MongoDB"
                style="width: 150px"
                src="homepage/images/mongodb-logo.svg"
                alt="" />
            </div>
            <div class="col-md-3 d-flex justify-content-center justify-content-md-start my-2 my-md-0">
              <img
                data-bs-toggle="tooltip"
                data-bs-placement="bottom"
                title="Vue.js"
                style="width: 60px"
                src="homepage/images/vuejs-logo.svg"
                alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end contact-bar bg-success rounded-bottom">
        <a
          href=""
          class="mx-2 my-1"
          data-bs-toggle="popover"
          data-bs-placement="bottom"
          data-bs-trigger="focus"
          title="Not ready yet..."
          data-bs-content="Coming soon..."
          ><img src="homepage/images/envelope-fill.svg"
        /></a>
        <a target="_blank" href="https://github.com/AlienDance" class="mx-2 me-4 my-1"
          ><img src="homepage/images/github.svg"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
