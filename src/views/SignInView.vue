<template>
  <div class="bg-slate-900 h-full w-full">
    <div class="pt-6">
      <div class="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:pb-2">
        <div class="flex gap-1">
          <nav v-for="breadcrumb in breadcrumbs" :key="breadcrumb.name">
            <p class="text-sm text-gray-400 font-medium">{{ breadcrumb.label }}</p>
          </nav>
        </div>
        <div class="grid grid-cols-2 gap-8 mt-4">
          <div class="mt-4 lg:row-span-3 lg:mt-0 h-[24rem]">
            <img
              class="h-full w-full object-cover object-center rounded-md opacity-80"
              src="/images/welcome.jpg"
              alt=""
            />
          </div>
          <div class="lg:pr-8">
            <div class="lg:col-span-2">
              <h1 class="text-2xl font-semibold tracking-tight text-gray-200 sm:text-3xl">
                Greetings, {{ username }}!
              </h1>
            </div>
            <div class="flex gap-4">
              <RouterLink
                :to="{ name: 'invoices' }"
                class="w-fit flex mt-8 items-center justify-center rounded-md border border-white px-4 py-1 text-base font-medium text-white hover:text-white hover:bg-indigo-600 hover:border-indigo-600 focus:outline-none"
              >
                Go to Invoices
              </RouterLink>
              <button
                type="button"
                class="w-fit flex mt-8 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-1 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none"
                @click="handleLogout"
              >
                &larr; Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const username = ref(window.user)

const route = useRoute()
const router = useRouter()

const breadcrumbs = route.meta.breadcrumbs
// const props = defineProps({
//   breadcrumbs: {
//     type: Array,
//     default: () => []
//   }
// })

// console.log('Hey', props.breadcrumbs)

const handleLogout = () => {
  window.user = null
  router.push({ name: 'home' })
}
</script>

<style scoped></style>
