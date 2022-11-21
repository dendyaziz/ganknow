<template>
  <div class="max-w-[680px] mx-auto">
    <!-- Alert -->
    <div class="bg-yellow-500/10 hover:bg-yellow-500/20 hover:cursor-pointer md:rounded-lg pl-4 pr-6 py-4 mb-2 md:mb-4 ring-1 ring-yellow-500/70 flex flex-row items-start">
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
        <div class="mt-1 sm:mt-1.5 font-medium">
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
    <PostForm />

    <!-- Posts -->
    <PostCard
      v-for="item in posts"
      :key="`post-${item.id}`"
      :post-id="item.user"
      :user="item.user"
      :created-at="item.created_at"
      :content="item.content"
      :image-url="item.image_url"
      :comments="item.comments"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 2,
          created_at: '2022-11-14T09:37:45.000000Z',
          image_url: 'https://i.ibb.co/7Kf3yjs/Screenshot-2022-11-21-at-16-55-51.png',
          user: {
            name: 'Paddie',
            is_verified: true,
            image_url: 'https://i.ibb.co/qnH8k8V/paddie-avatar.png',
          },
          content: '<h3 class="text-slate-900 dark:text-white mb-3 text-base font-bold tracking-tight">\n'
            + '        Gank Creator Referral Program\n'
            + '      </h3>\n'
            + '      <p class="mb-3">\n'
            + '        Hiya 😻FAMssss~ It\'s me Paddie again~ 💖🤩\n'
            + '      </p>\n'
            + '      <p class="mb-3">\n'
            + '        Do you want to earn more from your Gank profile? You can now earn more by just sharing your referral link!\n'
            + '      </p>\n'
            + '      <p class="mb-3">\n'
            + '        The Gank’s Referral Program allows existing Gank creators to refer other content creators to Gank. When a fellow content creator uses your unique referral link to sign up to Gank, you will be awarded $2 per referral once they (the referred) earns their first dollar on Gank. This is applicable to new accounts created through your unique referral link only.\n'
            + '      </p>\n'
            + '      <p class="mb-3"><a\n'
            + '        href="https://ganknow.com/manage/referral"\n'
            + '        target="_blank"\n'
            + '        rel="noopener noreferrer ugc"\n'
            + '      >https://ganknow.com/manage/referral</a></p>'
            + '      <p>Click below to learn more! (FAQs & details) </p>'
            + '      <p><a\n'
            + '        href="https://ganknow.com/blog/gank-creator-referral-program/"\n'
            + '        target="_blank"\n'
            + '        rel="noopener noreferrer ugc"\n'
            + '      >https://ganknow.com/blog/gank-creator-referral-program/</a></p>\n',
          comments: [
            {
              id: 2,
              comment: 'I got $6 without even creating any content.',
              created_at: '2022-11-16T09:37:45.000000Z',
              user: {
                name: 'Dendy Armandiaz (You)',
                is_verified: false,
                image_url: 'https://i.ibb.co/d7HBdMF/avatar-dendy.jpg',
              },
            },
            {
              id: 1,
              comment: 'Definitely will try it today.',
              created_at: '2022-11-15T09:37:45.000000Z',
              user: {
                name: 'Jess no Limit',
                is_verified: true,
                image_url: 'https://i.ibb.co/8bRSrjW/download-1.jpg',
              },
            },
          ],
        },
        {
          id: 1,
          created_at: '2022-11-10T09:37:45.000000Z',
          image_url: 'https://i.ibb.co/x82X9F7/Screenshot-2022-11-21-at-21-37-17.png',
          user: {
            name: 'Paddie',
            is_verified: true,
            image_url: 'https://i.ibb.co/qnH8k8V/paddie-avatar.png',
          },
          content: '<h3 class="text-slate-900 dark:text-white mb-3 text-base font-bold tracking-tight">\n'
            + '        Toxic Gaming: How To Deal With Toxic Gamers\n'
            + '      </h3>\n'
            + '      <p class="mb-3">\n'
            + '        Don\'t let a toxic gamer get in the way of you playing your favorite game. 😵\n'
            + '      </p>\n'
            + '      <p>Click the link below to know more: </p>'
            + '      <p><a\n'
            + '        href="https://ganknow.com/3OmrXQg"\n'
            + '        target="_blank"\n'
            + '        rel="noopener noreferrer ugc"\n'
            + '      >https://ganknow.com/3OmrXQg</a></p>\n',
          comments: [
            {
              id: 1,
              comment: 'Love it!',
              created_at: '2022-11-12T09:37:45.000000Z',
              user: {
                name: 'Jess no Limit',
                is_verified: true,
                image_url: 'https://i.ibb.co/8bRSrjW/download-1.jpg',
              },
            },
          ],
        },
      ],
    }
  },
}
</script>
