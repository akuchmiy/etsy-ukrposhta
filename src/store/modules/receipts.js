import ApiService from '@/service/APIService.js'

export default {
  namespaced: true,
  state: () => ({
    shopId: null,
    receipts: [],
    labels: [
      'name',
      'city',
      // 'country_id',
      'formatted_address',
      'first_line',
      'second_line',
      'state',
      'zip',
      'subtotal',
      'grandtotal',
      // 'adjusted_grandtotal',
      // 'buyer_adjusted_grandtotal',
    ],
    countries: new Map(),
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
    SET_COUNTRIES(state, countries) {
      for (let country of countries) {
        state.countries.set(country.country_id, country.iso_country_code)
      }
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
          // receipts = receipts.filter((receipt) => !receipt.was_shipped)
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
    getCountries({ commit, rootState }) {
      ApiService.getCountries(
        rootState.api.accessToken,
        rootState.api.accessSecret
      ).then((countries) => commit('SET_COUNTRIES', countries))
    },
  },
  getters: {
    getReceiptById: (state) => (receipt_id) => {
      return state.receipts.find((receipt) => receipt.receipt_id === receipt_id)
    },
  },
}
