import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)
Vue.config.productionTip = false


import COIconnexion from './components/COIconnexion'
import COIInscription from './components/COIInscription'
import COIVillage from './components/COIVillage'
import COIattaque from './components/COIattaque'


const routes = [
  {path: '/connexion', component: COIconnexion},
  {path: '/inscription', component: COIInscription},
  {path: '/village', component: COIVillage},
  {path: '/attaque', component: COIattaque},
 
]

const router = new VueRouter ({
  routes
  
})
new Vue({
  router,
  render: h => h(App)  
}).$mount('#app')