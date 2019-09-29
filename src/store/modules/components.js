import compile from '@/compiler/index.js'
const components = {
  state: {
    subs: []
  },
  mutations: {
    SET_COMPONENT: (state, component) => {
      let template = compile(component)
      if (!template) return
      state.subs.push(template)
    }
  },
  actions: {}
}

export default components
