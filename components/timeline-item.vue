<template>
  <li class="ml-6">
    <span class="flex absolute -left-4 -mt-1 justify-center items-center w-8 h-8 rounded-full bg-primary-500 text-white">
      <slot name="icon" />
    </span>
    <h3
      v-if="title"
      class="flex items-center mb-1 text-mg font-medium text-slate-900 dark:text-white"
    >
      {{ title }} <span
        v-if="badge"
        class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
      >{{ badge }}</span>
    </h3>
    <time
      v-if="time"
      class="block mb-2 text-sm font-normal leading-none text-slate-400 dark:text-slate-500"
    >{{ time }}</time>
    <p
      v-if="description"
      class="mb-4 text-base font-normal text-slate-500 dark:text-slate-400"
    >
      {{ description }}
    </p>
    <div
      v-if="ctaLabel"
      class="flex items-center"
    >
      <button class="inline-flex items-center py-2 px-4 text-sm font-medium bg-white rounded-lg border border-slate-200 hover:bg-slate-100 hover:text-slate-900 focus:z-10 focus:ring-4 focus:outline-none focus:ring-slate-200 focus:text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-700 dark:focus:ring-slate-700">
        <slot name="cta-icon" /> {{ ctaLabel }}
      </button>

      <!-- Skip button -->
      <span class="hover:text-primary-500 text-sm font-medium cursor-pointer mr-1 hover:underline ml-3">{{ $t('Skip') }}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    badge: {
      type: String,
      default: '',
    },
    time: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    ctaLabel: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>

</style>
