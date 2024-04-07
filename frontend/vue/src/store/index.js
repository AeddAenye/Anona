import { createStore } from 'vuex'
import JSONdata from './delete_this.json'

export default createStore({
  state: {
    dialogs: null,
    chatName: "None",
    regmodal: false
  },

  getters: {
    DIALOGS: state => {
      return state.dialogs
    },

    CHATNAME: state => {
      return state.chatName
    },

    REGMODAL: state => {
      return state.regmodal
    }
  },

  mutations: {
    SET_DIALOGS: (state, dialogs) => {
      state.dialogs = dialogs
    },

    SET_CHATNAME: (state, chatName) => {
      state.chatName = chatName
    },

    SET_REGMODAL: (state, regmodal) => {
      state.regmodal = regmodal
    }
  },

  actions: {
GET_DIALOGS: async ({commit}) => {
  commit('SET_DIALOGS', JSONdata.Users)
},

GET_CHATNAME: ({commit}, chatName) => {
  commit('SET_CHATNAME', chatName)
},

GET_REGMODAL: ({commit}, regmodal) => {
  commit('SET_REGMODAL', regmodal)
}

}})
