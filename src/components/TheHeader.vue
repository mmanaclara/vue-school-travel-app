<template>
  <header class="bg-slate-900">
    <nav
      class="mx-auto flex max-w-7xl gap-12 items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Your destination.</span>
          <img class="h-8 w-auto" src="/icon-frevo.svg" alt="" />
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
      <div v-for="menuItem in menuItems" :key="menuItem.id" class="hidden lg:flex lg:gap-x-12">
        <RouterLink
          :to="'/' + menuItem.name.toLocaleLowerCase()"
          class="text-base font-semibold leading-6 text-white transition opacity-70 hover:opacity-100"
          >{{ menuItem.name }}
        </RouterLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="https://github.com/mmanaclara"
          target="_blank"
          class="text-sm font-semibold hover:opacity-80 leading-6 text-white"
        >
          <img class="h-8 w-auto" src="/images/icon-github.png" alt="" title="My github profile" />
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuItems = ref([
  { id: 1, name: 'Recife' },
  { id: 2, name: 'Olinda' },
  { id: 3, name: 'Caruaru' },
  { id: 4, name: 'Fernando de Noronha' }
])
</script>
