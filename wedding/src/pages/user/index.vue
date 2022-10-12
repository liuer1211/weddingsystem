<template>
	<div class="user-main">
		<div class="back-icon" @click="$router.back()">
      <van-icon name="arrow-left" />
    </div>
		<div>
    </div>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
  .user-main{
    position: relative;
    .back-icon{
      position: fixed;
      width: 20/100rem;
      height: 20/100rem;
      top: 12/100rem;
      left: 12/100rem;
      i{
        width: 20/100rem;
        height: 20/100rem;
        color: #F27306;
      }
    }
  }
	
</style>