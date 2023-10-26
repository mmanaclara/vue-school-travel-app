<template>
  <div class="bg-slate-900 flex min-h-full flex-1 flex-col justify-center px-6 py-8 pt-0 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 text-gray-200">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleLogin">
        <div>
          <label for="username" class="block text-sm font-medium leading-6 text-gray-200"
            >Username</label
          >
          <div class="mt-2">
            <input
              id="username"
              name="username"
              type="username"
              autocomplete="username"
              required
              class="block w-full rounded-md border-0 py-1.5 bg-slate-800 text-gray-400 shadow-sm ring-1 ring-inset ring-slate-800 px-2 placeholder:text-gray-400 outline-0 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="username"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-200"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              class="block w-full bg-slate-800 rounded-md px-2 border-0 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-slate-800 placeholder:text-gray-400 outline-0 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = () => {
  console.log('Auth user against API')
  window.user = username.value
  router.push({ name: 'signin' })
}
</script>
