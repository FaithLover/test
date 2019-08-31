<template>
	<div class="news">
		<div id="content">
			<!-- 轮播图开始 -->
			<Horselight></Horselight>
			<!-- 轮播图结束 -->
			<!-- 动态开始 -->
			<div class="trend">
				<div class="tags">
					<ul>
						<router-link to="/industryNews">行业动态</router-link>
						<router-link to="/enterpriseNews">企业动态</router-link>
						<router-link to="/developmentNews">开发动态</router-link>
					</ul>
				</div>
				<!-- 动态结束 -->
				<router-view></router-view>
				
			</div>
		</div>
	</div>
</template>

<script>
	import '../assets/js/lazyload.js';
	import Horselight from '@/components/v-horselight'
	import developmentNews from '@/components/developmentNews'
	import enterpriseNews from '@/components/enterpriseNews'
	import industryNews from '@/components/industryNews'
	export default {
		name: 'News',
		components: {
			Horselight,
			developmentNews,
			enterpriseNews,
			industryNews
		}
	}
</script>

<style scoped>
	@import url("../assets/css/news.css");
</style>
