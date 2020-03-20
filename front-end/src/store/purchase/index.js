import {
  PURCHASE_STATE,
  PURCHASE_MUTATION,
  PURCHASE_ACTION
} from "./types";
import {
  Loading
} from "quasar";
import axios from "axios";
import {
  PURCHASE_API_BASE_URL
} from "src/shared/types/api";

export default {
  namespaced: true,
  state: {
    [PURCHASE_STATE.PURCHASES]: []
  },
  mutations: {
    [PURCHASE_MUTATION.SET_PURCHASE](state, payload) {
      state[PURCHASE_STATE.PURCHASES] = payload
    },
    [PURCHASE_MUTATION.ADD_PURCHASE](state, payload) {
      state[PURCHASE_STATE.PURCHASES].push(payload)
    }
  },
  actions: {
    async [PURCHASE_ACTION.FETCH_PURCHASE]({
      commit
    }) {
      Loading.show()
      const url = `${PURCHASE_API_BASE_URL}`
      const purchase = (await axios.get(url)).data
      commit(PURCHASE_MUTATION.SET_PURCHASE, purchase)
      Loading.hide()
    },
    async [PURCHASE_ACTION.CREATE_PURCHASE]({
      commit
    }, payload) {
      Loading.show()
      const url = `${PURCHASE_API_BASE_URL}`
      const purchase = (await axios.post(url, payload)).data
      commit(PURCHASE_MUTATION.ADD_PURCHASE, purchase)
      Loading.hide()
    }
  }
}
