<template>
	<div class="about">
		<div id="content">
			<!-- 公司简介开始 -->
			<el-row :gutter="10" class="introduce" style="margin: 0;">
				<el-col :xs="24" :sm="12" :md="10" :lg="10" :xl="10">
					<div class="pictrue">
						<img src="../assets/images/wallhaven-45ro87@2x.png" alt="">
					</div>
				</el-col>
				<el-col :xs="24" :sm="10" :md="12" :lg="12" :xl="12">
					<div class="font">
						<h3>公司简介</h3>
						<p>
							琪心（广州）科技有限公司成立于2019年，我司是一家专业IT开发公司，专注于APP开发，微信公众号开发，小程序开发，分销商城，微商城，网站建设等系统开发服务，帮助企业发展赢得市场先机！</p>
						<p>我们的理念：“追求技术，开拓创新”，我们公司秉承客户至上、服务至上的经营理念，以卓越的t服务品质、专业的技术服务实力、技术精湛的客户服务团队，保障客户在信息时代的高速路上驰骋，又以稳固、发展、忠诚、高效、团结与创新的精神，尊重人才注重技术，使客户在享受信息科技发展最新成果的同时不断获得最大的收益。</p>
					</div>
				</el-col>
			</el-row>
			<!-- 公司简介结束 -->

			<!-- 公司价值观开始 -->
			<el-row :gutter="10" class="value" style=" margin: 0 auto;padding: 0;">

				<div class="text">
					<h2>公司价值观</h2>
					<p>成就客户+团队合作+诚心靠谱+持续改善+永葆激情+高效敬业</p>
				</div>
				<el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" class="value_list" v-for="value in valueList" :key="value.id"
				 style="padding: 0;">
					<img :src="value.imgSrc">
					<h2>{{value.title}}</h2>
					<div style="width: 3.125rem;margin: 10px auto;border-bottom: 5px solid #1676E5;"></div>
					<p>{{value.content}}</p>
				</el-col>

			</el-row>
			<!-- 公司价值观结束 -->

			<!-- 选择我们的理由开始 -->
			<el-row :gutter="10" class="reason" style="align-items: flex-start;flex-wrap: wrap;"  type="flex" justify="end">
				<el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12"  style="display: flex; justify-content:space-between;">
					<el-col :xs="1" :sm="1" :md="1" :lg="1" :xl="1" style="min-width:0.1em;">
						<div></div>
					</el-col>
					<el-col :xs="23" :sm="23" :md="23" :lg="14" :xl="14">
						<div class="font">
							<h3>选择我们的理由</h3>
							<p>
								<span style="color:#1676E5;">节省开支:</span>对中小型企业，计算机数量不多，如雇专职工程师需要支付相应的工资、福利和社保等费用，而维护工作量又不大，因而支出会显得较高。而采用我们公司的服务，可以大大降低因系统维护而造成的相关费用，节约企业开支。
							</p>
							<p><span style="color:#1676E5;">经验丰富、技术专业:</span>我们为企业提供强大服务，包括建立开发档案、客户开发记录、系统维护记录等服务项目。我们的工程师不仅经开发验丰富，而且随时能获得公司强大的技术支持，保障用户的开发可以正常进行开发并顺利交接。</p>

						</div>
					</el-col>
				</el-col>
				<el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
					<div class="pictrue">
						<img src="../assets/images/right.jpg" alt="">
					</div>
				</el-col>
			</el-row>
			<!-- 选择我们的理由结束 -->
		</div>
	</div>
</template>

<script>
	export default {
		name: 'about',
		components: {

		},
		data() {
			return {
				valueList: [{
						id: 1,
						imgSrc: require("../assets/images/medal.png"),
						title: " 成就客户",
						content: "客户就是衣食父母",
					},
					{
						id: 2,
						imgSrc: require("../assets/images/team.png"),
						title: "团队合作",
						content: "共享共担，平凡人做非平凡事",
					},
					{
						id: 3,
						imgSrc: require("../assets/images/sincerity.png"),
						title: " 诚信靠谱",
						content: "诚实正直，做事靠谱",
					},
					{
						id: 4,
						imgSrc: require("../assets/images/book.png"),
						title: " 持续改善",
						content: "不断进步，持续学习",
					},
					{
						id: 5,
						imgSrc: require("../assets/images/idea.png"),
						title: " 永葆激情",
						content: "乐观向上，永不言弃",
					},
					{
						id: 6,
						imgSrc: require("../assets/images/rocket.png"),
						title: " 高效敬业",
						content: "高效执行，专业执着",
					}
				]
			}
		},

	}
</script>


<style scoped>
	@import url("../assets/css/about.css");
</style>
