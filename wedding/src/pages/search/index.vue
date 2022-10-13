<template>
  <div class="search-main">
    <!-- 头部 -->
    <van-search 
      v-model="searchVal" 
      placeholder="结婚幸福吧"
      background="#fedeb5"
      show-action
    >
      <template #left>
        <div class="back" @click="$router.back()">返回</div>
      </template>
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <div class="hei"></div>
    <div class="search-cen">
      <!-- 热搜 -->
      <div class="hot">
        <div>领证</div>
        <div>酒席</div>
        <div>司仪</div>
      </div>
      <!-- 历史记录 -->
      <div class="history">
        <h2>历史记录</h2>
        <div class="clear" @click="toClear">
          <van-icon name="delete-o" />
        </div>
        <div>
          <div>领证</div>
          <div>领证酒席司仪</div>
          <div>司仪</div>
          <div>领证</div>
          <div>酒席</div>
          <div>司仪</div>
          <div>领证</div>
          <div>酒席</div>
          <div>司仪</div>
        </div>
      </div>
      <!-- 发现 -->
      <div></div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      searchVal: '',
    }
  },
  mounted() {
    document.querySelector('.van-field__control').focus();
  },
  methods: {
    onSearch(){
      console.log('--')
    },
    toClear(){
      console.log('--')
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
  /deep/ .van-search__action:active {
    background-color: initial;
  }
  /deep/ .van-search__action{
    font-size: 16/100rem;
  }
  .back{
    margin-right: 8/100rem;
    font-size: 16/100rem;
  }
  .hei{
    height: 54/100rem;
  }
  .search-main{
    .search-cen{
      cursor: pointer;
      .hot{
        display: flex;
        flex-wrap: wrap;
        padding: 0 12px 12px 0;
        box-sizing: border-box;
        >div{
          border: 1px solid #9c9c9c;
          padding: 6px 12px;
          box-sizing: border-box;
          border-radius: 4px;
          margin: 12px 0 0 12px;
        }
      }
      .history{
        padding: 12px 12px 12px 0;
        box-sizing: border-box;
        position: relative;
        >h2{
          font-size: 16px;
          padding-left: 12px;
          box-sizing: border-box;
        }
        .clear{
          position: absolute;
          right: 12px;
          top: 16px;
        }
        >div{
          display: flex;
          flex-wrap: wrap;
          >div{
            border: 1px solid #9c9c9c;
            padding: 6px 12px;
            box-sizing: border-box;
            border-radius: 4px;
            margin: 12px 0 0 12px;
          }
        }
      }
      .model{}
    }
  }
</style>