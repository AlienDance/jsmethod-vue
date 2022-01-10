<template>
  <div
    id="carousel"
    class="carousel slide border-bottom border-light"
    data-bs-ride="carousel"
    data-bs-touch="true"
    data-bs-pause="false">
    <div class="carousel-inner rounded">
      <div class="carousel-item active" data-bs-interval="3000">
        <img src="landing-page/images/carousel/image3.jfif" class="d-block w-100" />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="landing-page/images/carousel/image4.jfif" class="d-block w-100" />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="landing-page/images/carousel/image2.jfif" class="d-block w-100" />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="landing-page/images/carousel/image5.jfif" class="d-block w-100" />
      </div>
    </div>
    <button
      class="carousel-control-prev d-none d-lg-flex justify-content-start ps-4"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next d-none d-lg-flex justify-content-end pe-4"
      type="button"
      data-bs-target="#carousel"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style>
#carousel {
  padding-top: 50px;
}

.carousel-item {
  transition: all 0.5s ease-in-out;
}
</style>
