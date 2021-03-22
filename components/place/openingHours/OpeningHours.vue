<template>
  <div class="bg-gray-100 mt-6 flex flex-col px-2 pb-2 ">
    <h2 class="hidden">
      Opening Hours
    </h2>
    <DayRange v-for="range in ranges" :key="range.from" :range="range" data-test-dayrange />
  </div>
</template>
<script>
import reducer from './reducer'
import DayRange from './dayRange/DayRange.vue'

export default {
  components: {
    DayRange
  },
  props: {
    openingHours: {
      type: Object,
      required: true
    }
  },
  computed: {
    ranges () {
      return reducer(this.openingHours.days)
    }
  }
}
</script>
