import Vue from 'vue'
import App from './App.vue' // 主组件
import router from './router' // 路由
import './utils/vants' // 按需加载vant

// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

Vue.config.productionTip = false

//引入自定义插件
import myPlugins from '@/plugins/focus';
Vue.use(myPlugins,{
    name:'focus'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
