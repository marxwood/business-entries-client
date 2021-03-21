<template>
  <div class="bg-gray-100 mt-6 flex flex-col px-2 pb-2 ">
    <h2 class="hidden">
      Opening Hours
    </h2>
    <DayRange v-for="range in ranges" :key="range.from" :range="range" />
    <!-- <div class="flex pt-2 h-full">
      <svg
        fill="none"
        stroke="silver"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
        class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
        viewBox="0 0 24 24"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
      <span class="title-font font-medium capitalize">monday</span>
      <span class="ml-auto">Closed</span>
    </div>
    <div class="flex pt-2 h-full">
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
        class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
        viewBox="0 0 24 24"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
      <div class="title-font font-medium capitalize">
        tuesday - friday
      </div>
      <div class="ml-auto">
        <div>11:30 - 15:00</div>
        <div>11:30 - 15:00</div>
      </div>
    </div>
    <div class="flex pt-2 h-full">
      <svg
        fill="none"
        stroke="silver"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
        class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
        viewBox="0 0 24 24"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
      <span class="title-font font-medium">Saturday</span>
      <span class="ml-auto">Closed</span>
    </div>
    <div class="flex pt-2 h-full">
      <svg
        fill="none"
        stroke="silver"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="3"
        class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
        viewBox="0 0 24 24"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
      <span class="title-font font-medium">Sunday</span>
      <span class="ml-auto">Closed</span>
    </div> -->
  </div>
</template>
<script>
import DayRange from './DayRange.vue'

export default {
  components: {
    DayRange
  },
  data: () => ({
    ranges: [
      { from: 'monday', to: undefined, hours: ['closed'] },
      { from: 'tuesday', to: 'thursday', hours: [{ start: '11:30', end: '15:00', type: 'OPEN' }, { start: '18:30', end: '00:00', type: 'OPEN' }] },
      { from: 'friday', to: 'saturday', hours: [{ start: '18:00', end: '00:00', type: 'OPEN' }] },
      { from: 'sunday', to: undefined, hours: [{ start: '11:30', end: '15:00', type: 'OPEN' }] }
    ]
  })
}
</script>
