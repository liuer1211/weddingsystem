<template>
	<div class="user-main">
		<div class="back-icon" @click="$router.back()">
      <van-icon name="arrow-left" />
    </div>
		<div class="user-part">
      <div class="user-p-top">
        <img src="../../assets/images/home/c4.png">
        <div class="user-head">
          <img src="../../assets/images/home/c2.png">
          <div>
            <h2>六耳</h2>
            <div>千里之行，始于足下</div>
          </div>
        </div>
      </div>
      <div class="user-p-bottom">
       

      </div>
    </div>
	</div>
</template>

<script>
export default {
  data(){
    return{}
  },
  methods:{

  }
}
</script>

<style lang="less" scoped>
  .user-main{
    position: relative;
    .back-icon{
      position: fixed;
      width: 20/100rem;
      height: 20/100rem;
      top: 8/100rem;
      left: 6/100rem;
      z-index: 1;
      i{
        width: 20/100rem;
        height: 20/100rem;
        color: #F27306;
      }
    }
    .user-part{
      .user-p-top{
        width: 100%;
        height: 300/100rem;
        overflow: hidden;
        border-bottom-right-radius: 25/100rem;
        position: relative;
        background: #fff;
        img{
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
        .user-head{
          position: absolute;
          bottom: 20/100rem;
          left: 12/100rem;
          display: flex;
          img{
            width: 44/100rem;
            height: 44/100rem;
            object-fit: cover;
            border-radius: 50%;
            box-shadow: 0px 1/100rem 3/100rem #bebebe;
          }
          >div{
            padding-left: 12/100rem;
            box-sizing: border-box;
            font-size: 12/100rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            text-shadow: 1/100rem 1/100rem 2/100rem #9b9b9b;
            h2{
              font-size: 16/100rem;
            }
          }
        }
      }
      .user-p-bottom{
        position: relative;
      }
    }
  }
</style>