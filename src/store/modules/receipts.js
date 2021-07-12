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
      // {
      //   receipt_id: '00002',
      //   name: 'Dima Makaron',
      //   city: 'Helsinki',
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
    getShopId({ commit, dispatch, rootState }) {
      return ApiService.getUserShopId(
        rootState.api.accessToken,
        rootState.api.accessSecret
      )
        .then((shopId) => commit('SET_SHOP_ID', shopId))
        .catch((e) => {
          dispatch(
            'notifications/add',
            {
              message: e.message,
              type: 'danger',
            },
            { root: true }
          )
        })
    },
    getReceipts({ state, dispatch, commit, rootState }) {
      return ApiService.getShopReceipts(
        rootState.api.accessToken,
        rootState.api.accessSecret,
        state.shopId
      )
        .then((receipts) => {
          commit('SET_RECEIPTS', receipts)
        })
        .catch((e) => {
          dispatch(
            'notifications/add',
            {
              message: e.message,
              type: 'danger',
            },
            { root: true }
          )
        })
    },
    updateReceipt({ commit }, newReceipt) {
      if (!newReceipt.receipt_id) return
      commit('UPDATE_RECEIPT', newReceipt)
    },
  },
  getters: {
    getReceiptById: (state) => (receipt_id) => {
      return state.receipts.find((receipt) => receipt.receipt_id === receipt_id)
    },
  },
}
