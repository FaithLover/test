<template>
	<div id="make" class="make">
		<div id="content">
			<Horselight></Horselight>
			<!-- app制作主内容 s-->
			<div class="app-development">
				<!-- app制作介绍 s-->
				<el-container>
					<div class="make-Title">
						<p class="makeTitleTxt makeTitle">APP制作</p>
						<p class="makeTitleTxt makeTitle-tow">专业准确高品质的完成客户的需求，提供一站式服务</p>
					</div>
					<el-main>
						<el-row :gutter="20">
							<el-col :xs="8" :sm="8" :md="8" :lg="8" v-for="item in serviceList" :key="item.id">
								<div align="center" class="grid-content bg-purple" style="border: 0;">
									<img style='width: 80px;' :src="item.imgSrc">
									<h4 :style="{color:item.color}" style="font-size: 24px;margin:30px 0 20px ;">{{item.title}}</h4>
									<p style=" text-align: left; text-indent:0;margin: 0 12%;font-size: 14px; color: #4A4A4A;">{{item.content}}</p>
								</div>
							</el-col>
						</el-row>
					</el-main>
					<el-footer></el-footer>
				</el-container>
				<!-- app制作介绍 e-->

				<!-- app服务介绍 s-->
				<div class="app-service ">
					<el-container>
						<div class="make-Title">
							<p class="makeTitleTxt makeTitle">APP服务类型</p>
							<p class="makeTitleTxt makeTitle-tow">为顾客定制各种行业特色APP，我们不随波</p>
						</div>
						<el-main>
							<el-row :gutter="20" style='background:none'>
								<el-col :xs="12" :sm="12" :md="6" :lg="6" v-for="item in proceduresList" :key="item.id">
									<div class="service-content">
										<el-button style='width:5em; height:5em;' circle :style="{background:item.background}">
											<img style='margin: 0;width: 3rem;' :src="item.imgSrc">
										</el-button>
										<h4 style="font-size: 2em;margin-top: 10px;">{{item.title}}</h4>
										<p>{{item.content}}</p>
									</div>
								</el-col>
							</el-row>
						</el-main>
						<el-footer></el-footer>
					</el-container>
				</div>
				<!-- app服务介绍 e-->

				<!-- 案例 s-->
				<el-container style="margin-top:2.12rem;">
					<div class="make-Title">
						<p class="makeTitleTxt makeTitle">APP案例</p>
						<p class="makeTitleTxt makeTitle-tow">为顾客定制各种行业特色APP，我们不随波逐流</p>
					</div>
					<el-main>
						
						<div class="procedures">
							<el-row :gutter="20" style='background:none'>
								<el-col :xs="24" :sm="24" :md="12" :lg="12" v-for="item in caseLists" :key="item.id">
									<el-container style='margin:0.5em'>
										<el-aside style='width: 200px;border-radius:15px;height: 150px;' >
											<img v-if="item.examplePicList&&item.examplePicList[0].url" :src="item.examplePicList[0].url" >
											<!-- <img v-if="item.examplePicList!=null" v-for="imgUrl in item.examplePicList" :src="imgUrl.url" > -->
										</el-aside>
										<el-container>
											<el-header style='font-size: 24px;height:33px;line-height:33px;color: #414141;'>{{item.example.expName}}</el-header>
											<el-main style='font-size: 16px;height:48px;line-height:24px;color: #414141;overflow:hidden; text-overflow:ellipsis;'>{{item.example.expContent}}</el-main>									
											<el-footer style='color:#949494;font-size: 16px;'>
												来源：<a href="item.url">{{item.example.url}}</a>
												<p style="text-indent: 0em;">发表于：{{item.example.createTime}}</p>
											</el-footer>
										</el-container>
									</el-container>
								</el-col>
							</el-row>
						</div>
					</el-main>
					<el-footer height="0"></el-footer>
				</el-container>
				<!-- 案例 e-->
			</div>
			<!-- app制作主内容 e-->
		</div>
	</div>
</template>

<script>
	import Horselight from '@/components/v-horselight'

	export default {
		name: 'make',
		data() {
			return {
				serviceList: [{
						id: 1,
						imgSrc: require("../assets/images/make/ios.png"),
						title: "iOS开发",
						content: "iOS有着特定而广大基础上，营收更加容易，应用发布统一唯一，助你进行行业商业利益挖掘",
						color: "#1676E5"
					},
					{
						id: 2,
						imgSrc: require("../assets/images/make/android.png"),
						title: "Android开发",
						content: "安卓手机占据着手机市场70%，这庞大的用户量有利于客户的APP推广，跟容易获取第一桶金",
						color: "#78CC48"
					},
					{
						id: 3,
						imgSrc: require("../assets/images/make/h5.png"),
						title: "H5开发",
						content: "H5页面是跨体统的操作。随着微信用户的增多，H5页面的样式和数量都逐渐增多",
						color: "#E0A036"
					}
				],
				proceduresList: [{
						id: 1,
						imgSrc: require("../assets/images/make/make-shop.png"),
						title: "电商",
						background: "#A2D9FF",
					},
					{
						id: 2,
						imgSrc: require("../assets/images/make/make-hotel.png"),
						title: "酒店",
						background: "#FFA3A2",
					},
					{
						id: 3,
						imgSrc: require("../assets/images/make/make-restaurant.png"),
						title: "餐饮",
						background: "#B2E993",
					},
					{
						id: 4,
						imgSrc: require("../assets/images/make/make-finance.png"),
						title: "金融",
						background: "#EECE66",
					},
					{
						id: 5,
						imgSrc: require("../assets/images/make/make-logistics.png"),
						title: "物流",
						background: "#D99CEE",
					},
					{
						id: 6,
						imgSrc: require("../assets/images/make/make-tourism.png"),
						title: "旅游",
						background: "#D99CEE",
					},
					{
						id: 7,
						imgSrc: require("../assets/images/make/make-movies.png"),
						title: "影视",
						background: "#EECE66",
					},
					{
						id: 8,
						imgSrc: require("../assets/images/make/make-socialContact.png"),
						title: "社交",
						background: "#A2D9FF",
					},
					{
						id: 9,
						imgSrc: require("../assets/images/make/make-realEstate.png"),
						title: "地产",
						background: "#FFA3A2",
					},
					{
						id: 10,
						imgSrc: require("../assets/images/make/make-cure.png"),
						title: "医疗",
						background: "#B2E993",
					}
				],
				caseLists:""
			}

		},
		mounted() {
			this.$http.get('http://192.168.31.230:8081/example/getExampleAndPicinfo').then(function(result) {
				// console.log(1)
				// console.log(result.body)
				this.caseLists = result.body.data.exampleAndPicVo;
			})
		},
		methods: {

		},
		components: {
			Horselight
		}
	}
</script>

<style scoped>
.make	.app-development {
		margin-top: 8em;
	}

.make	.makeTitleTxt {
		text-align: center;
		font-family: PingFangSC;
		font-weight: 400;
	}

.make	.make-Title {
		margin-bottom: 2.12rem;
	}

.make	.makeTitle {
		color: #4A4A4A;
		font-size: 3em;
	}

.make	.makeTitle-tow {
		color: #949494;
		font-size: 1.25em;
		margin-top: 0.8em;
	}

.make	.app-service {
		padding-top: 2.12rem;
		width: 100%;
		background: no-repeat url(../assets/images/make/clock-background.png);
		background-size: 100% 100%;
	}

.make	.service-content {
		text-align: center;
	}
</style>
