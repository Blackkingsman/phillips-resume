import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
//import HelloWorld from './components/HelloWorld'
//import task from './components/task'
import BootstrapVue from 'bootstrap-vue'



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify';

const VueScrollTo = require('vue-scrollto')

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueScrollTo)


Vue.config.productionTip = false

const router = new VueRouter({
   mode: 'history'
})
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
