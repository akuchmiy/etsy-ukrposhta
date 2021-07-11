import { createStore } from 'vuex'
import api from '@/store/modules/api.js'
import receipts from '@/store/modules/receipts.js'
import notifications from '@/store/modules/notifications.js'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    api,
    receipts,
    notifications,
  },
})
