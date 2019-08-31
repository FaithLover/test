<template>
	<div id="header" class="header">
		<el-row type="flex" class="row-bg " justify="center">
			<img src="../assets/images/logo.png" alt="" width="120" height="60" id="logoImg" class="hidden-sm-only">
			<el-menu class="el-menu-demo hidden-xs-only" mode="horizontal">
				<el-menu-item v-for="item in navList" :key="item.id">
					<router-link :to='item.path'>{{item.navName}}</router-link>
				</el-menu-item>
			</el-menu>
			<el-row class="block-col-6 hidden-sm-and-up">
				<el-col :span="24" id="navBtn">
					<el-dropdown trigger="click">
						<span class="el-dropdown-link">
							菜单<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown" class="dropDown">
							<el-dropdown-item icon="el-icon-plus" v-for="item in navList" :key="item.id">
								<router-link :to='item.path'>{{item.navName}}</router-link>
							</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</el-col>
			</el-row>
		</el-row>
	</div>
</template>

<script>
	import 'element-ui/lib/theme-chalk/display.css';
	export default {
		name: 'v-header',
		data() {
			return {
				navList: [{
						id: 1,
						navName: "首页",
						path: "/"
					},
					{
						id: 2,
						navName: "小程序",
						path: "/Wxapp"
					},
					{
						id: 3,
						navName: "网站开发",
						path: "/Web"
					},
					{
						id: 4,
						navName: "APP制作",
						path: "/Make"
					},
					{
						id: 5,
						navName: "新闻开发",
						path: "/News"
					},
					{
						id: 6,
						navName: "关于我们",
						path: "/About"
					}
				],
			}
		},
		props: {
			msg: String,
		},
	}
</script>

<style>

</style>
