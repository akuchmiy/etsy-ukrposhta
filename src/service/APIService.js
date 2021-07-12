import axios from 'axios'
import NProgress from 'nprogress'

// const apiClient = axios.create({
//   baseURL: 'https://openapi.etsy.com/v2',
//   withCredentials: false,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// })

const serverClient = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

serverClient.interceptors.request.use((config) => {
  NProgress.start()
  return config
})

// before a response is returned stop nprogress
serverClient.interceptors.response.use((response) => {
  NProgress.done()
  return response
})

export default {
  getRequestToken(api_key, shared_secret) {
    return serverClient.get('/request', {
      params: {
        api_key,
        shared_secret,
      },
    })
  },
  getAccessToken(req_token, req_secret, verifier) {
    return serverClient.get('/access', {
      params: {
        req_token,
        req_secret,
        verifier,
      },
    })
  },
  getUserShopId(token, secret) {
    return serverClient
      .get('/get', {
        params: {
          path: '/users/__SELF__/shops',
          token,
          secret,
          query: null,
        },
      })
      .then((result) => result.data.body.results[0].shop_id)
  },
  getShopReceipts(token, secret, shopId) {
    return serverClient
      .get('/get', {
        params: {
          path: `/shops/${shopId}/receipts`,
          token,
          secret,
          query: null,
        },
      })
      .then((result) => result.data.body.results)
  },
}
