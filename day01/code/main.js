//config配置项
require.config({
   baseUrl:'./js' 
})

// 入口文件  引入模块
require(['b'],function(a){
    console.log('main',a)
})