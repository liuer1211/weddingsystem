<template>
  <div>
    <!-- 头部 -->
    <van-search 
      v-model="searchVal" 
      placeholder="结婚幸福吧"
      background="#fedeb5"
      @focus="$router.push('/search')"
    />
    <div class="hei"></div>
    <!-- 轮播图 -->
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in swiperList" :key="index">
          <img :src="getImg(item.img)" />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 九宫格 -->
    <van-grid :column-num="4" square :border="false">
      <van-grid-item 
        v-for="(item,i) in pageList" 
        :key="i" 
        :icon="item.icon" 
        :text="item.name"
        @click="toPage(i)"
      />
    </van-grid>
    <!-- 列表 -->
    <div class="info-list">
      <div class="info-model" v-for="val in 3" :key="val">
        <div class="left">
          <img :src="getImg('c4.png')">
        </div>
        <div class="right">
          <h2>婚庆公司</h2>
          <div class="der">婚庆公司</div>
          <div class="bot">浏览次数：222</div>
        </div>
      </div>
    </div>
    <div class="hei i"></div>
    <!-- 底部 -->
    <van-tabbar v-model="active" active-color="#F27306" inactive-color="#000">
      <van-tabbar-item icon="home-o" @click="$router.replace('/home')">首页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" @click="$router.replace('/marriage')">领证</van-tabbar-item>
      <van-tabbar-item icon="fire-o" @click="$router.replace('/chat')">最热</van-tabbar-item>
      <van-tabbar-item icon="birthday-cake-o" @click="$router.replace('/wedding')">婚庆</van-tabbar-item>
      <van-tabbar-item icon="contact" @click="$router.push('/user')">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css";

export default {
  data() {
    return {
      searchVal: '',
      swiperList: [
        {
          img: 'sw1.png',
        },
        {
          img: 'sw2.png',
        }
      ],
      active: 0,
      pageList:[
        {name:'签到',icon:'flower-o'},
        {name:'领证',icon:'friends-o'},
        {name:'婚庆',icon:'birthday-cake-o'},
        {name:'蜜月',icon:'gift-card-o'},
        {name:'司仪',icon:'send-gift-o'},
        {name:'婚纱',icon:'pending-payment'},
        {name:'地图',icon:'aim'},
        {name:'更多',icon:'ellipsis'},
      ]
    }
  },
  mounted() {
    this.getSwiper();
  },
  methods: {
    // 轮播图
    getSwiper() {
      this.$nextTick(() => {
        let swiper = new Swiper(".swiper", {
          effect: "coverflow", // coverflow(3d流)
          grabCursor: true, // 鼠标覆盖Swiper 时指针会变成手掌形状
          pagination: {
            el: ".swiper-pagination",
          },
          // slidesPerView: 'auto',
          // // paginationClickable: true,
          // spaceBetween: 12
        });
      });
    },
    // 动态拼接图片地址
    getImg(data) {
      if (data) {
        let img = require(`../../assets/images/home/${data}`)
        return img;
      }
    },
    // 九宫格
    toPage(i){
      console.log(i)
      switch(i){
        case 0:
          this.$router.push({path:'/signin'})
          break;
        case 1:
          this.$router.push({path:'/marriage'})
          break;
        case 2:
          this.$router.push({path:'/wedding'})
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style lang="less" scoped>
  /deep/ .van-search{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 54/100rem;
    z-index: 111;
    background-color: initial;
    padding: 12/100rem 12/100rem;
  }
  /deep/ .van-search .van-cell{
    padding: 4/100rem 12/100rem 4/100rem 0;
  }
  /deep/ .van-search__content {
    background-color: #fffffff0;
    border-radius: 16/100rem;
  }
  /deep/ .van-grid-item__content {
    background-color: initial;
  }
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
      height: 62/100rem;
    }
  }
  .swiper{
    margin: 12/100rem;
    border-radius: 4/100rem;
    .swiper-wrapper{
      .swiper-slide{
        img{
          height: 160/100rem;
          width: 100%;
          display: block;
          object-fit: cover;
        }
      }
    }
  }
  /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: #F27306;
  }
  /deep/ .van-grid {
    color: #F27306;
    .van-grid-item__text{
      color: #F27306;
    }
  }
  .info-list{
    .info-model{
      padding: 12/100rem 12/100rem 0;
      box-sizing: border-box;
      display: flex;
      .left{
        width: 100/100rem;
        min-width: 100/100rem;
        height: 100/100rem;
        img{
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          border-radius: 4/100rem;
        }
      }
      .right{
        flex: 1;
        padding: 0 0 0 12/100rem;
        position: relative;
        h2{
          font-size: 18/100rem;
          font-weight: 600;
        }
        .der{
          padding-top: 4/100rem;
          box-sizing: border-box;
        }
        .bot{
          position: absolute;
          bottom: 4/100rem;
          font-size: 12/100rem;
        }
      }
    }
  }
  /deep/ .van-grid-item{
    flex-basis: 25%;
    padding-top: 20%!important;
  }
  /deep/ .van-grid-item__icon+.van-grid-item__text {
    margin-top: 8/100rem;
  }
</style>