import Vue from 'vue'

//路由
import VueRouter from 'vue-router'
import routes from './router/index'
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

//UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)

//数据获取
import VueResource from 'vue-resource'
Vue.use(VueResource);




import App from './App'
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
