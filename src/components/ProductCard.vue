<template>
  <div
    class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-slate-800 lg:aspect-none group-hover:opacity-75 lg:h-80"
  >
    <img
      :src="country.imageSrc"
      :alt="country.name"
      class="h-full w-full object-cover object-center lg:h-full lg:w-full"
    />
  </div>
  <div class="mt-4 flex justify-between">
    <div>
      <h3 class="text-lg font-medium text-slate-100">{{ country.name }}</h3>
    </div>
  </div>
</template>

<script setup>
defineProps({
  country: {
    type: Object,
    default: () => ({})
  }
})
</script>
