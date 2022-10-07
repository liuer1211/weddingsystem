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
    margin: 0;
  }
  #app{
    font-size: 16/100rem;
  }
</style>
