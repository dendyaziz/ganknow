<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <div class="grid md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 gap-4">
      <!-- Left sidebar -->
      <div class="xl:col-span-2 hidden xl:block">
        <Sidebar />
      </div>
      <!-- Main content -->
      <div class="md:col-span-4 lg:col-span-5 xl:col-span-5">
        <Nuxt />
      </div>
      <!-- Right sidebar -->
      <div class="md:col-span-2 lg:col-span-3 xl:col-span-2 hidden md:block">
        <div>Sidebar</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
  head() {
    return {
      htmlAttrs: {
        class: 'dark',
      },
      bodyAttrs: {
        class: 'antialiased text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900',
      },
    }
  },
}
</script>

<style scoped>

</style>
