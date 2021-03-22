<template>
  <article class="text-gray-600 body-font relative">
    <div class="container lg:px-36 px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <Map :latlong="latlon" />
      <section class="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <Header
          :displayed-what="place.displayed_what"
          :displayed-where="place.displayed_where"
        />
        <OpeningHours :opening-hours="place.opening_hours" />
        <Footer
          :positive-recommendation="place.place_feedback_summary.positive_recommendation_percentage"
        />
      </section>
    </div>
  </article>
</template>

<script>
import Map from '@/components/place/Map.vue'
import Header from '@/components/place/Header.vue'
import OpeningHours from '@/components/place/openingHours/OpeningHours.vue'
import Footer from '@/components/place/Footer.vue'
import placeGQL from '@/gql/place'

export default {
  components: {
    Map,
    Header,
    OpeningHours,
    Footer
  },
  async asyncData ({ $axios, params }) {
    const { id } = params

    const { data } = await $axios({
      method: 'get',
      params: {
        query: placeGQL(id)
      }
    })
    return {
      place: data.data.place
    }
  },
  computed: {
    latlon () {
      return this.place.addresses[0].where.geography.location.latlon
    }
  }
}
</script>

<style>

</style>
