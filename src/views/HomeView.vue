<script setup>
// import ProductCard from '../components/ProductCard.vue'
</script>

<template>
  <div class="bg-slate-900 h-full w-full">
    <div class="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-slate-100">All destinations</h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="country in countries" :key="country.id" class="group relative">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-slate-800 lg:aspect-none group-hover:opacity-75 lg:h-80"
          >
            <img
              :src="country.imageSrc"
              :alt="country.imageAlt"
              class="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-lg font-medium text-slate-100">{{ country.name }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const countries = [
  {
    id: 1,
    name: 'Brazil',
    imageSrc: '/images/brazil.jpg',
    imageAlt: "Front of men's Basic Tee in black."
  },
  {
    id: 2,
    name: 'Panama',
    imageSrc: '/images/panama.jpg',
    imageAlt: "Front of men's Basic Tee in black."
  },
  {
    id: 3,
    name: 'Hawaii',
    imageSrc: '/images/hawaii.jpg',
    imageAlt: "Front of men's Basic Tee in black."
  },
  {
    id: 4,
    name: 'Jamaica',
    imageSrc: '/images/jamaica.jpg',
    imageAlt: "Front of men's Basic Tee in black."
  }
  // More products...
]
</script>
