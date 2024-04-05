import { createStore } from 'vuex'
import JSONdata from './delete_this.json'

export default createStore({
  state: {
    dialogs: null,
    chatName: "None"
  },

  getters: {
    DIALOGS: state => {
      return state.dialogs
    },

    CHATNAME: state => {
      return state.chatName
    }
  },

  mutations: {
    SET_DIALOGS: (state, dialogs) => {
      state.dialogs = dialogs
    },

    SET_CHATNAME: (state, chatName) => {
      state.chatName = chatName
    }
  },

  actions: {
GET_DIALOGS: async ({commit}) => {
  commit('SET_DIALOGS', JSONdata.Users)
},

SET_CHATNAME: ({commit}, chatName) => {
  commit('SET_CHATNAME', chatName)
}
  }
})
