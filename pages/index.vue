<template>
  <div class="xl:max-w-[680px] mx-auto">
    <!-- Alert -->
    <div class="bg-yellow-500/10 hover:bg-yellow-500/20 hover:cursor-pointer rounded-lg pl-4 pr-6 py-4 mb-4 ring-1 ring-yellow-500/70 flex flex-row items-start">
      <!-- Icon -->
      <img
        src="~/assets/icons/info-circle-yellow.svg"
        alt="Alert icon"
        width="36px"
        class="mr-3"
      >
      <!-- Content -->
      <div class="text-slate-900 dark:text-white">
        <!-- Message -->
        <div class="mt-1.5 font-medium">
          {{ $t('Let\'s enable donations and start earning now!') }}
        </div>

        <!-- CTA -->
        <div class="flex mt-2 flex-row items-center font-bold">
          {{ $t('Enable now') }}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.92 11.62C17.8724 11.4972 17.801 11.3851 17.71 11.29L12.71 6.29C12.6168 6.19676 12.5061 6.1228 12.3842 6.07234C12.2624 6.02188 12.1319 5.99591 12 5.99591C11.7337 5.99591 11.4783 6.10169 11.29 6.29C11.1968 6.38324 11.1228 6.49393 11.0723 6.61575C11.0219 6.73757 10.9959 6.86814 10.9959 7C10.9959 7.2663 11.1017 7.52169 11.29 7.71L14.59 11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H14.59L11.29 16.29C11.1963 16.383 11.1219 16.4936 11.0711 16.6154C11.0203 16.7373 10.9942 16.868 10.9942 17C10.9942 17.132 11.0203 17.2627 11.0711 17.3846C11.1219 17.5064 11.1963 17.617 11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L17.71 12.71C17.801 12.6149 17.8724 12.5027 17.92 12.38C18.02 12.1365 18.02 11.8635 17.92 11.62Z"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Write post -->
    <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-4 ring-1 ring-slate-900/5 mb-4">
      <div class="flex flex-row">
        <!-- Avatar -->
        <img
          src="https://lh3.googleusercontent.com/a/ALm5wu3JFr_0RoSfdrMRjRigEcFEVXpv-oBMQsTtF4xqzIY=s96-c"
          class="rounded-full h-min mr-4"
          alt="Avatar"
          width="48px"
          height="48px"
        >

        <div class="w-full">
          <!-- Post message -->
          <textarea
            id="post"
            name="post"
            class="w-full bg-white dark:bg-slate-800 text-lg py-2 outline-none resize-none"
            :placeholder="$t('Share something with your supporters?')"
            rows="1"
            @input="growTextarea"
          />

          <!-- Availability-->
          <div class="flex flex-row items-center hover:cursor-pointer text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
            <div class="mr-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM4.3 14C4.1 13.3 4 12.7 4 12C4 11.3 4.1 10.7 4.3 10H6.2C6 11.3 6 12.7 6.2 14H4.3ZM5.1 16H6.5C6.7 16.9 7 17.8 7.5 18.6C6.5 17.9 5.7 17 5.1 16ZM6.5 8H5.1C5.7 7 6.5 6.1 7.5 5.4C7 6.2 6.7 7.1 6.5 8ZM11 19.7C9.8 18.8 8.9 17.5 8.6 16H11V19.7ZM11 14H8.1C8 13.3 8 12.7 8 12C8 11.3 8 10.7 8.1 10H11V14ZM11 8H8.6C8.9 6.5 9.8 5.2 11 4.3V8ZM18.9 8H17.5C17.3 7.1 17 6.2 16.5 5.4C17.5 6.1 18.3 7 18.9 8ZM13 4.3C14.2 5.2 15.1 6.5 15.4 8H13V4.3ZM13 19.7V16H15.4C15.1 17.5 14.2 18.8 13 19.7ZM15.9 14H13V10H15.9C16 11.3 16 12.7 15.9 14ZM16.6 18.6C17 17.8 17.3 16.9 17.6 16H19C18.3 17 17.5 17.9 16.6 18.6ZM17.9 14C18.1 12.7 18.1 11.3 17.9 10H19.8C20.2 11.3 20.2 12.7 19.8 14H17.9Z"
                />
              </svg>
            </div>
            <span class="font-medium">{{ $t('Free to public') }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Posts -->
    <post-card
      v-for="item in posts"
      :key="`post-${item.id}`"
      :user="item.user"
      :created-at="item.created_at"
      :content="item.content"
    />
  </div></template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          created_at: '2022-11-16T09:37:45.000000Z',
          user: {
            name: 'Jess no limit',
            is_verified: true,
            image_url: 'https://i.ibb.co/8bRSrjW/download-1.jpg',
          },
          content: '<h3 class="text-slate-900 dark:text-white mb-3 text-base font-bold tracking-tight">\n'
            + '        Ways To Repurpose Your Content\n'
            + '      </h3>\n'
            + '      <p class="mb-3">\n'
            + '        Tore out another page from my secret scrapbook about repurposing your content. Here are a few suggestions to increase the mileage of your older content through repurposing and distribution. You\'ll never know when your older content will go viral and open doors to new opportunities.\n'
            + '      </p>\n'
            + '      <p class="mb-3">\n'
            + '        Remember, each piece of content you create is like your baby. Give it a meaningful and purposeful life, not just an existence for a moment in time.\n'
            + '      </p>\n'
            + '      <p class="mb-3">\n'
            + '        As in life, always think about how to make the best out of anything and everything, regardless of any situation.\n'
            + '      </p>\n'
            + '      <p class="mb-3">Download a high res copy at: <a\n'
            + '        href="https://drive.google.com/file/d/1e2Y4Yf9qAjWMTof2iEoQXRTCbUGlW7Uh/view?usp=share_link"\n'
            + '        target="_blank"\n'
            + '        rel="noopener noreferrer ugc"\n'
            + '      >https://drive.google.com/file/d/1e2Y4Yf9qAjWMTof2iEoQXRTCbUGlW7Uh/view?usp=share_link</a></p>\n'
            + '      <p class="mb-3">\n'
            + '        Ok. I shall stop here before I become a life coach or something...  Love you all. 😘\n'
            + '      </p>\n'
            + '      <p class="mb-3">\n'
            + '        Or get it for free at my Gank Shop.\n'
            + '      </p>',
        },
      ],
    }
  },
  methods: {
    growTextarea(event) {
      // eslint-disable-next-line no-param-reassign
      event.target.style.height = '5px'
      // eslint-disable-next-line no-param-reassign
      event.target.style.height = `${event.target.scrollHeight}px`
    },
  },
}
</script>
