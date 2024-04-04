import { createStore } from 'vuex'
import JSONdata from './delete_this.json'

export default createStore({
  state: {
    dialogs: null,
  },

  getters: {
    DIALOGS: state => {
      return state.dialogs
    }
  },

  mutations: {
    SET_DIALOGS: (state, dialogs) => {
      state.dialogs = dialogs
    }
  },

  actions: {
GET_DIALOGS: async ({commit}) => {
  commit('SET_DIALOGS', JSONdata.Users)
}
  }
})
