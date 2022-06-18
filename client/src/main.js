import Vue from 'vue'
import App from './App.vue'
import router from './router'
import cookie from 'vue-cookie'

Vue.config.productionTip = false
Vue.use(cookie)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
