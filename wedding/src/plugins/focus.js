let myPlugin = {}
myPlugin.install = function(Vue,options){
  Vue.directive(options.name,(element,params)=>{
    console.log(element)
    element.focus();
  })
}