import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'belvoly-form-studio/dist/belvoly-form-studio.css'
import 'belvoly-form-studio/dist/belvoly-form-studio.css'
import { initControls } from './components/controls'

Vue.use(ElementUI)

Vue.config.productionTip = false
initControls()

new Vue({
  render: h => h(App)
}).$mount('#app')
