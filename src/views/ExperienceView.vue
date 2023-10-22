<template>
  <section class="bg-slate-900 h-full w-full">
    <div class="pt-6">
      <div class="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:pb-2">
        <div class="grid grid-cols-2 gap-8">
          <div class="mt-4 lg:row-span-3 lg:mt-0 h-[24rem]">
            <img
              class="h-full w-full object-cover object-center rounded-md opacity-80"
              :src="`/images/${experience.imageSrc}`"
              :alt="experience.name"
            />
          </div>
          <div class="py-2 lg:pr-8 lg:pt-6">
            <ButtonGoBack />
            <div class="lg:col-span-2">
              <h1 class="text-2xl font-semibold tracking-tight text-gray-200 mt-8 sm:text-3xl">
                {{ experience.name }}
              </h1>
            </div>
            <div>
              <h3 class="sr-only">Description</h3>

              <div class="space-y-6">
                <p class="text-base text-gray-400 leading-7 mt-6">
                  {{ experience.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import sourceDestinations from '@/destinations.json'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ButtonGoBack from '@/components/ButtonGoBack.vue'

const { experienceSlug } = defineProps({
  experienceSlug: {
    type: String,
    required: true
  }
})

const route = useRoute()
const destinationId = computed(() => parseInt(route.params.id))
const { destinations } = sourceDestinations

const destination = computed(() =>
  destinations.find((destination) => destination.id === destinationId.value)
)

const experience = computed(() =>
  destination.value.experiences.find((experience) => experience.slug === experienceSlug)
)
</script>
