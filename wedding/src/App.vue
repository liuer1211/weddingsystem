<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="less">
  @import './assets/css/base.css';
  body{
    // background: linear-gradient(to bottom, #ffd6d4, #efb1b7);
    background-color: #fedeb5;
  }
  #app{
    font-size: 16/100rem;
  }
</style>
