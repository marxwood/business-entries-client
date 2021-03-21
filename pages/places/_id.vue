<template>
  <article class="text-gray-600 body-font relative">
    <div class="container lg:px-36 px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <Map latlong="46.232943,7.358963" />
      <section class="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <Header
          displayed-what="Casa Ferlin"
          displayed-where="Stampfenbachstrasse 38, 8006 Zürich"
        />
        <OpeningHours />
        <Footer :positive-recommendation="86" />
      </section>
    </div>
  </article>
</template>

<script>
import Map from '@/components/place/Map.vue'
import Header from '@/components/place/Header.vue'
import OpeningHours from '@/components/place/OpeningHours.vue'
import Footer from '@/components/place/Footer.vue'

export default {
  components: {
    Map,
    Header,
    OpeningHours,
    Footer
  }
}
</script>

<style>

</style>
