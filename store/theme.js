export default {
  state: () => ({
    isDark: true,
  }),

  mutations: {
    TOGGLE_IS_DARK(state) {
      console.log(state.isDark)
      state.isDark = !state.isDark
    },
  },

  actions: {
  },
}
