import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
	{
		name: 'home',
		path: '/home',
		component: () => import('../pages/home')
	},
	{
		name: 'signin',
		path: '/signin',
		component: () => import('../pages/signin')
	},
	{
		path: '/',
		redirect: '/home'
	}
];

export default new VueRouter({
	routes
})

