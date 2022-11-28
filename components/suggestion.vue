<template>
  <div class="bg-white dark:bg-slate-800 md:rounded-md ring-1 ring-slate-900/5 mb-2 md:mb-3 px-4 sm:px-6 py-4">
    <!-- Title -->
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-5">
      {{ $t('Complete Your Profile') }}
    </h3>

    <!-- Suggestions -->
    <timeline>
      <!-- Add profile picture -->
      <timeline-item
        class="mb-6"
        :title="$t('Upload Profile Picture')"
        :description="$t('Show off your self with a profile image!')"
        :cta-label="$t('Upload Image')"
      >
        <template #icon>
          <svg
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 7C13.7 7 15 8.3 15 10C15 11.7 13.7 13 12 13C10.3 13 9 11.7 9 10C9 8.3 10.3 7 12 7ZM12 20C9.8 20 7.7 19.1 6.2 17.5C8.4 14.3 12.7 13.5 15.9 15.7C16.6 16.2 17.2 16.8 17.7 17.5C16.3 19.1 14.2 20 12 20Z"
            />
          </svg>
        </template>
        <template #cta-icon>
          <svg
            class="mr-2 w-4 h-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 8H19.4L14 2.6V7C14 7.6 14.4 8 15 8ZM15 10C13.3 10 12 8.7 12 7V2H7C5.3 2 4 3.3 4 5V19C4 20.7 5.3 22 7 22H17C18.7 22 20 20.7 20 19V10H15ZM14.7 14.7C14.3 15.1 13.7 15.1 13.3 14.7L13 14.4V17C13 17.6 12.6 18 12 18C11.4 18 11 17.6 11 17V14.4L10.7 14.7C10.3 15.1 9.7 15.1 9.3 14.7C8.9 14.3 8.9 13.7 9.3 13.3L11.3 11.3C11.7 10.9 12.3 10.9 12.7 11.3L14.7 13.3C15.1 13.7 15.1 14.3 14.7 14.7Z"
            />
          </svg>
        </template>
      </timeline-item>

      <!-- Add cover image -->
      <timeline-item
        class="mb-6"
        :title="$t('Upload Cover Image')"
      >
        <template #icon>
          <svg
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 2H5C3.3 2 2 3.3 2 5V19C2 20.7 3.3 22 5 22H19C20.7 22 22 20.7 22 19V5C22 3.3 20.7 2 19 2ZM20 13.9L18.1 12C16.9 10.9 15 10.9 13.9 12L13 12.9L10.1 10C8.9 8.9 7 8.9 5.9 10L4 11.9V5C4 4.4 4.4 4 5 4H19C19.6 4 20 4.4 20 5V13.9Z"
            />
          </svg>
        </template>
      </timeline-item>

      <!-- Set a goal -->
      <timeline-item
        class="mb-6"
        :title="$t('Set A Goal')"
      >
        <template #icon>
          <svg
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.6 2.09988C22.5 1.79988 22.2 1.49988 21.9 1.39988C17.7001 0.299882 13.4 1.59988 10.5 4.99988L9.40005 6.29988L6.70005 5.69988C5.40005 5.19988 4.00005 5.79988 3.40005 6.99988L1.20005 10.8999C1.00005 11.1999 1.00005 11.4999 1.20005 11.7999C1.30005 12.0999 1.60005 12.2999 1.90005 12.3999L5.00005 13.0999C4.70005 13.8999 4.60005 14.6999 4.40005 15.4999C4.40005 15.7999 4.50005 16.0999 4.70005 16.2999L7.80005 19.3999C8.00005 19.5999 8.20005 19.6999 8.50005 19.6999H8.60005C9.50005 19.5999 10.3 19.4999 11.1 19.1999L11.7 22.1999C11.8 22.4999 12 22.7999 12.3 22.8999C12.4 22.9999 12.6 22.9999 12.7 22.9999C12.9 22.9999 13 22.9999 13.2 22.8999L17.1 20.6999C18.2001 20.0999 18.8 18.6999 18.5 17.3999L17.8 14.5999L19 13.4999C22.3 10.6999 23.7001 6.19988 22.6 2.09988ZM7.30005 8.79988C6.70005 9.59988 6.10005 10.3999 5.70005 11.1999L3.60005 10.6999L5.10005 7.99988C5.30005 7.59988 5.70005 7.49988 6.20005 7.59988L7.90005 7.99988L7.30005 8.79988ZM16 18.8999L13.3 20.3999L12.9 18.3999C13.8 17.9999 14.6 17.3999 15.3 16.7999L16 16.0999L16.4 17.7999C16.6 18.2999 16.3 18.7999 16 18.8999ZM16.7 8.79988C15.9 8.79988 15.2 8.09988 15.2 7.29988C15.2 6.49988 15.9 5.79988 16.7 5.79988C17.5 5.79988 18.2001 6.49988 18.2001 7.29988C18.2001 8.09988 17.6 8.79988 16.7 8.79988Z"
            />
          </svg>
        </template>
      </timeline-item>

      <!-- Create a post -->
      <timeline-item
        class="mb-6"
        :title="$t('Write A Post')"
      >
        <template #icon>
          <svg
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.3 16.1C2.1 16.2 2 16.5 2 16.8V21C2 21.6 2.4 22 3 22H7.2C7.5 22 7.7 21.9 7.9 21.7L17.4 12.2L11.7 6.5L2.3 16.1ZM21.7 6.5L17.5 2.3C17.1 1.9 16.5 1.9 16.1 2.3L13.3 5.1L19 10.8L21.8 8C22.1 7.6 22.1 6.9 21.7 6.5Z"
            />
          </svg>

        </template>
      </timeline-item>

      <!-- Enable membership -->
      <timeline-item
        class="mb-6"
        :title="$t('Enable Membership')"
      >
        <template #icon>
          <svg
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 4H18V3C18 2.4 17.6 2 17 2H7C6.4 2 6 2.4 6 3V4H3C2.4 4 2 4.4 2 5V8C2 10.2 3.8 12 6 12H7.5C8.4 13 9.6 13.7 11 13.9V16H10C8.3 16 7 17.3 7 19V21C7 21.6 7.4 22 8 22H16C16.6 22 17 21.6 17 21V19C17 17.3 15.7 16 14 16H13V13.9C14.3 13.7 15.6 13 16.5 12H18C20.2 12 22 10.2 22 8V5C22 4.4 21.6 4 21 4ZM6 10C4.9 10 4 9.1 4 8V6H6V8C6 8.7 6.1 9.4 6.4 10H6ZM14 18C14.6 18 15 18.4 15 19V20H9V19C9 18.4 9.4 18 10 18H14ZM20 8C20 9.1 19.1 10 18 10H17.7C17.9 9.4 18 8.7 18 8V6H20V8Z"
            />
          </svg>
        </template>
      </timeline-item>

      <!-- Share your profile -->
      <timeline-item
        class="mb-6"
        :title="$t('Share Your Profile')"
      >
        <template #icon>
          <svg
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.7 11.3L13.7 3.3C13.3 2.9 12.7 2.9 12.3 3.3C12.1 3.5 12 3.7 12 4V7.5C6.3 8 2 12.8 2 18.5V20C2 20.6 2.4 21 3 21C3.3 21 3.6 20.9 3.8 20.6C5.8 18.2 8.6 16.8 11.7 16.6C11.7 16.6 11.9 16.6 12 16.6V20C12 20.6 12.4 21 13 21C13.3 21 13.5 20.9 13.7 20.7L21.7 12.7C22.1 12.3 22.1 11.7 21.7 11.3Z"
            />
          </svg>
        </template>
      </timeline-item>
    </timeline>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>
