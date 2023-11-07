<template>
  <div class="md:max-w-[680px] mx-auto">
    <!-- Alert -->
    <Alert
      :message="$t('Let\'s enable donations and start earning now!')"
      :cta-label="$t('Enable now')"
    />

    <!-- Write post -->
    <PostForm />

    <!-- Posts -->
    <PostCard
      v-for="item in posts"
      :key="`post-${item.id}`"
      :user="item.user"
      :created-at="item.created_at"
      :title="item.title"
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
      posts: [],
    }
  },
  mounted() {
    this.loadFeed()
  },
  methods: {
    async loadFeed() {
      const response = await this.$axios.get('https://api-staging.gamepal.gg/v1/posts?author=18439b9e-3d73-437c-8e94-dddb41ab6271&perPage=20&page=1', {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
          authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkRGV2aWNlIjoiTW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTVfNykgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzExOC4wLjAuMCBTYWZhcmkvNTM3LjM2IiwiYXV0aG9yaXplZElwdjQiOiIxNzIuNjguMTUzLjE0NiwgMTI3LjAuMC4xIiwiZXhwIjoxNzMwODY4MDcxLCJleHBpcmVkQXQiOiIyMDI0LTExLTA2VDA0OjQxOjExLjgxMjEyNjIxNVoiLCJpc0xvbmdMaXZlIjp0cnVlLCJsYXN0RW1haWxVcGRhdGUiOjE2NzU3NTU5MDksImxhc3RQYXNzd29yZFVwZGF0ZSI6MTY3NzA1MTUxNiwicm9sZSI6InVzZXJzLWhYS2NwNS1IODZ5aWQiLCJ0b2tlbklEIjoiZWNiNTk3YjctMDFkNy00YjFjLWFlMTEtY2VkMjE1NWM3OTI4IiwidXNlcklEIjoiNzQ1YWMxZjEtODU4MS00NTQwLWIxOTItZjI4Y2QyYzAxM2UyIn0.srL-NYT3bBOczsXBQmUYxgX22ord2De1-i4Sbnvq2AE',
          'sec-ch-ua': '"Chromium";v="118", "Google Chrome";v="118", "Not=A?Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
        },
        referrer: 'https://staging.gamepal.gg/',
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: null,
        method: 'GET',
        mode: 'cors',
        credentials: 'include',
      })

      let { data } = response.data

      data = data.map(item => ({
        ...item,
        user: {
          name: item.authorUser.nickname,
          username: item.authorUser.nickname,
          is_verified: true,
          image_url: item.authorUser.avatar,
        },
        created_at: item.createdAt,
        image_url: item.postMedia && item.postMedia.length
          ? item.postMedia[0].url
          : null,
        comments: [
          {
            id: 2,
            comment: 'I got $6 without even creating any content.',
            created_at: '2022-11-16T09:37:45.000000Z',
            user: {
              name: 'Dendy Armandiaz (You)',
              username: 'dendyaziz',
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
              username: 'jessnolimit',
              is_verified: true,
              image_url: 'https://i.ibb.co/8bRSrjW/download-1.jpg',
            },
          },
        ],
      }))

      data.push(...[{
        id: 2,
        created_at: '2022-11-14T09:37:45.000000Z',
        image_url: 'https://i.ibb.co/G3QFVjP/Screenshot-2022-11-21-at-16-55-51.jpg',
        user: {
          name: 'Paddie',
          username: 'paddie',
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
              username: 'dendyaziz',
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
              username: 'jessnolimit',
              is_verified: true,
              image_url: 'https://i.ibb.co/8bRSrjW/download-1.jpg',
            },
          },
        ],
      },
        {
          id: 1,
          created_at: '2022-11-10T09:37:45.000000Z',
          image_url: 'https://i.ibb.co/KWSTv3T/Screenshot-2022-11-21-at-21-37-17.jpg',
          user: {
            name: 'Paddie',
            username: 'paddie',
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
                username: 'jessnolimit',
                is_verified: true,
                image_url: 'https://i.ibb.co/8bRSrjW/download-1.jpg',
              },
            },
          ],
        }])

      this.posts = data
    },
  },
}
</script>
