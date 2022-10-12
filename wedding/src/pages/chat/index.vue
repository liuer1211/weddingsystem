<template>
  <div>
    <!-- 导航栏 -->
		<van-nav-bar
			title="最热"
			left-arrow
			@click-left="$router.back()"
		/>
    <div class="hei"></div>
    <div class="chat-main">
      <div class="chat-model" v-for="(item,index) in list" :key="index">
        <div class="chat-top">
          <img :src="getImg(item.img)" :class="{active:item.flag}">
          <h2 :class="{active:item.flag}">{{item.title}}</h2>
        </div>
        <div class="chat-content" :class="{active:item.flag}">
          <div>{{item.author}} · {{item.date}}</div>
          <p>{{item.content}}</p>
          <div class="chat-bottom">
            <div>点赞：{{item.praise}}</div>
            <div>收藏：{{item.save}}</div>
            <div>阅读：{{item.read}}</div>
          </div>
        </div>
        <div class="chat-pint" @click="item.flag = !item.flag">
          <img v-show="!item.flag" src="../../assets/images/icon/chat-close.png">
          <img v-show="item.flag" src="../../assets/images/icon/chat-open.png">
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

export default{
  data() {
    return {
      active: 2,
      list:[
        {
          id: '1',
          author: '六耳',
          img: 'c4.png',
          title: '婚礼攻略1婚礼攻略1婚礼攻略1婚礼攻略1婚礼攻略1',
          date: '2021-10-10',
          read: '232',
          save: '12',
          praise: '22',
          flag: false,
          content: '领证结婚，酒宴回门，蜜月度假',
        },
        {
          id: '1',
          author: '山鬼',
          img: 'c4.png',
          title: '婚礼攻略2',
          date: '2021-10-10',
          read: '232',
          save: '12',
          praise: '22',
          flag: false,
          content: '领证结婚，酒宴回门，蜜月度假',
        }
      ]
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

<style lang="less" scoped>
  // 头部
  /deep/ .van-nav-bar {
		position: fixed;
		width: 100%;
		background-color: #ffd6a0;
    z-index: 111;
	}
	/deep/ .van-nav-bar__content {
		height: 50/100rem;
	}
	/deep/ .van-nav-bar .van-icon {
    color: #F27306;
	}
  // 底部
  /deep/ .van-tabbar{
    z-index: 111;
    background-color: #ffd6a0;
    border-top-left-radius: 20/100rem;
    border-top-right-radius: 20/100rem;
  }
  /deep/ .van-tabbar-item--active{
    background-color: initial;
  }
  .hei{
    height: 50/100rem;
    &.i{
      height: 50/100rem;
    }
  }
  //
  .chat-main{
    padding: 12/100rem;
    box-sizing: border-box;
    .chat-model{
      position: relative;
      border-radius: 4/100rem;
      border: 1/100rem solid #F27306;
      transition: .3s;
      &:not(:last-child){
        margin-bottom: 12/100rem;
      }
      .chat-top{
        display: flex;
        overflow: hidden;
        padding: 12/100rem;
        box-sizing: border-box;
        align-items: center;
        width: 100%;
        img{
          width: 20/100rem;
          min-width: 20/100rem;
          height: 20/100rem;
          object-fit: cover;
          border-radius: 50%;
          &.active{
            border-radius: 4/100rem;
          }
        }
        h2{
          font-weight: 600;
          font-size: 18/100rem;
          flex: 1;
          padding-left: 12/100rem;
          box-sizing: border-box;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          &.active{
            overflow: inherit;
            white-space: inherit;
            text-overflow: inherit;
          }
        }
      }
      .chat-content{
        color: #928b8b;
        overflow: hidden;
        transition: .3s;
        height: 0;
        &.active{
          height: initial;
        }
        >div{
          padding: 8/100rem;
          box-sizing: border-box;
          font-size: 14/100rem;
          text-align: center;
          &:first-child{
            border-top: 1/100rem solid#F27306;
          }
        }
        >p{
          color: #000;
          font-size: 16/100rem;
          padding: 4/100rem 12/100rem 12/100rem;
        }
      }
      .chat-bottom{
        padding: 12/100rem !important;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-around;
      }
      .chat-pint{
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 1;
        width: 20px;
        height: 20px;
        // background: #F27306;
        cursor: pointer;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: .3s;
        }
      }
    }
  }
</style>
