<template>
  <div>
    <!-- Main modal -->
    <div
      id="authentication-modal"
      ref="modal"
      tabindex="-1"
      :aria-hidden="!show"
      :aria-modal="show"
      :role="show ? 'dialog' : undefined"
      class="transition-slide duration-300 top-[-36px] opacity-0 overflow-y-auto overflow-x-hidden fixed right-0 left-0 z-50 px-4 pb-4 pt-20 w-full h-modal justify-center md:h-full"
      :class="{'flex': show, 'hidden': !show}"
      @click="close"
    >
      <div
        class="relative w-full max-w-md h-fit"
        @click.stop
      >
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="authentication-modal"
            @click="close"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            /></svg>
          </button>
          <div class="py-6 px-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              {{ title }}
            </h3>

            <slot />
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="show"
      class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"
      @click="$emit('input', false)"
    />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: this.value,
    }
  },
  watch: {
    value(value) {
      if (value) {
        this.show = true

        setTimeout(() => {
          this.$refs.modal.classList.add('top-0', 'opacity-100')
          this.$refs.modal.classList.remove('top-[-36px]', 'opacity-0')
        }, 1)
      } else {
        this.$refs.modal.classList.add('top-[-36px]', 'opacity-0')
        this.$refs.modal.classList.remove('top-0', 'opacity-100')

        setTimeout(() => {
          this.show = false
        }, 300)
      }
    },
  },
  methods: {
    close() {
      this.$emit('input', false)
    },
  },
}
</script>

<style scoped>

</style>
