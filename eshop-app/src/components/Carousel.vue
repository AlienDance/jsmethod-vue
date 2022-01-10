<template>
  <div id="carouselExampleControls" class="carousel slide d-none justify-content-center mb-2" data-bs-ride="carousel">
    <div class="carousel-inner w-50">
      <div class="carousel-item active" data-bs-interval="3000">
        <img src="/eshop-app/images/carousel/phone.png" class="mx-auto d-block" alt="..." />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="/eshop-app/images/carousel/headphones.png" class="mx-auto d-block" alt="..." />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img src="/eshop-app/images/carousel/mouse.png" class="mx-auto d-block" alt="..." />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style>
.carousel-item > img {
  height: 20rem;
  width: fit-content;
  image-rendering: -webkit-optimize-contrast;
}

.carousel-item {
  transition: all 0.4s ease-out;
}
</style>
