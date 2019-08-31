<template>
  <div class="horselight">
	<el-carousel :interval="5000" arrow="always">
		<el-carousel-item v-for="item in bannerImgs" :key="item.id" class="imgSize">
			<img :src=item.bannerSrc alt="">
		</el-carousel-item>
	</el-carousel>
  </div>
</template>

<script>
export default {
	//这是轮播图
  name: 'v-horselight',
  data(){
	  return{
		  bannerImgs: [{
		  		id: 1,
		  		bannerSrc: require("../assets/images/banner_01.png")
		  	},
		  	{
		  		id: 2,
		  		bannerSrc: require("../assets/images/banner_02.png")
		  	},
		  	{
		  		id: 3,
		  		bannerSrc: require("../assets/images/banner_03.png")
		  	}
		  ]
	  }
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
