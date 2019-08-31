<template>
  <div class="main">
    <mainHeader></mainHeader>
	<router-view/>
	<mainFooter ></mainFooter>
  </div>
</template>

<script>
	import mainHeader from '@/components/v-header'
	import mainFooter from '@/components/v-footer'
	import mainHome from '@/views/Home.vue'
	

export default {
  name: 'v-main',
  props: {
    msg: String
  },
  methods: {
		
  },
  components: {
  	mainHeader,
	mainFooter,
	mainHome,
  },
}
</script>
<style scoped>
	@import url("../assets/css/public.css");
	@import url("../assets/css/index.css");
	@import url("../assets/css/common.css");
</style>
