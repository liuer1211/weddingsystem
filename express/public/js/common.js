// 监听滚动条变化 头部缩放
$(window).scroll(function(){
  let scrollHeight = document.documentElement.scrollTop||document.body.scrollTop;
  let nodeId = document.getElementById('head')
  let upIcon = document.getElementById('upIcon')
  if(scrollHeight>80){
    nodeId.setAttribute('class', 'head scale')
    upIcon.setAttribute('class', 'to-top active')
  } else {
    nodeId.setAttribute('class', 'head')
    upIcon.setAttribute('class', 'to-top')
  }
})

// 返回顶部
$(function(){
  // 不能直接写
  $('#upIcon').on('click',function () {
    $('body,html').animate({scrollTop:0},500);
  });
});


// 头部菜单点击切换
