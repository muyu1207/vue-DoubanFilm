# douban-film

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

##安装Element ui
npm i element-ui -S
http://element.eleme.io/#/zh-CN/component/transition

##配置 Element ui
>修改 main.js
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






