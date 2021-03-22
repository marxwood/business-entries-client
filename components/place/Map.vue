<template>
  <div class="lg:w-1/2 md:w-1/2 w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
    <iframe
      width="100%"
      height="100%"
      class="absolute inset-0"
      frameborder="0"
      title="map"
      marginheight="0"
      marginwidth="0"
      scrolling="no"
      :src="`https://maps.google.com/maps?q=${latlong}&z=14&output=embed`"
      style="filter: grayscale(1) contrast(1.2) opacity(0.8);"
    />
  </div>
</template>
<script>
export default {
  props: {
    latlong: {
      type: String,
      required: true
    }
  }
}
</script>
