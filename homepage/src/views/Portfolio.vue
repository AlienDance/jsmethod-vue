<template>
  <div class="container px-4 py-5">
    <InfoCard />
    <div class="text-center lead mt-4">
      <p class="fs-2">My Projects</p>
      <div class="text-center fs-4">
        <div
          v-for="project in projects"
          :key="project.title"
          class="portfolio-project-card border border-light rounded row py-2 mt-3">
          <div class="col-12 col-lg-6 d-flex flex-column justify-content-center">
            <p class="fw-bolder">
              <span>{{ project.title }}</span>
              <span class="d-block d-lg-inline">
                (<a target="_blank" class="text-decoration-none portfolio-link" :href="project.link">Open</a> |
                <a target="_blank" class="text-decoration-none portfolio-link" :href="project.codeLink">Code</a>)
              </span>
            </p>
            <ul class="list-unstyled fs-5">
              <li v-for="feature in project.features" :key="feature" class="mb-1">{{ feature }}</li>
            </ul>
            <div class="d-flex justify-content-center align-items-center mb-2">
              <img
                v-for="tool in project.tools"
                :key="tool"
                style="height: 28px"
                class="mx-1"
                :src="`/homepage/images/${tool}`"
                alt="" />
            </div>
          </div>
          <div class="col-12 col-lg-6 d-flex align-items-center">
            <img :src="project.image" class="w-100 border border-dark portfolio-image rounded" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoCard from '@/components/InfoCard.vue'

export default {
  components: { InfoCard },
  setup() {
    const projects = [
      {
        title: 'Landing page',
        link: '/landing',
        codeLink: 'https://github.com/AlienDance/jsmethod-vue/tree/master/landing-page',
        image: 'homepage/images/Screenshot2.png',
        description: 'A landing page website.',
        features: ['Scrollspy Navbar', 'Image Carousel', 'Lightbox Gallery', 'Responsive Design'],
        tools: ['node-logo-white.svg', 'vuejs-logo.svg', 'bootstrap-logo.svg']
      },
      {
        title: 'E-commerce store',
        link: '/eshop',
        codeLink: 'https://github.com/AlienDance/jsmethod-vue/tree/master/eshop-app',
        image: 'homepage/images/Screenshot.png',
        description: 'E-commerce web-app for a local store.',
        features: [
          'Multiple item categories',
          'Cart System',
          'Order Managment System',
          'Single Page Application',
          'Responsive Design'
        ],
        tools: ['node-logo-white.svg', 'vuejs-logo.svg', 'bootstrap-logo.svg', 'mongodb-logo.svg']
      }
    ]

    return { projects }
  }
}
</script>

<style>
.portfolio-image {
  image-rendering: -webkit-optimize-contrast !important;
  /* image-rendering: pixelated !important; */
}

.portfolio-link {
  color: rgb(44, 126, 250);
}

.portfolio-link:hover {
  border-bottom: solid 1px;
}

.portfolio-about-card,
.portfolio-project-card {
  background-color: #2e2e2e;
  color: #f8f9fa;
}
</style>
