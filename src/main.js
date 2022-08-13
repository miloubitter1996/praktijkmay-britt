import Vue from 'vue'
import App from './App.vue'
import '@babel/polyfill'

Vue.config.productionTip = false

// import vuetify from "../src/plugins/vuetify";
import vuetify from './plugins/vuetify'

// Style
import './style/style.scss'

new Vue({
  render: (h) => h(App),
  vuetify,
}).$mount('#app')
