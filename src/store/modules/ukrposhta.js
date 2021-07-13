export default {
  namespaced: true,
  state: () => ({
    senderAddress: {
      uuid: '',
      name: '',
      country: '',
      city: '',
      postcode: '',
      street: '',
    },
  }),
  mutations: {
    SET_SENDER_ADDRESS(state, address) {
      Object.assign(state.senderAddress, address)
      localStorage.setItem('senderAddress', JSON.stringify(state.senderAddress))
    },
  },
  actions: {
    setSenderAddress({ commit }, address) {
      if (!address) return
      if (!address.uuid) {
        // address.uuid = get from Ukrposhta API address uuid
        address.uuid = '15'
      }
      commit('SET_SENDER_ADDRESS', address)
    },
    getLocalAddress({ commit }) {
      const senderAddress = JSON.parse(localStorage.getItem('senderAddress'))
      commit('SET_SENDER_ADDRESS', senderAddress)
    },
  },
}
