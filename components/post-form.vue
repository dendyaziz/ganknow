<template>
  <div class="bg-white dark:bg-slate-800 md:rounded-lg px-6 py-4 ring-1 ring-slate-900/5 mb-2 md:mb-4">
    <div class="sm:flex">
      <!-- User -->
      <div class="flex sm:block items-center">
        <!-- Avatar -->
        <img
          src="https://i.ibb.co/d7HBdMF/avatar-dendy.jpg"
          class="rounded-full h-min mr-2 sm:mr-5"
          alt="Avatar"
          width="48px"
          height="48px"
        >

        <span class="text-slate-900 dark:text-white font-medium sm:hidden">Dendy Armandiaz Aziz</span>
      </div>

      <div class="w-full">
        <form @submit.prevent="submit">

          <!-- Post message -->
          <textarea
            id="content"
            v-model="content"
            class="w-full text-slate-900 dark:text-white bg-white dark:bg-slate-800 md:text-lg py-4 sm:py-2 sm:mt-0 outline-none resize-none"
            :placeholder="$t('Share something with your supporters?')"
            rows="1"
            required
            @input="growTextarea"
            @focusin="showMenu"
          />

          <!-- Availability-->
          <div
            class="flex flex-row items-center hover:cursor-pointer text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
            @click="visibilityModalShow = true"
          >
            <div class="mr-2">
              <!-- Icon -->
              <svg
                v-if="visibility === 'public'"
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
              <svg
                v-else-if="visibility === 'paid'"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 19H3C2.4 19 2 19.4 2 20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20C22 19.4 21.6 19 21 19ZM9 17H13C15.8 17 18 14.8 18 12V11H19C20.7 11 22 9.7 22 8C22 6.3 20.7 5 19 5H18V4C18 3.4 17.6 3 17 3H5C4.4 3 4 3.4 4 4V12C4 14.8 6.2 17 9 17ZM18 7H19C19.6 7 20 7.4 20 8C20 8.6 19.6 9 19 9H18V7Z"
                />
              </svg>

            </div>
            <!-- Icon -->
            <span
              v-if="visibility === 'public'"
              class="font-medium"
            >{{ $t('Free to public') }}</span>
            <span
              v-else-if="visibility === 'paid'"
              class="font-medium"
            >{{ $t('Paid post') }} (Rp 79.000)</span>
            <!-- Dropdown icon -->
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9999 9.17C16.8126 8.98375 16.5591 8.87921 16.2949 8.87921C16.0308 8.87921 15.7773 8.98375 15.5899 9.17L11.9999 12.71L8.45995 9.17C8.27259 8.98375 8.01913 8.87921 7.75495 8.87921C7.49076 8.87921 7.23731 8.98375 7.04995 9.17C6.95622 9.26297 6.88183 9.37357 6.83106 9.49543C6.78029 9.61729 6.75415 9.74799 6.75415 9.88C6.75415 10.012 6.78029 10.1427 6.83106 10.2646C6.88183 10.3864 6.95622 10.497 7.04995 10.59L11.2899 14.83C11.3829 14.9237 11.4935 14.9981 11.6154 15.0489C11.7372 15.0997 11.8679 15.1258 11.9999 15.1258C12.132 15.1258 12.2627 15.0997 12.3845 15.0489C12.5064 14.9981 12.617 14.9237 12.7099 14.83L16.9999 10.59C17.0937 10.497 17.1681 10.3864 17.2188 10.2646C17.2696 10.1427 17.2957 10.012 17.2957 9.88C17.2957 9.74799 17.2696 9.61729 17.2188 9.49543C17.1681 9.37357 17.0937 9.26297 16.9999 9.17Z"
              />
            </svg>
          </div>

          <!-- Menu -->
          <!-- The menu will appear after you have focused on the form or typed the content -->
          <div
            class="transition-height overflow-hidden"
            :class="{'h-[126px]': menuVisible, 'h-0': !menuVisible}"
          >
            <div class="rounded-lg px-4 border border-slate-200 text-slate-900 dark:text-white border-slate-200 dark:border-slate-600 py-3 mt-3">
              <div class="flex items-center">
                <span class="mr-4">{{ $t('Add to your post') }}</span>
                <!-- Upload image/video -->
                <PostMenuButton class="text-primary-600 dark:text-primary-400 mr-1">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 2H5C3.34515 2.00483 2.00483 3.34515 2 5V13.86L5.88 9.98C7.06747 8.85 8.93253 8.85 10.12 9.98L12.9914 12.867L13.8789 11.9795C15.0524 10.8129 16.9476 10.8129 18.1211 11.9795L22 15.8584V5C21.9952 3.34515 20.6549 2.00483 19 2Z"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M10.12 9.98007C8.93253 8.85007 7.06747 8.85007 5.88 9.98007L2 13.8601V19.0001C2.00484 20.6549 3.34516 21.9952 5 22.0001H19C19.8151 21.9997 20.595 21.6676 21.16 21.0801L10.12 9.98007Z"
                    />
                    <path
                      d="M22.0008 15.8584L18.1219 11.9794C16.9484 10.8128 15.0532 10.8128 13.8797 11.9794L12.9922 12.867L21.1564 21.0755C21.6986 20.5208 22.0017 19.7756 22.0008 19V15.8584Z"
                      fill-opacity="0.2"
                    />
                  </svg>
                </PostMenuButton>
                <!-- Add live video -->
                <PostMenuButton class="text-primary-600 dark:text-primary-400 mr-1">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 18H5C3.34389 17.9982 2.00181 16.6561 2 15V9C2.00181 7.34389 3.34389 6.00181 5 6H14C15.6561 6.00181 16.9982 7.34389 17 9V15C16.9982 16.6561 15.6561 17.9982 14 18Z"
                      fill-opacity="0.4"
                    />
                    <path
                      d="M21.8944 7.55372C21.6476 7.0594 21.0468 6.85877 20.5525 7.1056L16.9883 8.8877C16.9898 8.92585 16.9997 8.96162 16.9998 9.00013V15.0001C16.9997 15.0386 16.9898 15.0744 16.9883 15.1126L20.5525 16.8947C20.6914 16.9639 20.8446 17.0001 20.9998 17.0001C21.5519 16.9998 21.9995 16.5522 21.9998 16.0001V8.00013C21.9997 7.84516 21.9636 7.69233 21.8944 7.55372Z"
                    />
                  </svg>
                </PostMenuButton>
                <!-- Add Link -->
                <PostMenuButton class="text-primary-600 dark:text-primary-400 mr-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.83204 15.1679C8.92487 15.2608 9.0351 15.3345 9.15641 15.3848C9.27772 15.435 9.40776 15.4609 9.53907 15.4609C9.67039 15.4609 9.80042 15.435 9.92174 15.3848C10.0431 15.3345 10.1533 15.2608 10.2461 15.1679L15.168 10.246C15.3556 10.0585 15.4609 9.80417 15.4609 9.53898C15.4609 9.27378 15.3556 9.01945 15.168 8.83193C14.9805 8.64441 14.7262 8.53906 14.461 8.53906C14.1958 8.53906 13.9415 8.64441 13.754 8.83193L8.83204 13.7538C8.73916 13.8467 8.66548 13.9569 8.61521 14.0782C8.56494 14.1995 8.53906 14.3296 8.53906 14.4609C8.53906 14.5922 8.56494 14.7222 8.61521 14.8436C8.66548 14.9649 8.73916 15.0751 8.83204 15.1679Z"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M20.6888 3.31164C19.8483 2.47326 18.7095 2.00244 17.5223 2.00244C16.3351 2.00244 15.1964 2.47326 14.3558 3.31164L10.475 7.19299C10.2874 7.38051 10.1821 7.63483 10.1821 7.90002C10.1821 8.16521 10.2874 8.41954 10.475 8.60705C10.6625 8.79457 10.9168 8.89991 11.182 8.89991C11.4472 8.89991 11.7015 8.79457 11.889 8.60705L15.7699 4.72571C16.2347 4.26094 16.865 3.99983 17.5223 3.99983C18.1796 3.99983 18.81 4.26094 19.2748 4.72571C19.7395 5.19049 20.0006 5.82086 20.0006 6.47815C20.0006 7.13544 19.7395 7.76582 19.2748 8.23059L15.3929 12.1119C15.2054 12.2995 15.1001 12.5538 15.1001 12.819C15.1001 13.0842 15.2054 13.3385 15.3929 13.526C15.5805 13.7135 15.8348 13.8189 16.1 13.8189C16.3652 13.8189 16.6195 13.7135 16.807 13.526L20.6888 9.64465C21.5274 8.8042 21.9984 7.66542 21.9984 6.47815C21.9984 5.29088 21.5274 4.15209 20.6888 3.31164ZM12.1117 15.3932L8.23082 19.2745C7.76605 19.7393 7.13568 20.0004 6.47838 20.0004C5.82109 20.0004 5.19072 19.7393 4.72594 19.2745C4.26117 18.8098 4.00006 18.1794 4.00006 17.5221C4.00006 16.8648 4.26117 16.2344 4.72594 15.7697L8.60777 11.8883C8.70062 11.7955 8.77427 11.6852 8.82452 11.5639C8.87477 11.4426 8.90064 11.3126 8.90064 11.1813C8.90064 11.05 8.87477 10.9199 8.82452 10.7986C8.77427 10.6773 8.70062 10.5671 8.60777 10.4742C8.51493 10.3814 8.4047 10.3077 8.28339 10.2575C8.16207 10.2072 8.03205 10.1814 7.90074 10.1814C7.76944 10.1814 7.63942 10.2072 7.5181 10.2575C7.39679 10.3077 7.28656 10.3814 7.19371 10.4742L3.31187 14.3556C2.47538 15.1961 2.0064 16.3341 2.00782 17.5199C2.00923 18.7057 2.48092 19.8425 3.31942 20.681C4.15792 21.5195 5.29477 21.9912 6.48059 21.9927C7.66641 21.9941 8.80437 21.5251 9.64487 20.6886L13.5257 16.8072C13.7133 16.6197 13.8186 16.3654 13.8186 16.1002C13.8186 15.835 13.7133 15.5807 13.5257 15.3932C13.3382 15.2057 13.0839 15.1003 12.8187 15.1003C12.5535 15.1003 12.2992 15.2057 12.1117 15.3932L12.1117 15.3932Z"
                    />
                    <path
                      d="M21 18H20V17C20 16.7348 19.8946 16.4804 19.7071 16.2929C19.5196 16.1054 19.2652 16 19 16C18.7348 16 18.4804 16.1054 18.2929 16.2929C18.1054 16.4804 18 16.7348 18 17V18H17C16.7348 18 16.4804 18.1054 16.2929 18.2929C16.1054 18.4804 16 18.7348 16 19C16 19.2652 16.1054 19.5196 16.2929 19.7071C16.4804 19.8946 16.7348 20 17 20H18V21C18 21.2652 18.1054 21.5196 18.2929 21.7071C18.4804 21.8946 18.7348 22 19 22C19.2652 22 19.5196 21.8946 19.7071 21.7071C19.8946 21.5196 20 21.2652 20 21V20H21C21.2652 20 21.5196 19.8946 21.7071 19.7071C21.8946 19.5196 22 19.2652 22 19C22 18.7348 21.8946 18.4804 21.7071 18.2929C21.5196 18.1054 21.2652 18 21 18Z"
                    />
                  </svg>
                </PostMenuButton>
              </div>
            </div>

            <div class="text-right">
              <button
                type="submit"
                class="text-white bg-primary-500 hover:bg-primary-600 focus:outline-none font-medium rounded-sm text-sm px-5 py-2.5 text-center font-bold uppercase mt-3"
              >
                {{ $t('Send Post') }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    <!-- Visibility selector modal -->
    <Modal
      v-model="visibilityModalShow"
      :title="$t('Select visibility')"
    >
      <ul class="space-y-3">
        <li>
          <div
            class="flex items-center cursor-pointer p-3 text-base font-bold text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            @click="selectVisibility('public')"
          >
            <svg
              width="24"
              height="24"
              class="h-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22.0002C10.0222 22.0002 8.08879 21.4138 6.4443 20.3149C4.79981 19.2161 3.51809 17.6543 2.76121 15.8271C2.00433 13.9998 1.8063 11.9892 2.19215 10.0493C2.578 8.10954 3.53041 6.32771 4.92894 4.92918C6.32746 3.53066 8.10929 2.57825 10.0491 2.1924C11.9889 1.80654 13.9996 2.00458 15.8268 2.76145C17.6541 3.51833 19.2159 4.80005 20.3147 6.44455C21.4135 8.08904 22 10.0224 22 12.0002C21.997 14.6515 20.9424 17.1933 19.0677 19.068C17.193 20.9427 14.6512 21.9972 12 22.0002Z"
                fill-opacity="0.2"
              />
              <path
                d="M12 2.00024C10.0222 2.00024 8.08879 2.58673 6.4443 3.68555C4.79981 4.78436 3.51809 6.34615 2.76121 8.17341C2.00433 10.0007 1.8063 12.0113 2.19215 13.9511C2.578 15.891 3.53041 17.6728 4.92894 19.0713C6.32746 20.4698 8.10929 21.4222 10.0491 21.8081C11.9889 22.194 13.9996 21.9959 15.8268 21.239C17.6541 20.4822 19.2159 19.2004 20.3147 17.5559C21.4135 15.9115 22 13.9781 22 12.0002C21.997 9.34901 20.9424 6.80723 19.0677 4.93252C17.193 3.05782 14.6512 2.00327 12 2.00024ZM4 12.0002C4.0026 11.3251 4.09108 10.653 4.26331 10.0002H6.11631C5.96129 11.3291 5.96129 12.6714 6.11631 14.0002H4.26331C4.09108 13.3474 4.0026 12.6754 4 12.0002ZM8 12.0002C8.00068 11.3312 8.04658 10.6631 8.13739 10.0002H11V14.0002H8.13739C8.04658 13.3374 8.00068 12.6692 8 12.0002ZM13 4.29748C14.2287 5.20046 15.0927 6.51431 15.4349 8.00024H13V4.29748ZM11 4.29748V8.00024H8.56512C8.90732 6.51431 9.77129 5.20046 11 4.29748ZM11 16.0002V19.703C9.77129 18.8 8.90732 17.4862 8.56512 16.0002H11ZM13 19.703V16.0002H15.4349C15.0927 17.4862 14.2287 18.8 13 19.703ZM13 14.0002V10.0002H15.8626C16.0458 11.3273 16.0458 12.6732 15.8626 14.0002H13ZM17.8837 10.0002H19.7367C20.0878 11.3105 20.0878 12.69 19.7367 14.0002H17.8837C18.0388 12.6714 18.0388 11.3291 17.8837 10.0002ZM18.9175 8.00024H17.5151C17.2923 7.10945 16.9689 6.24691 16.551 5.42924C17.5185 6.10272 18.3264 6.98038 18.9175 8.00024ZM7.449 5.42919C7.03117 6.24686 6.70772 7.1094 6.48489 8.00019H5.08246C5.67365 6.98033 6.48151 6.10267 7.449 5.42919ZM5.08246 16.0002H6.48492C6.70775 16.891 7.03118 17.7536 7.44897 18.5712C6.48149 17.8978 5.67364 17.0201 5.08246 16.0002ZM16.551 18.5712C16.9688 17.7536 17.2923 16.891 17.5151 16.0002H18.9175C18.3264 17.0201 17.5185 17.8978 16.551 18.5713L16.551 18.5712Z"
              />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">{{ $t('Free to public') }}</span>
            <span
              v-if="visibility === 'public'"
              class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400"
            >{{ $t('Current') }}</span>
          </div>
        </li>
        <li>
          <div
            class="flex items-center cursor-pointer p-3 text-base font-bold text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
            @click="selectVisibility('paid')"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 17H9C6.2 17 4 14.8 4 12V4C4 3.4 4.4 3 5 3H17C17.6 3 18 3.4 18 4V12C18 14.8 15.8 17 13 17Z"
                fill-opacity="0.5"
              />
              <path
                d="M18 7H19C19.6 7 20 7.4 20 8C20 8.6 19.6 9 19 9H18V11H19C20.7 11 22 9.7 22 8C22 6.3 20.7 5 19 5H18V7ZM21 19H3C2.4 19 2 19.4 2 20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20C22 19.4 21.6 19 21 19Z"
              />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">{{ $t('Paid post') }} (Rp 79.000)</span>
            <span
              v-if="visibility === 'paid'"
              class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400"
            >{{ $t('Current') }}</span>
          </div>

          <a
            href="#"
            class="font-medium hover:text-slate-700 dark:hover:text-slate-300 hover:underline text-sm"
          >{{ $t('Change price') }}</a>
        </li>
      </ul>
    </Modal>
  </div>
</template>

<script>
/* eslint-disable no-param-reassign */
export default {
  data() {
    return {
      content: '',
      visibility: 'public',
      menuVisible: false,
      visibilityModalShow: false,
    }
  },
  methods: {
    submit() {

    },
    growTextarea(event) {
      event.target.style.height = '5px'
      event.target.style.height = `${event.target.scrollHeight}px`
    },
    selectVisibility(value) {
      this.visibility = value
      this.visibilityModalShow = false
    },
    showMenu() {
      this.menuVisible = true
    },
  },
}
</script>

<style scoped>

</style>
