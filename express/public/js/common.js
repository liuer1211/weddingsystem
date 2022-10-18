// 监听滚动条变化 头部缩放
$(window).scroll(function(){
  let scrollHeight = document.documentElement.scrollTop||document.body.scrollTop;
  let nodeId = document.getElementById('head');
  let upIcon = document.getElementById('upIcon');
  if(scrollHeight>80){
    nodeId.setAttribute('class', 'head scale');
    upIcon.setAttribute('class', 'to-top active');
  } else {
    nodeId.setAttribute('class', 'head');
    upIcon.setAttribute('class', 'to-top');
  }
})

// 不能直接写
$(function(){

  // 返回顶部
  $('#upIcon').on('click',function () {
    $('body,html').animate({scrollTop:0},500);
  });

  // 头部菜单切换 进入执行
  function setTab(){
    if(getPathname().indexOf('home') !== -1){
      $('#head .right div').eq(0).addClass('active').siblings().removeClass('active');
    }
    if(getPathname().indexOf('news') !== -1){
      $('#head .right div').eq(1).addClass('active').siblings().removeClass('active');
    }
  }
  // 获取location.pathname
  function getPathname(){
    return location.pathname;
  }
  setTab();
});