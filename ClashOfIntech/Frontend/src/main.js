import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

import COIconnexion from './components/COIconnexion.vue'

const routes = [
  {path: '/connexion', components: COIconnexion}
]

const router = new VueRouter ({
  routes
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')