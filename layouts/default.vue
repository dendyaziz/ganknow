<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <div class="grid md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-11 2xl:grid-cols-9 gap-4 mt-[61px] md:mx-4">
      <!-- Left sidebar -->
      <div class="xl:col-span-3 2xl:col-span-2 hidden xl:block sm:px-2 pt-2">
        <Sidebar class="sticky top-[77px]" />
      </div>
      <!-- Main content -->
      <div class="md:col-span-4 lg:col-span-5 xl:col-span-5 2xl:col-span-5 pt-2 md:pt-4">
        <Nuxt />
      </div>
      <!-- Right sidebar -->
      <div class="md:col-span-3 lg:col-span-3 xl:col-span-3 2xl:col-span-2 pt-2 md:pt-4 hidden md:block">
        <Suggestion class="sticky top-[77px]" />
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { mapState } from 'vuex'

export default {
  name: 'Default',
  head() {
    return {
      htmlAttrs: {
        class: this.isDark ? 'dark' : undefined,
      },
      bodyAttrs: {
        class: 'antialiased text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-850 dark:md:bg-slate-900',
      },
    }
  },
  computed: {
    ...mapState('theme', ['isDark']),
  },
}
</script>

<style scoped>

</style>
