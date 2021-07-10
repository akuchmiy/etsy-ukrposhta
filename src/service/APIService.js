import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://openapi.etsy.com/v2',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

const serverClient = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  requestToken(api_key, shared_secret) {
    return serverClient.get('/request', {
      params: {
        api_key,
        shared_secret,
      },
    })
  },
  accessToken(req_token, req_secret, verifier) {
    return serverClient.get('/access', {
      params: {
        req_token,
        req_secret,
        verifier,
      },
    })
  },
  getReceipts() {
    return apiClient.get('/shops/__SELF__/receipts')
  },
}
