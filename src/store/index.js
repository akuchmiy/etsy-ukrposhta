import { createStore } from 'vuex'
import { createLogger } from 'vuex'
import api from '@/store/modules/api.js'
import receipts from '@/store/modules/receipts.js'
import notifications from '@/store/modules/notifications.js'
import ukrposhta from '@/store/modules/ukrposhta.js'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    api,
    receipts,
    notifications,
    ukrposhta,
  },
  plugins: [createLogger()],
})
