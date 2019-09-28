import { getToken, setToken, removeToken } from '@/utils/auth'
const user = {
  state: {
    user: {}
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    }
  },
  actions: {
    GetUserInfo({ state, dispatch }) {
      let user = JSON.parse(getToken())
      if (!state.user.userId) {
        dispatch('SetUserInfo', user)
      }
    },
    SetUserInfo({ commit }, opts) {
      commit('SET_USER', opts)
      setToken(JSON.stringify(opts))
    },
    Logout({ commit }) {
      commit('SET_USER', {})
      removeToken()
    }
  }
}

export default user
