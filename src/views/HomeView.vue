<script setup>
import ProductCard from '../components/ProductCard.vue'
</script>

<template>
  <div class="bg-slate-900 h-full w-full">
    <div class="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-slate-100">
        Popular destinations in Pernambuco
      </h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="country in countries" :key="country.id" class="group relative">
          <ProductCard :country="country" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const countries = [
  {
    id: 1,
    name: 'Recife',
    imageSrc: '/images/recife.jpg'
  },
  {
    id: 2,
    name: 'Olinda',
    imageSrc: '/images/olinda.jpg'
  },
  {
    id: 3,
    name: 'Caruaru',
    imageSrc: '/images/caruaru.jpg'
  },
  {
    id: 4,
    name: 'Fernando de Noronha',
    imageSrc: '/images/fernando-de-noronha.jpg'
  }
]
</script>
