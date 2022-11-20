<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <!-- Main content -->
    <Nuxt />
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
