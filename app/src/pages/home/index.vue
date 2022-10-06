<template>
	<div class="home-main">
		<!-- 搜索 -->
		<div></div>
		<!-- 轮播图 -->
		<div></div>
		<!-- 九宫格 -->
		<div>
			<div @click="toSign('1')">签到</div>
		</div>
		<!-- 列表 -->
		<div></div>
		<!-- 底部 -->
		<div></div>
	</div>
</template>

<script>
	export default {
		data(){
			return{}
		},
		methods:{
			// 签到
			toSign(code){
				switch(code){
					case '1':
					  console.log(this.$router,this.$route)
						this.$router.push({
							path:'/signin'
						})
						break;
					default:
						break;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>