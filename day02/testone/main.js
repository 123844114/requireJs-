require.config({
   baseUrl:'./js',
   paths:{
    getEl:'./getEl' ,// 不能加扩展名
    addLi:'./addLi',
    clearValue:'./clearValue',
   } 
})

require(['getEl','addLi'],function(getEl,addLi){
    //代码会先执行依赖模块，完了之后才执行回调函数中的代码
    getEl.getDom('#btn').onclick=function(){
        addLi()
    }
})