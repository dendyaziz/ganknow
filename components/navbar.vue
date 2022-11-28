<template>
  <header class="bg-white px-2 sm:px-4 py-2.5 sm:py-1 dark:bg-slate-900 fixed w-full z-20 top-0 left-0 border-b border-slate-200 dark:border-slate-800">
    <div class="flex flex-wrap items-center justify-between mx-auto">
      <div class="xl:w-[235px]">
        <a
          href="/"
          class="flex items-center"
        >
          <img
            src="https://i.ibb.co/Tq0SgVj/logo-black.png"
            class="dark:hidden h-8 mr-3 sm:h-9"
            alt="Ganknow Logo"
          >
          <img
            src="https://i.ibb.co/GWXPNZ4/logo-white.png"
            class="hidden dark:block h-8 mr-3 sm:h-9"
            alt="Ganknow Logo"
          >
        </a>
      </div>
      <div class="flex items-center md:order-2">
        <!-- Message button -->
        <button
          type="button"
          class="text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 rounded-lg h-[40px] w-[40px] flex items-center justify-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.5 2 2 6.5 2 12C2 14.3 2.8 16.5 4.3 18.3L2.3 20.3C1.9 20.7 1.9 21.3 2.3 21.7C2.5 21.9 2.7 22 3 22H12C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM13 15H7C6.4 15 6 14.6 6 14C6 13.4 6.4 13 7 13H13C13.6 13 14 13.4 14 14C14 14.6 13.6 15 13 15ZM17 11H7C6.4 11 6 10.6 6 10C6 9.4 6.4 9 7 9H17C17.6 9 18 9.4 18 10C18 10.6 17.6 11 17 11Z"
            />
          </svg>
        </button>
        <!-- Notification button -->
        <button
          type="button"
          class="relative text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 rounded-lg h-[40px] w-[40px] flex items-center justify-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 13.2V10C18 7.1 15.9 4.6 13 4.1V3C13 2.4 12.6 2 12 2C11.4 2 11 2.4 11 3V4.1C8.1 4.6 6 7.1 6 10V13.2C4.8 13.6 4 14.7 4 16V18C4 18.6 4.4 19 5 19H8.1C8.6 21.1 10.8 22.4 12.9 21.9C14.3 21.5 15.4 20.4 15.8 19H19C19.6 19 20 18.6 20 18V16C20 14.7 19.2 13.6 18 13.2ZM12 20C11.3 20 10.6 19.6 10.3 19H13.8C13.4 19.6 12.7 20 12 20Z"
            />
          </svg>
          <span class="absolute w-2 h-2 top-1.5 right-1.5 bg-primary-500 rounded-full" />
        </button>
        <!-- Dark/light mode toggle -->
        <button
          type="button"
          class="text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 rounded-lg h-[40px] w-[40px] hidden sm:flex items-center justify-center"
          @click="toggleIsDark"
        >
          <svg
            id="theme-toggle-dark-icon"
            aria-hidden="true"
            class="w-7 h-7"
            :class="{'hidden': isDark}"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
          <svg
            id="theme-toggle-light-icon"
            aria-hidden="true"
            class="w-7 h-7"
            :class="{'hidden': !isDark}"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          /></svg>
        </button>
        <!-- User profile button -->
        <button
          type="button"
          class="text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 rounded-full h-[44px] px-1.5 sm:pr-4 ml-3 flex items-center justify-center"
        >
          <!-- Avatar -->
          <img
            src="https://i.ibb.co/d7HBdMF/avatar-dendy.jpg"
            class="rounded-full h-min sm:mr-2"
            alt="Avatar"
            width="32px"
            height="32px"
          >
          <span class="hidden sm:inline font-bold uppercase">dendyaziz</span>
        </button>

        <!-- Menu toggle for Mobile-view -->
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-300 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ><path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          /></svg>
        </button>
      </div>
      <!-- Navbar menus -->
      <div
        id="navbar-sticky"
        class="items-center justify-between w-full md:flex md:w-auto md:order-1"
        :class="{'hidden': !isMenuOpen}"
      >
        <ul class="flex flex-col px-4 py-3.5 mt-4 border border-slate-100 rounded-lg bg-slate-50 md:flex-row md:space-x-8 md:mt-0 font-bold md:border-0 md:bg-white dark:bg-slate-800 md:dark:bg-slate-900 dark:border-slate-700 uppercase">
          <li class="list-item md:hidden lg:list-item">
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent hover:text-primary-500 dark:hover:text-primary-500 md:p-0 dark:text-white dark:hover:bg-slate-700 md:dark:hover:bg-transparent dark:border-slate-700"
            >{{ $t('Feed') }}</a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent hover:text-primary-500 dark:hover:text-primary-500 md:p-0 dark:text-white dark:hover:bg-slate-700 md:dark:hover:bg-transparent dark:border-slate-700"
            >{{ $t('Discover') }}</a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent hover:text-primary-500 dark:hover:text-primary-500 md:p-0 dark:text-white dark:hover:bg-slate-700 md:dark:hover:bg-transparent dark:border-slate-700"
            >{{ $t('Boost') }}</a>
          </li>
          <li>
            <a
              href="#"
              class="block py-2 pl-3 pr-4 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent hover:text-primary-500 dark:hover:text-primary-500 md:p-0 dark:text-white dark:hover:bg-slate-700 md:dark:hover:bg-transparent dark:border-slate-700"
            >{{ $t('Blog') }}</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { mapState } from 'vuex'

export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  computed: {
    ...mapState('theme', ['isDark']),
  },
  methods: {
    toggleIsDark() {
      this.$store.commit('theme/TOGGLE_IS_DARK')
    },
  },
}
</script>

<style scoped>

</style>
