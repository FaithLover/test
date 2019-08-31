import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  router from './router.js'
import App from './App.vue'
import VueResource from 'vue-resource'


import jquery from 'jquery'
window.jquery = window.$ = jquery


Vue.use(VueResource)

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
 router,
  render: h => h(App),
}).$mount('#app')