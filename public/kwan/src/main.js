import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router/index'
import store from './store/index'
import { rtdbPlugin } from 'vuefire'

Vue.use(rtdbPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')