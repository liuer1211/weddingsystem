// 监听滚动条变化
$(window).scroll(function(){
  let scrollHeight = document.documentElement.scrollTop||document.body.scrollTop;
  let nodeId = document.getElementById('head')
  if(scrollHeight>80){
    nodeId.setAttribute('class', 'head scale')
  } else {
    nodeId.setAttribute('class', 'head')
  }
})

// 头部菜单点击切换
