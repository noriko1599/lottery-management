import {
  MEMBER_MUTATION,
  MEMBER_STATE,
  MEMBER_ACTION
} from './types'
import axios from 'axios'
import {
  Loading
} from 'quasar'
import {
  MEMBER_API_BASE_URL
} from 'src/shared/types/api'

export default {
  namespaced: true,
  state: {
    [MEMBER_STATE.MEMBERS]: []
  },
  mutations: {
    [MEMBER_MUTATION.SET_MEMBER](state, payload) {
      state[MEMBER_STATE.MEMBERS] = payload
    },
    [MEMBER_MUTATION.ADD_MEMBER](state, payload) {
      if (!Array.isArray(state[MEMBER_STATE.MEMBERS])) {
        state[MEMBER_STATE.MEMBERS] = [payload]
      } else {
        state[MEMBER_STATE.MEMBERS].push(payload)
      }
    }
  },
  actions: {
    async [MEMBER_ACTION.FETCH_MEMBER]({
      commit
    }) {
      Loading.show()
      const url = `${MEMBER_API_BASE_URL}`
      const members = (await axios.get(url)).data
      commit(MEMBER_MUTATION.SET_MEMBER, members)
      Loading.hide()
    },
    async [MEMBER_ACTION.CREATE_MEMBER]({
      commit
    }, payload) {
      Loading.show()
      const url = `${MEMBER_API_BASE_URL}`
      const member = (await axios.post(url, payload)).data
      commit(MEMBER_MUTATION.ADD_MEMBER, member)
      Loading.hide()
    },
  },
}
