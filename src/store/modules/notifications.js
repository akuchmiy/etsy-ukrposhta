let nextNotificationId = 1

export default {
  namespaced: true,
  state: () => ({
    notifications: [],
  }),
  mutations: {
    PUSH(state, notification) {
      state.notifications.push({
        ...notification,
        id: nextNotificationId++,
      })
    },
    DELETE(state, notification) {
      state.notifications = state.notifications.filter(
        (notif) => notif.id !== notification.id
      )
    },
  },
  actions: {
    add({ commit }, notification) {
      if (!notification.message) return
      commit('PUSH', notification)
    },
    remove({ commit }, notification) {
      if (!(notification || notification.id)) return
      commit('DELETE', notification)
    },
  },
}
