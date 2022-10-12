<template>
  <div class="star">
    <span class="star-item" v-for="(item,index) in starClasses" :key="index" :class="item"></span>
  </div>
</template>

<script>
  // 类名常量
  const CLASS_ON = 'on'
  const CLASS_HALF = 'half'
  const CLASS_OFF = 'off'

  export default {
    props: {
      score: String,
      size: Number
    },
    data() {
      return{
        list: ['on','on','half','off','off'] // 练习，下边有计算方法
      }
    },
    computed: {
      /*
      3.2: 3 + 0 + 2
      3.5: 3 + 1 + 1
       */
      starClasses () {
        const {score} = this
        const scs = []
        // 向scs中添加n个CLASS_ON
        const scoreInteger = Math.floor(Number(score))
        // 有几个整数，就加几个 红星
        for (let i = 0; i < scoreInteger; i++) {
          scs.push(CLASS_ON)
        }
        // 向scs中添加0/1个CLASS_HALF
        // 小数点>0.5 加 半星，否则不加
        if(Number(score)*10-scoreInteger*10>=5) {
          scs.push(CLASS_HALF)
        }
        // 向scs中添加n个CLASS_OFF
        // 数组没有填充满，不够5个，灰星补足
        while(scs.length<5) {
          scs.push(CLASS_OFF)
        }
        return scs
      }
    },
    created() {
      // this.starClasses()
      // console.log(this.score)
    }
  }
</script>

<style scoped lang="less">
  .star{
    .star-item{
      width: 14/100rem;
      height: 14/100rem;
      display: inline-block;
      background-repeat: no-repeat;
      background-size: cover;
      margin-right: 4/100rem;
      &.on{
        background-image: url("./images/star24_on@2x.png");
      }
      &.off{
        background-image: url("./images/star24_off@2x.png");
      }
      &.half{
        background-image: url("./images/star24_half@2x.png");
      }
    }
  }
</style>
