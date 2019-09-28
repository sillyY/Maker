const order = {
  state: {
    user: {},
    style: {},
    fabric: {},
    embroidery: {},
    address: {},
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_STYLE: (state, style) => {
        state.style = style
    },
    SET_FABRIC: (state, fabric) => {
        state.fabric = fabric
    },
    SET_EMBROIDERY: (state, embroidery) => {
        state.embroidery = embroidery
    },
    SET_ADDRESS: (state, address) => {
        state.address = address
    }
  },
  actions: {
    SetUser({ commit }, opts) {
      commit('SET_USER', opts)
    },
  }
}

export default order
