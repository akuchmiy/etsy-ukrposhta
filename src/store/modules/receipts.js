import ApiService from '@/service/APIService.js'

export default {
  namespaced: true,
  state: () => ({
    shopId: null,
    receipts: [],
  }),
  mutations: {
    SET_SHOP_ID(state, shopId) {
      state.shopId = shopId
    },
    SET_RECEIPTS(state, receipts) {
      state.receipts = receipts
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
        console.log(receipts)
        commit('SET_RECEIPTS', receipts)
      })
    },
  },
}
