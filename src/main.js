// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import request from 'request'
Vue.prototype.$http = request
Vue.config.productionTip = false
Vue.use(ElementUI)
window.eventBus = new Vue()
window.baseUrl = 'http://127.0.0.1'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
