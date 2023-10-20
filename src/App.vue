<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <main class="h-screen flex flex-col">
    <header>
      <TheHeader />
    </header>
    <div class="flex-1">
      <RouterView />
    </div>
  </main>
</template>

<style src="./assets/tailwind.css"></style>
