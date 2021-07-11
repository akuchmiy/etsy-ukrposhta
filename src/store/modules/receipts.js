import ApiService from '@/service/APIService.js'

export default {
  namespaced: true,
  state: () => ({
    shopId: null,
    receipts: [
      // {
      //   receipt_id: '00001',
      //   name: 'Tolik Sutuliy',
      //   city: 'Dublin',
      // },
    ],
  }),
  mutations: {
    SET_SHOP_ID(state, shopId) {
      state.shopId = shopId
    },
    SET_RECEIPTS(state, receipts) {
      state.receipts = receipts
    },
    UPDATE_RECEIPT(state, newReceipt) {
      const receipt = state.receipts.find(
        (receipt) => receipt.receipt_id === newReceipt.receipt_id
      )
      Object.assign(receipt, newReceipt)
    },
  },
  actions: {
    getShopId({ commit, rootState }) {
      return ApiService.getUserShopId(
        rootState.api.accessToken,
        rootState.api.accessSecret
      ).then((shopId) => commit('SET_SHOP_ID', shopId))
    },
    getReceipts({ state, commit, rootState }) {
      return ApiService.getShopReceipts(
        rootState.api.accessToken,
        rootState.api.accessSecret,
        state.shopId
      ).then((receipts) => {
        commit('SET_RECEIPTS', receipts)
      })
    },
    updateReceipt({ state, commit }, newReceipt) {
      if (!newReceipt.receipt_id) return

      console.log('Hi from updateReceipt', newReceipt)
      commit('UPDATE_RECEIPT', newReceipt)
      console.log(state.receipts)
    },
  },
  getters: {
    getReceiptById: (state) => (receipt_id) => {
      return state.receipts.find((receipt) => receipt.receipt_id === receipt_id)
    },
  },
}
