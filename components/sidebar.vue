<template>
  <div>
    <!-- Profile card -->
    <div class="border border-slate-300 dark:border-slate-700 rounded-lg py-4 px-3 mb-2">
      <div class="flex items-center border-b border-slate-300 dark:border-slate-700 pb-4 mb-4">
        <!-- Profile picture -->
        <img
          src="https://i.ibb.co/d7HBdMF/avatar-dendy.jpg"
          alt="Avatar"
          width="48px"
          height="48px"
          class="rounded-full h-min mr-2 sm:mr-5"
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

      <div class="flex items-center justify-between mb-1">
        <span class="mr-2">{{ $t('Gold') }}</span>
        <div class="relative cursor-default">
          <div class="flex items-center justify-end opacity-0 hover:opacity-100 min-w-[100px] bg-slate-900">
            <span class="text-lg text-slate-900 dark:text-white font-bold mr-1">80</span>
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
          <span class="absolute right-0 top-1 -z-10">*****</span>
        </div>
      </div>

      <div class="flex items-center justify-between">
        <span class="mr-2">{{ $t('Earnings') }}</span>
        <div class="relative cursor-default">
          <div class="flex items-center justify-end opacity-0 hover:opacity-100 min-w-[100px] bg-slate-900">
            <span class="text-lg text-slate-900 dark:text-white font-bold mr-1">$512</span>
            <span class="font-bold">USD</span>
          </div>
          <span class="absolute right-0 top-1 -z-10">*****</span>
        </div>
      </div>
    </div>

    <!-- Menus -->
    <!-- My profile -->
    <sidebar-menu :title="$t('Profile')">
      <template #icon>
        <svg
          class="w-10 h-10"
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
    <sidebar-menu :title="$t('Profile')">
      <template #icon>
        <svg
          class="w-10 h-10"
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
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
