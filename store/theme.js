export default {
  state: () => ({
    isDark: true,
    sidebarIsOpen: false,
  }),

  mutations: {
    TOGGLE_IS_DARK(state) {
      state.isDark = !state.isDark
    },
    TOGGLE_SIDEBAR(state) {
      state.sidebarIsOpen = !state.sidebarIsOpen
    },
  },

  actions: {
  },
}
