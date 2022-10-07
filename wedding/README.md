# wedding
  yarn install
  yarn serve
  yarn build

# 适配
  <script type="text/javascript">
    // 适配 控制根像素
    function getFontSize() {
      const widths = document.documentElement.clientWidth;
      const rootFont = (widths*100)/375; // 375设计稿宽
      document.documentElement.style.fontSize = rootFont+'px';
    }
    getFontSize();
    window.onresize = getFontSize;
  </script>
  页面：像素 = 设计高像素/100rem

# 路由
  npm install vue-router@3
  new vueRouter({
    routes
  })
  new Vue({
    router,
  })

# less
  npm i less@3 less-loader@5


