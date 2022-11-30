<template>
  <div
    :class="{'left-0 opacity-100': sidebarIsOpen, '-left-full opacity-0': !sidebarIsOpen}"
    class="transition-slide duration-300 fixed xl:sticky top-[65px] sm:top-[53px] md:top-[61px] xl:left-0 xl:opacity-100 bottom-0 px-4 xl:px-0 py-4 overflow-y-auto w-full max-w-[420px] bg-slate-50 dark:bg-slate-900 border-r xl:border-r-0 dark:border-slate-700 z-10"
  >
    <div class="relative z-10">
      <!-- Profile card -->
      <div class="bg-white dark:bg-slate-800 border border-slate-900/5 rounded-lg py-4 px-4  mb-4">
        <div class="flex items-center border-b border-slate-900/5 dark:border-slate-700 pb-4 mb-4">
          <!-- Profile picture -->
          <img
            src="https://i.ibb.co/d7HBdMF/avatar-dendy.jpg"
            alt="Avatar"
            width="48px"
            height="48px"
            class="rounded-full h-min mr-4"
          >
          <!-- Profile -->
          <div>
            <!-- Name -->
            <div class="font-medium text-slate-900 dark:text-white mb-1">
              Dendy Armandiaz Aziz
            </div>
            <div class="flex items-center">
              <!-- Subscription -->
              <span class="inline-flex items-center justify-center px-2 py-0.5 mr-2 text-sm font-bold bg-primary-500 dark:bg-primary-500 text-white dark:text-slate-900 rounded">{{ $t('Boost') }}</span>
              <!-- Upgrade -->
              <span class="hover:text-primary-500 text-sm cursor-pointer hover:underline border-l pl-2 border-slate-300 dark:border-slate-500">{{ $t('Upgrade') }}</span>
            </div>
          </div>
        </div>

        <!-- Gold -->
        <div class="flex items-center justify-between mb-1">
          <span class="mr-2">{{ $t('Gold') }}</span>
          <div class="relative cursor-default">
            <div class="flex items-center justify-end">
              <!-- Amount -->
              <span class="text-lg text-slate-900 dark:text-white font-bold mr-1">80</span>
              <!-- Gold icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                data-arp-injected="true"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  fill="#F8D643"
                />
                <path
                  d="M9.33077 3.45976H9.13905C8.70769 3.28569 8.23905 3.19995 7.73047 3.19995C6.7 3.19995 5.8213 3.55589 5.09172 4.26515C4.36213 4.97702 4 5.83438 4 6.83982C4 7.84527 4.36479 8.70263 5.09172 9.41449C5.8213 10.1264 6.7 10.4797 7.73047 10.4797C8.30562 10.4797 8.83817 10.3654 9.33077 10.1368C9.31745 10.5862 9.14438 10.9733 8.8142 11.2955C8.48402 11.6176 8.07929 11.7787 7.60533 11.7787V13.6C8.5932 13.6 9.43994 13.257 10.1429 12.5763C10.8459 11.893 11.2 11.0669 11.2 10.0952V3.45976H9.33077ZM9.34142 7.82968C9.34142 7.82968 9.22692 7.97257 9.08313 8.17003C8.95 8.35189 8.22041 9.11312 8.22041 9.11312V8.61169C8.06864 8.65066 7.9142 8.67145 7.74911 8.67145C6.70799 8.67145 5.86657 7.84786 5.86657 6.83462C5.86657 5.81878 6.71065 4.99781 7.74911 4.99781C8.79024 4.99781 9.63166 5.82138 9.63166 6.83462C9.63166 7.20095 9.51982 7.5439 9.33077 7.82968H9.34142Z"
                  fill="#B78101"
                />
              </svg>
            </div>
            <span
              class="absolute right-0 top-1 z-10 bg-white dark:bg-slate-800 transition-opacity hover:opacity-0 w-full min-w-fit text-right"
            >*****</span>
          </div>
        </div>

        <!-- Earnings -->
        <div class="flex items-center justify-between">
          <span class="mr-2">{{ $t('Earnings') }}</span>
          <div class="relative cursor-default">
            <div class="flex items-center justify-end">
              <!-- Amount -->
              <span class="text-lg text-slate-900 dark:text-white font-bold mr-1">$512</span>
              <!-- Currency -->
              <span class="font-bold">USD</span>
            </div>
            <span
              class="absolute right-0 top-1 z-10 bg-white dark:bg-slate-800 transition-opacity hover:opacity-0 w-full min-w-fit text-right"
            >*****</span>
          </div>
        </div>
      </div>

      <!-- Menus -->
      <!-- My profile -->
      <sidebar-menu :title="$t('Profile')">
        <template #icon>
          <svg
            class="w-8 h-8"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 2H5C3.3 2 2 3.3 2 5V19C2 20.7 3.3 22 5 22H19C20.7 22 22 20.7 22 19V5C22 3.3 20.7 2 19 2ZM12 6C13.5 6 14.8 7.2 14.8 8.8C14.8 10.4 13.6 11.6 12 11.6C10.4 11.6 9.2 10.4 9.2 8.8C9.2 7.2 10.5 6 12 6ZM16.6 17.9C16.5 17.9 16.4 18 16.2 18H7.7C7.1 18 6.7 17.5 6.7 17C6.7 16.9 6.7 16.8 6.8 16.6C7.9 13.7 11.1 12.3 14 13.4C15.5 14 16.6 15.1 17.2 16.6C17.4 17.2 17.1 17.7 16.6 17.9Z"
            />
          </svg>
        </template>
      </sidebar-menu>
      <!-- Shop -->
      <sidebar-menu :title="$t('Shop')">
        <template #icon>
          <svg
            class="w-8 h-8"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 6H3C2.4 6 2 6.4 2 7V10C2 11.1 2.9 12 4 12C5.1 12 6 11.1 6 10C6 11.1 6.9 12 8 12C9.1 12 10 11.1 10 10C10 11.1 10.9 12 12 12C13.1 12 14 11.1 14 10C14 11.1 14.9 12 16 12C17.1 12 18 11.1 18 10C18 11.1 18.9 12 20 12C21.1 12 22 11.1 22 10V7C22 6.4 21.6 6 21 6ZM4.3 4H20C20.6 4 21 3.6 21 3C21 2.4 20.6 2 20 2H4.3C3.7 2 3.3 2.4 3.3 3C3.3 3.6 3.8 4 4.3 4ZM18 12C18 13.1 17.1 14 16 14C14.9 14 14 13.1 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12C10 13.1 9.1 14 8 14C6.9 14 6 13.1 6 12C6 13.1 5.1 14 4 14V21C4 21.6 4.4 22 5 22H9V19C9 17.3 10.3 16 12 16C13.7 16 15 17.3 15 19V22H19C19.6 22 20 21.6 20 21V14C18.9 14 18 13.1 18 12Z"
            />
          </svg>
        </template>
      </sidebar-menu>
      <!-- Wallet -->
      <sidebar-menu :title="$t('Wallet')">
        <template #icon>
          <svg
            class="w-8 h-8"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 7H18V6C18 4.3 16.7 3 15 3H5C3.3 3 2 4.3 2 6V18C2 19.7 3.3 21 5 21H19C20.7 21 22 19.7 22 18V10C22 8.3 20.7 7 19 7ZM16 7H5C4.4 7 4 6.6 4 6C4 5.4 4.4 5 5 5H15C15.6 5 16 5.4 16 6V7ZM20 16H19C17.9 16 17 15.1 17 14C17 12.9 17.9 12 19 12H20V16Z"
            />
          </svg>
        </template>
      </sidebar-menu>
      <!-- Wallet -->
      <sidebar-menu :title="$t('Orders')">
        <template #icon>
          <svg
            class="w-8 h-8"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 6.00008H17.6L15.9 2.60008C15.7 2.10008 15.1 1.90008 14.6 2.20008C14.1 2.40008 13.9 3.00008 14.2 3.50008L15.4 6.00008H8.6L9.9 3.40008C10.1 2.90008 9.9 2.30008 9.5 2.10008C9 1.90008 8.4 2.10008 8.1 2.60008L6.4 6.00008H5C3.3 6.00008 2 7.30008 2 9.00008C2 10.3001 2.9 11.4001 4.1 11.8001L4.8 19.3001C5 20.8001 6.3 22.0001 7.8 22.0001H16.2C17.7 22.0001 19 20.8001 19.2 19.3001L19.9 11.8001C21.1 11.4001 22 10.3001 22 9.00008C22 7.30008 20.7 6.00008 19 6.00008ZM11 17.0001C11 17.6001 10.6 18.0001 10 18.0001C9.4 18.0001 9 17.6001 9 17.0001V15.0001C9 14.4001 9.4 14.0001 10 14.0001C10.6 14.0001 11 14.4001 11 15.0001V17.0001ZM15 17.0001C15 17.6001 14.6 18.0001 14 18.0001C13.4 18.0001 13 17.6001 13 17.0001V15.0001C13 14.4001 13.4 14.0001 14 14.0001C14.6 14.0001 15 14.4001 15 15.0001V17.0001ZM19 10.0001H5C4.4 10.0001 4 9.60008 4 9.00008C4 8.40008 4.4 8.00008 5 8.00008H19C19.6 8.00008 20 8.40008 20 9.00008C20 9.60008 19.6 10.0001 19 10.0001Z"
            />
          </svg>
        </template>
      </sidebar-menu>
      <!-- Widget -->
      <sidebar-menu :title="$t('Widget')">
        <template #icon>
          <svg
            class="w-8 h-8"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2H3C2.4 2 2 2.4 2 3V10C2 10.6 2.4 11 3 11H10C10.6 11 11 10.6 11 10V3C11 2.4 10.6 2 10 2ZM10 13H3C2.4 13 2 13.4 2 14V21C2 21.6 2.4 22 3 22H10C10.6 22 11 21.6 11 21V14C11 13.4 10.6 13 10 13ZM17.5 2C15 2 13 4 13 6.5C13 9 15 11 17.5 11C20 11 22 9 22 6.5C22 4 20 2 17.5 2ZM21 13H14C13.4 13 13 13.4 13 14V21C13 21.6 13.4 22 14 22H21C21.6 22 22 21.6 22 21V14C22 13.4 21.6 13 21 13Z"
            />
          </svg>
        </template>
      </sidebar-menu>
      <!-- Feedback -->
      <sidebar-menu :title="$t('Feedback')">
        <template #icon>
          <svg
            class="w-8 h-8"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9999 2C6.4999 2 1.9999 6.5 1.9999 12C1.9999 14.3 2.7999 16.5 4.2999 18.3L2.2999 20.3C1.9999 20.6 1.8999 21 2.0999 21.4C2.1999 21.8 2.5999 22 2.9999 22H11.9999C17.4999 22 21.9999 17.5 21.9999 12C21.9999 6.5 17.4999 2 11.9999 2ZM15.4999 13.1L12.6999 15.9C12.4999 16.1 12.1999 16.2 11.9999 16.2C11.7999 16.2 11.4999 16.1 11.2999 15.9L8.4999 13.1C7.2999 12 7.2999 10 8.4999 8.9C9.3999 8 10.8999 7.8 11.9999 8.4C13.0999 7.8 14.5999 8 15.4999 8.9C16.6999 10 16.6999 12 15.4999 13.1Z"
            />
          </svg>
        </template>
      </sidebar-menu>
      <!-- Settings -->
      <sidebar-menu :title="$t('Settings')">
        <template #icon>
          <svg
            class="w-8 h-8"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.3001 12.7C20.0001 12.3 20.0001 11.8 20.3001 11.4L21.6001 10C21.9001 9.7 21.9001 9.2 21.7001 8.8L19.7001 5.3C19.5001 4.9 19.1001 4.7 18.6001 4.8L16.7001 5.2C16.2001 5.3 15.7001 5 15.6001 4.5L15.0001 2.7C14.8001 2.3 14.4001 2 14.0001 2H10.0001C9.6001 2 9.2001 2.3 9.1001 2.7L8.4001 4.5C8.3001 5 7.8001 5.3 7.3001 5.2L5.4001 4.8C5.0001 4.7 4.6001 4.9 4.3001 5.3L2.3001 8.8C2.1001 9.1 2.2001 9.6 2.5001 9.9L3.8001 11.3C4.1001 11.7 4.1001 12.2 3.8001 12.6L2.5001 14C2.2001 14.3 2.2001 14.8 2.4001 15.2L4.4001 18.7C4.6001 19.1 5.0001 19.3 5.5001 19.2L7.4001 18.8C7.9001 18.7 8.4001 19 8.5001 19.5L9.1001 21.3C9.2001 21.7 9.6001 22 10.0001 22H14.0001C14.4001 22 14.8001 21.7 14.9001 21.3L15.5001 19.5C15.7001 19 16.2001 18.7 16.6001 18.8L18.5001 19.2C18.9001 19.3 19.4001 19.1 19.6001 18.7L21.6001 15.2C21.8001 14.8 21.8001 14.4 21.5001 14L20.3001 12.7ZM12.0001 15C10.3001 15 9.0001 13.7 9.0001 12C9.0001 10.3 10.3001 9 12.0001 9C13.7001 9 15.0001 10.3 15.0001 12C15.0001 13.7 13.7001 15 12.0001 15Z"
            />
          </svg>
        </template>
      </sidebar-menu>
    </div>

    <div
      v-if="sidebarIsOpen"
      class="bg-gray-900 bg-opacity-0 fixed inset-0 w-100"
      @click="toggleSidebar"
    />
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('theme', ['sidebarIsOpen']),
  },
  methods: {
    toggleSidebar() {
      this.$store.commit('theme/TOGGLE_SIDEBAR')
    },
  },
}
</script>

<style scoped>

</style>
