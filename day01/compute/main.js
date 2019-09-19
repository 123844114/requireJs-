//config配置项
require.config({
   baseUrl:'./js',
   paths:{
    getEl:'./getEL',
    math:'./math',
    getResult:'./getResult'
   }
})

// 入口文件  引入模块
require(['getResult'],function(getResult){
    document.onclick=function(){
        getResult()
    }
})