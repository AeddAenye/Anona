import { createStore } from 'vuex'

export default createStore({
  state: {
    authorized: localStorage.getItem('authorized') === 'true',
    access_token: localStorage.getItem('access_token'),
    username: localStorage.getItem('username'),
    friendname: 'None',

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
        } else {
          throw new Error('Failed to create dialog');
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
    }
  }
})
