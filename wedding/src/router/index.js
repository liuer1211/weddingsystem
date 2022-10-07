import vue from 'vue';
import vueRouter from 'vue-router';

vue.use(vueRouter);

const routes = [
  {
    name: 'home',
    path: '/home',
    component: () => import('../pages/home')
  },
  {
    path: '/',
    redirect: '/home'
  }
]

export default new vueRouter({
  routes
})