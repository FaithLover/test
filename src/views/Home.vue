<template>
	<div class="home">
		<div id="content">
			<Horselight></Horselight>
			<el-container direction="vertical">
				<div class="service">
					<h1>服务范围</h1>
					<el-row :gutter="20">
						<el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="item in serviceList" :key="item.id">
							<div class="grid-content bg-purple">
								<img :src=item.imgSrc>
								<h4>{{item.title}}</h4>
								<p>{{item.content}}</p>
							</div>
						</el-col>
					</el-row>
				</div>
				<div class="procedures">
					<h1>小程序</h1>
					<el-row :gutter="20">
						<el-col :xs="24" :sm="12" :md="8" :lg="6" v-for="item in proceduresList" :key="item.id">
							<div class="grid-content bg-purple">
								<img :src=item.imgSrc>
								<h4>{{item.title}}</h4>
								<p style="font-size: 12px;">{{item.content}}</p>
								<a href="" class="consult">立即咨询</a>
							</div>
						</el-col>
					</el-row>
				</div>
			</el-container>
		</div>
	</div>
</template>

<script>
	import Horselight from '@/components/v-horselight'
	export default {
		name: 'home',
		data() {
			return {
				serviceList: [{
						id: 1,
						imgSrc: require("../assets/images/service_icon01.png"),
						title: "微信小程序",
						content: "小程序是微信在2016年9月开始推出，君实紧跟技术大潮，不断创新，现已掌握了微信小程序开发的技术，可全面满足企业对小程序的开发需求。"
					},
					{
						id: 2,
						imgSrc: require("../assets/images/service_icon02.png"),
						title: "微信小程序",
						content: "小程序是微信在2016年9月开始推出，君实紧跟技术大潮，不断创新，现已掌握了微信小程序开发的技术，可全面满足企业对小程序的开发需求。"
					},
					{
						id: 3,
						imgSrc: require("../assets/images/service_icon03.png"),
						title: "微信小程序",
						content: "小程序是微信在2016年9月开始推出，君实紧跟技术大潮，不断创新，现已掌握了微信小程序开发的技术，可全面满足企业对小程序的开发需求。"
					},
					{
						id: 4,
						imgSrc: require("../assets/images/service_icon04.png"),
						title: "微信小程序",
						content: "小程序是微信在2016年9月开始推出，君实紧跟技术大潮，不断创新，现已掌握了微信小程序开发的技术，可全面满足企业对小程序的开发需求。"
					}
				],
				proceduresList: [{
						id: 1,
						imgSrc: require("../assets/images/service_icon01.png"),
						title: "微信小程序",
						content: "小程序是微信在2016年9月开始推出，君实紧跟技术大潮，不断创新，现已掌握了微信小程序开发的技术，可全面满足企业对小程序的开发需求。"
					},
					{
						id: 2,
						imgSrc: require("../assets/images/service_icon01.png"),
						title: "微信小程序",
						content: "小程序是微信在2016年9月开始推出，君实紧跟技术大潮，不断创新，现已掌握了微信小程序开发的技术，可全面满足企业对小程序的开发需求。"
					},
					{
						id: 3,
						imgSrc: require("../assets/images/service_icon01.png"),
						title: "微信小程序",
						content: "小程序是微信在2016年9月开始推出，君实紧跟技术大潮，不断创新，现已掌握了微信小程序开发的技术，可全面满足企业对小程序的开发需求。"
					},
					{
						id: 4,
						imgSrc: require("../assets/images/service_icon01.png"),
						title: "微信小程序",
						content: "小程序是微信在2016年9月开始推出，君实紧跟技术大潮，不断创新，现已掌握了微信小程序开发的技术，可全面满足企业对小程序的开发需求。"
					},
					{
						id: 5,
						imgSrc: require("../assets/images/service_icon01.png"),
						title: "微信小程序",
						content: "小程序是微信在2016年9月开始推出，君实紧跟技术大潮，不断创新，现已掌握了微信小程序开发的技术，可全面满足企业对小程序的开发需求。"
					},
					{
						id: 6,
						imgSrc: require("../assets/images/service_icon01.png"),
						title: "微信小程序",
						content: "小程序是微信在2016年9月开始推出，君实紧跟技术大潮，不断创新，现已掌握了微信小程序开发的技术，可全面满足企业对小程序的开发需求。"
					},
					{
						id: 7,
						imgSrc: require("../assets/images/service_icon01.png"),
						title: "微信小程序",
						content: "小程序是微信在2016年9月开始推出，君实紧跟技术大潮，不断创新，现已掌握了微信小程序开发的技术，可全面满足企业对小程序的开发需求。"
					},
					{
						id: 8,
						imgSrc: require("../assets/images/service_icon01.png"),
						title: "微信小程序",
						content: "小程序是微信在2016年9月开始推出，君实紧跟技术大潮，不断创新，现已掌握了微信小程序开发的技术，可全面满足企业对小程序的开发需求。"
					}
				],
			}
		},
		props: {
			msg: String,
		},
		components: {
			Horselight
		}
	}
</script>

<style>
</style>
