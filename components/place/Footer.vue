<template>
  <footer class="flex border-t-2 py-4 border-gray-100 mt-6">
    <span class="title-font font-medium text-2xl text-gray-900">{{ positiveRecommendation }}%</span>
    <button class="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
      Visit
    </button>
    <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
      <svg
        fill="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    </button>
  </footer>
</template>
<script>
export default {
  props: {
    positiveRecommendation: {
      type: Number,
      required: true
    }
  }
}
</script>
