import Vue from 'vue'
import App from './App.vue' // 主组件
import router from './router' // 路由
import './utils/vants' // 按需加载vant

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
