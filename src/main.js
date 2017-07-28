import Vue from 'vue'

import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'


Vue.use(ElementUI)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
