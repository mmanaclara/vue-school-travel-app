<template>
  <div class="bg-slate-900 h-full w-full">
    <div class="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-bold tracking-tight text-slate-100">
        Popular destinations in Pernambuco
      </h2>

      <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <RouterLink
          v-for="destination in destinations"
          :key="destination.id"
          :to="{ name: 'destination', params: { id: destination.id, slug: destination.slug } }"
          class="group relative"
        >
          <CardCity :destination="destination" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import sourceDestinations from '@/destinations.json'
import CardCity from '../components/CardCity.vue'

const { destinations } = sourceDestinations
</script>
