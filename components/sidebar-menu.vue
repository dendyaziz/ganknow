<template>
  <div class="transition-spacing h-[52px] hover:cursor-pointer rounded-md text-slate-700 hover:text-slate-900 text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center px-2.5 hover:pl-4">
    <slot name="icon" /> <span class="font-medium ml-3">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
