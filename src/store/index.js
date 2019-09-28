import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import order from './modules/order'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		auth,
		order
	},
	// getters
})

export default store
