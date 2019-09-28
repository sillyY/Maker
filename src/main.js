import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css';


// 验权
import router from './router/index'
import store from './store/index'

import '@/assets/style/reset.css'
import '@/assets/style/style.scss'


Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
