import { createStore } from 'vuex'

export default createStore({
  state: {
    authorized: localStorage.getItem('authorized') === 'true',
    access_token: localStorage.getItem('access_token'),
    username: localStorage.getItem('username'),
    friendname: '',
    chats: [],
    chatId: ''
  },

  mutations: {
    setAuthorized(state, payload) {
      state.authorized = payload
      localStorage.setItem('authorized', payload)
    },
    setAccessToken(state, payload) {
      state.access_token = payload
      localStorage.setItem('access_token', payload)
    },
    setUsername(state, payload) {
      state.username = payload
      localStorage.setItem('username', payload)
    },
    setFriendname(state, payload) {
      state.friendname = payload
    },

    setChatId(state, payload) {
      state.chatId = payload
    },

    setChats(state, payload) {
      payload.forEach(elem => {
        if (elem.owner_nickname === state.username) {
          state.chats.push(elem = {id: elem.id, friendname: elem.friend_nickname})          
        }
        else {
          state.chats.push(elem = {id: elem.id, friendname: elem.owner_nickname})
        }
      })
      console.log(state.chats);
    },
    resetState(state) {
      state.authorized = false
      state.access_token = ''
      state.username = ''
      state.friendname = ''
    }
  },

  actions: {
    async login({ commit }, data) {
      const url = 'http://localhost:3000/api/login';
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };

      try {
        let response = await fetch(url, requestOptions);
        let json = await response.json();

        if (response.ok) {
          commit('setUsername', data.username)
          commit('setAuthorized', true)
          commit('setAccessToken', json.access_token)
        } else {
          throw new Error('Failed to login');
        }
      } catch (error) {
        throw error;
      }
    },

    async newDialog({ commit }, data) {
      const url = 'http://localhost:3000/api/newDialog';
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      try {
        let response = await fetch(url, requestOptions);
        let json = await response.json();
    
        if (response.ok) {
          commit('setFriendname', data.friendname)
          commit('setChatId', json.chat_id);
        } else {
          throw new Error('Failed to create dialog');
        }
    
      } catch (error) {
        throw error;
      }
    },

    async getChats({ commit }) {
      const url = 'http://localhost:3000/api/chats?owner=' + localStorage.getItem('username');
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }
      try {
        let response = await fetch(url, requestOptions);
        let json = await response.json();
        if (response.ok) {
          console.log(json)
          commit('setChats', json)
        } else {
          throw new Error('Failed to get chats');
        }
      } catch (error) {
        throw error;
      }
    },

    async sendMessage({ commit }, data) {
      console.log('click')
      const url = 'http://localhost:3000/api/sendMessage'
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      try {
        let response = await fetch(url, requestOptions);
        let json = await response.json();
        if (response.ok) {
          console.log(json)
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        throw error;
      }
    }


  },

  getters: {
    getAuthorized(state) {
      return state.authorized
    },
    getAccessToken(state) {
      return state.access_token
    },
    getUsername(state) {
      return state.username
    },
    getFriendname(state) {
      return state.friendname
    },

    getChats(state) {
      return state.chats
    },

    getChatId(state) {
      return state.chatId
    }
  }
})
