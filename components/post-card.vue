<template>
  <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-4 ring-1 ring-slate-900/5 mb-4">
    <div class="flex flex-row">
      <!-- Avatar -->
      <img
        src="https://i.ibb.co/8bRSrjW/download-1.jpg"
        class="rounded-full h-min mr-4"
        alt="Avatar"
        width="48px"
        height="48px"
      >

      <div class="w-full">
        <!-- User name -->
        <div class="flex flex-row text-slate-900 dark:text-white items-center">
          <span class="font-medium">Jess no limit</span>

          <span class="text-red-500 ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 22 22"
              fill="currentColor"
            >
              <path
                d="M21.6274 10.8154L19.3258 8.19629L19.6466 4.73229L16.2414 3.96251L14.4587 0.958496L11.2517 2.32908L8.04464 0.958496L6.26191 3.95312L2.85679 4.71351L3.17749 8.1869L0.875977 10.8154L3.17749 13.4345L2.85679 16.9079L6.26191 17.6777L8.04464 20.6723L11.2517 19.2924L14.4587 20.6629L16.2414 17.6683L19.6466 16.8985L19.3258 13.4345L21.6274 10.8154ZM10.1564 14.5414C9.76608 14.931 9.13406 14.931 8.74369 14.5415L6.56495 12.3674C6.17918 11.9824 6.17959 11.3573 6.56587 10.9729C6.95049 10.5901 7.57234 10.5908 7.95613 10.9744L9.45008 12.4676L14.2735 7.65074C14.6574 7.26733 15.2792 7.2668 15.6638 7.64956C16.0502 8.03408 16.0506 8.65932 15.6647 9.04437L10.1564 14.5414Z"
              />
            </svg>
          </span>
        </div>
        <!-- time -->
        <small class="text-slate-500 dark:text-slate-400">{{ $moment(createdAt).fromNow() }}</small>
      </div>
    </div>
    <div class="text-slate-900 dark:text-white mt-4 text-sm">
      <h3 class="text-slate-900 dark:text-white mb-3 text-base font-bold tracking-tight">
        Ways To Repurpose Your Content
      </h3>
      <p class="mb-3">
        Tore out another page from my secret scrapbook about repurposing your content. Here are a few suggestions to increase the mileage of your older content through repurposing and distribution. You'll never know when your older content will go viral and open doors to new opportunities.
      </p>
      <p class="mb-3">
        Remember, each piece of content you create is like your baby. Give it a meaningful and purposeful life, not just an existence for a moment in time.
      </p>
      <p class="mb-3">
        As in life, always think about how to make the best out of anything and everything, regardless of any situation.
      </p>
      <p class="mb-3">Download a high res copy at <a
        href="https://drive.google.com/file/d/1e2Y4Yf9qAjWMTof2iEoQXRTCbUGlW7Uh/view?usp=share_link"
        target="_blank"
        rel="noopener noreferrer ugc"
      >https://drive.google.com/file/d/1e2Y4Yf9qAjWMTof2iEoQXRTCbUGlW7Uh/view?usp=share_link</a></p>
      <p class="mb-3">
        Ok. I shall stop here before I become a life coach or something...  Love you all. 😘
      </p>
      <p class="mb-3">
        Or get it for free at my Gank Shop.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
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
