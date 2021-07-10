import ApiService from '@/service/APIService.js'

export default {
  namespaced: true,
  state: () => ({
    ***REMOVED***
    ***REMOVED***
    reqToken: '',
    reqSecret: '',
    accessToken: '',
    accessSecret: '',
  }),
  mutations: {
    SET_REQUEST_CREDENTIALS(state, credentials) {
      state.reqToken = credentials.reqToken
      state.reqSecret = credentials.reqSecret
    },
    SET_CREDENTIALS(state, credentials) {
      state.accessToken = credentials.accessToken
      state.accessSecret = credentials.accessSecret
    },
  },
  actions: {
    setCredentials({ commit }, credentials) {
      if (credentials.accessToken) {
        commit('SET_CREDENTIALS', credentials)
      }
    },
    getRequestCredentials({ state, commit }) {
      return ApiService.getRequestToken(state.apiKey, state.sharedSecret)
        .then((response) => {
          commit('SET_REQUEST_CREDENTIALS', {
            reqToken: response.data.token,
            reqSecret: response.data.tokenSecret,
          })
          return { href: response.data.authorizeUrl }
        })
        .catch(() => ({ href: '' }))
    },
    getAccessCredentials({ state, dispatch }, verifier) {
      return ApiService.getAccessToken(
        state.reqToken,
        state.reqSecret,
        verifier
      )
        .then((response) => {
          dispatch('setCredentials', {
            accessToken: response.data.token,
            accessSecret: response.data.tokenSecret,
          })
          return { success: true }
        })
        .catch(() => ({ success: false }))
    },
  },
}
