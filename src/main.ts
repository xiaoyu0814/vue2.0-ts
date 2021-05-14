import Vue from 'vue'
import App from './App.vue'
import { HttpService } from './http/http'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$http = new HttpService();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
