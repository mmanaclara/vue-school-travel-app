<template>
  <header class="bg-slate-900">
    <nav
      class="mx-auto flex max-w-7xl gap-12 items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your destination.</span>
          <img class="h-8 w-auto" src="/images/earth-globe.png" alt="" />
        </a>
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
      <div class="hidden lg:flex lg:gap-x-12">
        <a
          href="#"
          class="text-base font-semibold leading-6 text-white transition opacity-50 hover:opacity-100"
          >Brazil</a
        >
        <a
          href="#"
          class="text-base font-semibold leading-6 text-white transition opacity-50 hover:opacity-100"
          >Panama</a
        >
        <a
          href="#"
          class="text-base font-semibold leading-6 text-white transition opacity-50 hover:opacity-100"
          >Hawaii</a
        >
        <a
          href="#"
          class="text-base font-semibold leading-6 text-white transition opacity-50 hover:opacity-100"
          >Jamaica</a
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-white"
          >View more destinations <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </nav>
  </header>
</template>
