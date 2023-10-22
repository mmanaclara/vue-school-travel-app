<template>
  <div class="bg-slate-900 h-full w-full">
    <div class="pt-6">
      <div
        class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:pb-16"
      >
        <section class="grid grid-cols-2 gap-8 border-b border-slate-700">
          <div class="mt-4 lg:row-span-3 lg:mt-0 h-[24rem]">
            <img
              class="h-full w-full object-cover object-center rounded-md opacity-80"
              :src="`/images/${destination.imageSrc}`"
              :alt="destination.name"
            />
          </div>
          <div class="py-10 lg:pb-16 lg:pr-8 lg:pt-6">
            <RouterLink
              to="/"
              class="w-fit flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-1 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none"
            >
              &larr; Back
            </RouterLink>
            <div class="lg:col-span-2">
              <h1 class="text-2xl font-semibold tracking-tight text-gray-200 mt-8 sm:text-3xl">
                {{ destination.name }}
              </h1>
            </div>
            <div>
              <h3 class="sr-only">Description</h3>

              <div class="space-y-6">
                <p class="text-base text-gray-400 leading-7 mt-6">
                  {{ destination.description }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="flex flex-col gap-8">
          <h2 class="text-lg font-semibold tracking-tight text-gray-200 mt-8 sm:text-2xl">
            Top experiences in {{ destination.name }}
          </h2>

          <div class="grid grid-cols-4 gap-4">
            <RouterLink
              :to="{ name: 'experience', params: { experienceSlug: experience.slug } }"
              v-for="experience in destination.experiences"
              :key="experience.slug"
            >
              <CardExperience :experience="experience" />
            </RouterLink>
          </div>
        </section>

        <section>
          <RouterView />
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import sourceDestinations from '@/destinations.json'
import { computed } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import CardExperience from '../components/CardExperience.vue'

const route = useRoute()
const destinationId = computed(() => parseInt(route.params.id))

const { destinations } = sourceDestinations
const destination = computed(() =>
  destinations.find((destination) => destination.id === destinationId.value)
)
</script>
