<template>
  <div class="h-48 rounded-md overflow-hidden relative">
    <img
      class="h-full w-full object-cover object-center opacity-80"
      :src="`/images/${experience.imageSrc}`"
      alt=""
    />
    <h3
      class="w-full bg-slate-800 py-2 px-4 absolute bottom-0 opacity-90 text-slate-300 text-md font-semibold"
    >
      {{ experience.name }}
    </h3>
  </div>
</template>

<script setup>
defineProps({
  experience: {
    type: Object,
    default: () => ({})
  }
})
</script>
