<template>
  <li class="ml-6">
    <span class="flex absolute -left-4 -mt-1 justify-center items-center w-8 h-8 bg-blue-200 rounded-full dark:bg-blue-900 text-blue-600 dark:text-blue-400">
      <slot name="icon" />
    </span>
    <h3
      v-if="title"
      class="flex items-center mb-1 text-mg font-medium text-gray-900 dark:text-white"
    >
      {{ title }} <span
        v-if="badge"
        class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
      >{{ badge }}</span>
    </h3>
    <time
      v-if="time"
      class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
    >{{ time }}</time>
    <p
      v-if="description"
      class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
    >
      {{ description }}
    </p>
    <div
      v-if="ctaLabel"
      class="flex items-center"
    >
      <a
        href="#"
        class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      ><slot name="cta-icon" /> {{ ctaLabel }}</a>

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
      required: true,
    },
    time: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      required: true,
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
