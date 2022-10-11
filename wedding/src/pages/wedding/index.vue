<template>
  <div>
    <!-- 导航栏 -->
		<van-nav-bar
			title="婚庆"
			left-arrow
			@click-left="$router.back()"
		/>
    <div class="hei"></div>
    <div class="wed-cen">
      <div>
        <img :src="getImg('wed1.png')">
        <div class="left">
          <div>夏日风情</div>
          <div>鱼水千年合，芝兰百世馨</div>
          <Start score="4.5"/>
        </div>
        <div class="right">$999</div>
      </div>
    </div>
    <div class="hei i"></div>
    <!-- 底部 -->
    <van-tabbar v-model="active" active-color="#F27306" inactive-color="#000">
      <van-tabbar-item icon="home-o" @click="$router.replace('/home')">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o">领证</van-tabbar-item>
      <van-tabbar-item icon="fire-o" @click="$router.replace('/chat')">最热</van-tabbar-item>
      <van-tabbar-item icon="birthday-cake-o" @click="$router.replace('/wedding')">婚庆</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Start from '../../components/start/start'
export default{
  components:{
    Start
  },
  data(){
    return{
      active: 3,
    }
  },
  methods:{
    // 动态拼接图片地址
    getImg(data) {
      if (data) {
        let img = require(`../../assets/images/home/${data}`)
        return img;
      }
    },
  }
}
</script>

<style lang='less' scoped>
  // 头部
  /deep/ .van-nav-bar {
		position: fixed;
		width: 100%;
		background-color: #ffd6a0;
	}
	/deep/ .van-nav-bar__content {
		height: 50/100rem;
	}
	/deep/ .van-nav-bar .van-icon {
    color: #F27306;
	}
  // 底部
  /deep/ .van-tabbar{
    background-color: #ffd6a0;
    border-top-left-radius: 20/100rem;
    border-top-right-radius: 20/100rem;
  }
  /deep/ .van-tabbar-item--active{
    background-color: initial;
  }
  .hei{
    height: 54/100rem;
    &.i{
      height: 50/100rem;
    }
  }
  // 主体
  .wed-cen{
    padding: 12/100rem;
    box-sizing: border-box;
    >div{
      position: relative;
      img{
        width: 100%;
        height: 538/100rem;
        display: block;
        object-fit: cover;
        border-radius: 20/100rem;
        border: 1/100rem solid #f3af34;
        box-sizing: border-box;
      }
      .left{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        line-height: 30/100rem;
        z-index: 1;
        padding: 12/100rem;
        box-sizing: border-box;
        color: #fff;
        background-image: linear-gradient(to bottom, #373737d1, #646464c7);
        border-top-left-radius: 4/100rem;
        border-top-right-radius: 4/100rem;
        border-bottom-right-radius: 20/100rem;
        border-bottom-left-radius: 20/100rem;
        >div{
          &:nth-child(1){
            font-weight: 600;
          }
        }
      }
      .right{
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 2;
        padding: 12/100rem;
        box-sizing: border-box;
        color: #fff;
        background-color: #00000085;
        border-top-left-radius: 20/100rem;
        border-top-right-radius: 4/100rem;
        border-bottom-right-radius: 20/100rem;
        border-bottom-left-radius: 4/100rem;
      }
    }
  }
</style>