<template>
  <div class="flex flex-row mb-3">
    <!-- Avatar -->
    <img
      :src="user.image_url"
      class="rounded-full h-min mr-3"
      alt="Avatar"
      width="36px"
      height="36px"
    >

    <div>
      <!-- Comment bubble -->
      <div class="bg-secondary-50 dark:bg-secondary-700 text-slate-900 dark:text-white px-3 py-2 rounded-bl-lg rounded-br-lg rounded-tr-lg">
        <!-- User name -->
        <div class="flex flex-row text-slate-900 dark:text-white items-center">
          <a
            href="#"
            class="font-bold text-sm hover:underline"
          >{{ user.name }}</a>

          <span
            v-if="user.is_verified"
            class="text-primary-500 ml-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 22 22"
              fill="currentColor"
            >
              <path
                d="M21.6274 10.8154L19.3258 8.19629L19.6466 4.73229L16.2414 3.96251L14.4587 0.958496L11.2517 2.32908L8.04464 0.958496L6.26191 3.95312L2.85679 4.71351L3.17749 8.1869L0.875977 10.8154L3.17749 13.4345L2.85679 16.9079L6.26191 17.6777L8.04464 20.6723L11.2517 19.2924L14.4587 20.6629L16.2414 17.6683L19.6466 16.8985L19.3258 13.4345L21.6274 10.8154ZM10.1564 14.5414C9.76608 14.931 9.13406 14.931 8.74369 14.5415L6.56495 12.3674C6.17918 11.9824 6.17959 11.3573 6.56587 10.9729C6.95049 10.5901 7.57234 10.5908 7.95613 10.9744L9.45008 12.4676L14.2735 7.65074C14.6574 7.26733 15.2792 7.2668 15.6638 7.64956C16.0502 8.03408 16.0506 8.65932 15.6647 9.04437L10.1564 14.5414Z"
              />
            </svg>
          </span>
        </div>

        <div>{{ comment }}</div>
      </div>

      <!-- Action -->
      <span>
        <!-- time -->
        <small class="text-slate-900 dark:text-white font-bold cursor-pointer mr-1 hover:underline">{{ $t('Reply') }}</small>
        <!-- time -->
        <small class="text-slate-500 dark:text-slate-400">{{ $moment(createdAt).fromNow() }}</small>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: '',
    },
    createdAt: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
