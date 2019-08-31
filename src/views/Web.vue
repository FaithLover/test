<template>
	<div id="web" class="web">
		<div id="content">
			<Horselight></Horselight>
			<!-- web开发主内容 s-->
			<div class="web-development">
				<!-- web类型介绍 s-->
				<el-container>
					<div class="web-Title">
						<p class="webTitleTxt webTitle">两种不同全网型官网</p>
						<p class="webTitleTxt webTitle-tow">专业准确高品质的完成客户的不同需求，提供一站式服务</p>
					</div>
					<el-main style='overflow: initial;'>
						<div class="procedures">
							<el-row :gutter="20" style='background:none'>
								<el-col class="web-cont" :xs="24" :sm="24" :md="24" :lg="24">
									<img class="web-icon" src="../assets/images/web/A.png">
									<el-container>
										<el-container>
											<el-main style='padding:0;' class="webTitleTxt webTitle webTitle-align-L">PC官网、手机官网+小程序</el-main>
											<el-main style='padding:0;' class="webTitleTxt webTitle-tow webTitle-align-L">管理方式：一个后台管理，发布不同内容到各个站点。</el-main>
											<el-main style='padding:0;' class="webTitleTxt webTitle-tow webTitle-align-L">适用客户：业务偏重于移动端，需要不同终端呈现不同内容。</el-main>
											<el-footer height="0"></el-footer>
										</el-container>
									</el-container>
								</el-col>
							</el-row>
							<el-footer></el-footer>
							<el-row :gutter="20" style='background:none'>
								<el-col class="web-cont" :xs="24" :sm="24" :md="24" :lg="24">
									<img class="web-icon" src="../assets/images/web/B.png">
									<el-container>
										<el-container>
											<el-main style='padding:0;' class="webTitleTxt webTitle webTitle-align-L">响应式自适应网站</el-main>
											<el-main style='padding:0;' class="webTitleTxt webTitle-tow webTitle-align-L">管理方式：一个后台并且发布相同内容到所有网站。</el-main>
											<el-main style='padding:0;' class="webTitleTxt webTitle-tow webTitle-align-L">适用客户：产品、企业形象、品牌，需要保持整体传播和认知。</el-main>
											<el-footer height="0"></el-footer>
										</el-container>
									</el-container>
								</el-col>
							</el-row>
						</div>
					</el-main>
					<el-footer height="0"></el-footer>
				</el-container>
				<!-- web类型介绍 e-->
				<!-- web优势-图片 s -->
				<div class="web-Title">
					<p class="webTitleTxt webTitle">万户八大优势</p>
					<img width="100%" src="../assets/images/web/advantage.png" alt="">
				</div>
				<!-- web优势-图片 e -->
			</div>

		</div>
	</div>
</template>

<script>
	import Horselight from '@/components/v-horselight'

	export default {
		name: 'make',
		data() {
			return {}

		},
		methods: {

		},
		components: {
			Horselight
		}
	}
</script>

<style scoped>
	.web .web-development {
		margin-top: 8em;
	}

	.web .webTitleTxt {
		text-align: center;
		font-family: PingFangSC;
		font-weight: 400;
	}

	.web .web-cont {
		position: relative;
		align-items: center;
	}

	.web .web-icon {
		left: -5.625rem;
		top: -3.75rem;
		position: absolute;
		z-index: 100;
	}

	.web .web-Title {
		margin-bottom: 8rem;
	}

	.web .webTitle {
		color: #4A4A4A;
		font-size: 3em;
	}

	.web .webTitle-tow {
		color: #949494;
		font-size: 1.75em;
		margin-top: 0.8em;
	}

	.web .webTitle-align-L {
		text-align: left;
		text-indent: 0em;
		margin: 0;
		font-family: PingFangSC;
	}
</style>
