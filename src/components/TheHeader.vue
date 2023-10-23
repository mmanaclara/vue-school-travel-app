<template>
  <header class="bg-slate-900">
    <nav
      class="mx-auto flex max-w-7xl gap-12 items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your destination.</span>
          <img
            class="h-8 w-auto opacity-80 transition-opacity hover:opacity-100"
            src="/images/icon-frevo.svg"
            alt="Frevo umbrella icon"
            title="Frevo umbrella icon"
          />
        </RouterLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        >
          <span class="sr-only">Open main menu</span>
          <img class="h-6 w-auto" src="/images/icon-menu.png" alt="" />
        </button>
      </div>
      <div
        v-for="destination in destinations"
        :key="destination.id"
        class="hidden lg:flex lg:gap-x-12"
      >
        <RouterLink
          :to="{ name: 'destination', params: { id: destination.id, slug: destination.slug } }"
          class="text-base font-semibold leading-6 text-white transition opacity-70 hover:opacity-100"
          >{{ destination.name }}
        </RouterLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="https://github.com/mmanaclara"
          target="_blank"
          class="text-sm font-semibold opacity-80 transition-opacity hover:opacity-100 leading-6 text-white"
        >
          <img class="h-8 w-auto" src="/images/icon-github.png" alt="" title="My github profile" />
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import sourceDestinations from '@/destinations.json'

const { destinations } = sourceDestinations
</script>

<style scoped>
.active-link {
  opacity: 1;
}
</style>
