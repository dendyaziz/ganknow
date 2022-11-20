<template>
  <div class="xl:max-w-[680px] mx-auto">
    <!-- Alert -->
    <div class="bg-yellow-500/10 hover:bg-yellow-500/20 hover:cursor-pointer rounded-lg pl-4 pr-6 py-4 mb-4 ring-1 ring-yellow-500/70 shadow-xl flex flex-row items-center">
      <!-- Icon -->
      <img
        src="~/assets/icons/info-circle-yellow.svg"
        alt="Alert icon"
        width="36px"
        class="mr-3"
      >
      <!-- Message -->
      <div class="font-medium">
        {{ $t('Let\'s enable donations and start earning now!') }}
      </div>
    </div>

    <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <h3 class="text-slate-900 dark:text-white text-base font-medium tracking-tight">
        Title
      </h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        Subtitle
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>
