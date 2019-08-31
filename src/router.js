import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)


export default new Router({
	base: process.env.BASE_URL,
	routes: [{ //首页的路由
			path: '/',
			name: 'home',
			component: Home
		},
		{ //App制作的路由
			path: '/make',
			name: 'make',
			component: () => import('./views/Make.vue')
		},
		{ //新闻动态的路由
			path: '/news',
			name: 'news',
			meta:{keepAlive: true},
			component: () => import('./views/News.vue'),
			children: [{
					path: '/',
					name: 'industryNews',
					meta:{keepAlive: true},
					component:resolve => require(['./components/industryNews.vue'],resolve),
				},
				{
						path: '/industryNews',
						name: 'industryNews',
						meta:{keepAlive: true},
						component:resolve => require(['./components/industryNews.vue'],resolve),
					},
				{
					path: '/enterpriseNews',
					name: 'enterpriseNews',
					meta:{keepAlive: true},
					component:resolve => require(['./components/enterpriseNews.vue'],resolve),
				},
				{
					path: '/developmentNews',
					name: 'developmentNews',
					meta:{keepAlive: true},
					component:resolve => require(['./components/developmentNews.vue'],resolve),
				}
			]
		},
		{ //网站开发的路由
			path: '/web',
			name: 'web',
			component: () => import('./views/Web.vue')
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('./views/About.vue'),
		},
		{ //小程序的路由
			path: '/wxapp',
			name: 'wxapp',
			component: () => import('./views/Wxapp.vue')
		},
	]
})