<template>
	<div id="footer">
		<el-container direction="vertical" class="container">
			<el-row :gutter="20">
				<el-col :span="6" v-for="(item,i) in footerTitle" :key = "item[0].id">
					<div class="grid-content bg-purple">
						<h1>{{item[0].title}}</h1>
						<div class="right"></div>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple" id="code">
						<img src="../assets/images/qixin_code.jpg" alt="琪心科技" width="180" height="180" >
					</div>
				</el-col>
			</el-row>
		</el-container>	
		<div class="address">
			<p>公司地址：广东省-广州市-天河区中山大道传媒大厦-503</p>
		</div>
	</div>
</template>

<script>
	
	
	export default {
		name:'v-footer',
		data(){
			return{
				footerTitle:[
					[{id:1,title:'关于琪心'},'新闻动态11','行业动态','联系我们','合作伙伴'],
					[{id:2,title:'解决方案'},'新闻动态22','行业动态','联系我们','合作伙伴'],
					[{id:3,title:'服务'},'新闻动态33','行业动态','联系我们','合作伙伴'],
				],
			}
		},
		methods: {
			footerData() {
				for (var i = 0; i < this.footerTitle.length; i++) {
					var data = this.footerTitle[i]
					for (var i = 1; i < data.length; i++) {
						var dataList = data[i]
						$('#footer .container .right').append("<p><a>"+dataList+"</a></p>")
					}
				}	
			}
		},
		mounted:function(){
			this.footerData()
		}
	}
</script>
	
<style>
	
</style>
