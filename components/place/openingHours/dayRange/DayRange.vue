<template>
  <div class="flex pt-2 h-full">
    <svg
      fill="none"
      :stroke="range.hours[0] === 'closed' ? 'silver' : 'currentColor'"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="3"
      class="text-green-500 w-6 h-6 flex-shrink-0 mr-4"
      viewBox="0 0 24 24"
    >
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
    <div class="title-font font-medium capitalize" data-test-days>
      <span>{{ range.from }}</span>
      <span v-if="range.to"> - {{ range.to }} </span>
    </div>
    <div class="ml-auto">
      <div
        v-for="(hourRange, i) in range.hours"
        :key="range.from + range.to + hourRange.start"
        :class="i > 0 ? 'mt-2' : ''"
      >
        <span v-if="hourRange === 'closed'" data-test-closed>Closed</span>
        <span v-else data-test-hours>{{ hourRange.start }} - {{ hourRange.end }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    range: {
      type: Object,
      required: true
    }
  }
}
</script>
