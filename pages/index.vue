<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        Business Entries
      </h1>
      <div class="links">
        <!-- NOTE:
        There is a Tailwind issue with map height rendering when routed directly to component,
        so skip using <NuxtLink :to="`/places/${id}`" /> for the matter of this demo.
        -->
        <a
          v-for="(id, i) in places"
          :key="id"
          :href="`/places/${id}`"
          rel="noopener noreferrer"
          class="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded mr-5"
        >
          Place {{ i + 1 }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/logo/Logo'
import { placesGQL } from '@/gql/places'

export default {
  components: {
    Logo
  },
  async asyncData ({ $axios }) {
    const { data } = await $axios({
      method: 'get',
      params: {
        query: placesGQL
      }
    })
    return {
      places: data.data.places
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
