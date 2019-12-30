import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/theme/index.css'
import '@/styles/reset.css'
import http from '@/api/index.js'
Vue.prototype.$http = http
import urls from '@/api/api'
Vue.prototype.$urls = urls

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
