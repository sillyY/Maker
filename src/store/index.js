import Vue from 'vue'
import Vuex from 'vuex'

import components from './modules/components'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		components
	},
})

export default store
