// 路由模块

// 引入vue
import Vue from 'vue'
import VueRouter from 'vue-router'

// use
Vue.use(VueRouter)

// 引入组件
import Home from '../components/Home.vue'
import Weather from '../components/Weather.vue'
import Qiwen from '../components/Qiwen.vue'  
import Xingshi from '../components/xingshi.vue'  

// 定义路由
var router = new VueRouter({
	routes : [
		{
			path : '/home',
			name : 'home',
			component : Home
		},
		{
			path : '/weather',
			name : 'weather',
			component : Weather
		},
		{
			path : '/qiwen',
			name : 'qiwen',
			component : Qiwen
		}, 
		{
			path : '/xingshi',
			name : 'xingshi',
			component : Xingshi
		}, 
		{
			path : '/*',
			redirect : '/home'
		}
	]
})


// 暴露模块
export default router
