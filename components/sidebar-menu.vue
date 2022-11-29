<template>
  <div class="h-[52px] hover:cursor-pointer rounded-md text-primary-500 hover:text-slate-500 text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center px-2.5">
    <slot name="icon" /> <span
      class="font-medium"
      :class="{'ml-2': $slots.icon}"
    >{{ title }}</span>
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
