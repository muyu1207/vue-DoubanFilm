import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'

Vue.use(Router)

export default[{
  path:'/',//路径
  component:App,//映射的组件
  children: [
    //首页
    {
      path: '',
      component: r=>require.ensure([],() => r(require('../views/index')),'index')
    },

    //内置过度动画
    {
      path: '/animation',
      name:'animation',
      component: r=>require.ensure([],() => r(require('../views/animation')),'index')
    },

  ]
}]
