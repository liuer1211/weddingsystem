import Vue from 'vue'
import App from './App.vue' // 主组件
import router from './router' // 路由
import './utils/vants' // 按需加载vant

// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

Vue.config.productionTip = false

//引入自定义插件
import * as directives from '@/plugins/focus';
Object.keys(directives).forEach(key=>{
  Vue.directive(key, directives[key])
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
