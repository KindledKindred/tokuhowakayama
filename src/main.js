import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.config.productionTip = false

Vue.use(VueScrollReveal, {
  duration: 900,
  distance: '300px',
  easing: 'ease-in-out',
  reset: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
