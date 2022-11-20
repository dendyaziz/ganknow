<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <div class="grid grid-cols-10 gap-4">
      <!-- Left sidebar -->
      <div class="col-span-2">
        <Sidebar />
      </div>
      <!-- Main content -->
      <div class="col-span-6">
        <Nuxt />
      </div>
      <!-- Right sidebar -->
      <div class="col-span-2">
        <div>Sidebar</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
  head () {
    return {
      htmlAttrs: {
        class: 'dark'
      },
      bodyAttrs: {
        class: 'antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900'
      }
    }
  }
}
</script>

<style scoped>

</style>
