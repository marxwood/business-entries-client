<template>
  <header>
    <span class="text-sm title-font text-gray-500 tracking-widest">
      PLACE
    </span>
    <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
      {{ displayedWhat }}
    </h1>
    <span>{{ displayedWhere }}</span>
  </header>
</template>
<script>
export default {
  props: {
    displayedWhat: {
      type: String,
      required: true
    },
    displayedWhere: {
      type: String,
      required: true
    }
  }
}
</script>
