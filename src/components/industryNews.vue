<template>
	<div class="industryNews">
				<router-view></router-view>
					<el-row :gutter="20" style="max-width: 800px;margin: 0 auto;" >
						<el-col v-for="industry in industryList" :key="industry.id" class="newsChild" :xs="24" :sm="12" :md="12" :lg="12" :xl="12" >
							<img :src="industry.pics[0].url">
							<div class="font">
								<h3>{{industry.newsTitle}}</h3>
								<h4>{{industry.newsContent}}</h4>
								<p>{{industry.newsSource}}</p>
								<p>{{industry.publicTime}}</p>
							</div>
						</el-col> 
					</el-row> 
				<!-- 分页开始 -->
				<div class="paging">
					<el-pagination 
					@current-change="usecaseMethods"
					:page-size="14"
					:total="total"
					layout="prev, pager, next">
					</el-pagination>
				</div>
				<!-- 分页结束 -->
	</div>
</template>

<script>
	export default {
		name: 'industryNews',
		components: {
		},
		data() {
			return {
				industryList: null,
				total:0,
			}
		},
		methods: {
			postList() {
				this.$http.post('http://192.168.31.33:8081/news/selectType',{'type':1,'page':1,'size':14},{emulateJSON:true}).then(function(data) {
					this.industryList = data.body.data.records; 
					this.total=data.body.data.total;
				});
		
			},
			usecaseMethods(page){
				 this.$http.post('http://192.168.31.33:8081/news/selectType',{'type':1,'page':page,'size':14},{emulateJSON:true}).then(function(data) {
				 	this.industryList = data.body.data.records;
				 	window.console.log(data.body.data);
				 });
			}
		},
		mounted: function() {
			this.postList();
			
		},
	}
</script>

<style scoped>
	@import url("../assets/css/news.css");
</style>
