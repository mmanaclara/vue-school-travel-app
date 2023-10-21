<template>
  <div class="bg-slate-900 h-full w-full">
    <div class="pt-6">
      <div
        class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:pb-16"
      >
        <div class="grid grid-cols-2 gap-8 border-b border-slate-700">
          <div class="mt-4 lg:row-span-3 lg:mt-0 h-[24rem]">
            <img
              class="h-full w-full object-cover object-center rounded-md opacity-80"
              src="/images/recife.jpg"
              alt=""
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
                Recife
              </h1>
            </div>
            <div>
              <h3 class="sr-only">Description</h3>

              <div class="space-y-6">
                <p class="text-base text-gray-400 leading-7 mt-6">
                  Recife is the fourth-largest urban area in Brazil with 4,054,866 inhabitants, the
                  largest urban area of the North/Northeast Regions, and the capital and largest
                  city of the state of Pernambuco in the northeast corner of South America. The
                  population of the city proper was 1,653,461 in 2020. The city is located at the
                  confluence of the Beberibe and Capibaribe rivers before they flow into the South
                  Atlantic Ocean. It is a major port on the Atlantic. Its name is an allusion to the
                  stone reefs that are present by the city's shores.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-8">
          <h2 class="text-lg font-semibold tracking-tight text-gray-200 mt-8 sm:text-2xl">
            Top experiences in Brazil
          </h2>

          <div class="grid grid-cols-4 gap-4">
            <div class="h-48 rounded-md overflow-hidden relative">
              <img
                class="h-full w-full object-cover object-center opacity-80"
                src="/images/recife.jpg"
                alt=""
              />
              <h3
                class="w-full bg-slate-800 py-2 px-4 absolute bottom-0 opacity-90 text-slate-300 text-md font-semibold"
              >
                Porto
              </h3>
            </div>
            <div class="h-48 rounded-md overflow-hidden relative">
              <img
                class="h-full w-full object-cover object-center opacity-80"
                src="/images/recife.jpg"
                alt=""
              />
              <h3
                class="w-full bg-slate-800 py-2 px-4 absolute bottom-0 opacity-90 text-slate-300 text-md font-semibold"
              >
                Porto
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- // Recife
Recife is the fourth-largest urban area in Brazil with 4,054,866 inhabitants, the
largest urban area of the North/Northeast Regions, and the capital and largest
city of the state of Pernambuco in the northeast corner of South America. The
population of the city proper was 1,653,461 in 2020. The city is located at the
confluence of the Beberibe and Capibaribe rivers before they flow into the South
Atlantic Ocean. It is a major port on the Atlantic. Its name is an allusion to the
stone reefs that are present by the city's shores. -->
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
