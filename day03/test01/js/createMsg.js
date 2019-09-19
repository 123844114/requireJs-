/**
 * 封装创建dom的函数
 */
define(['getEl'],function(getEl){
    return function(className,txt,time){
         // 设置默认时间
         var newTime = time || 2000
         // 1、创建div
        var div= document.createElement('div')
         // 2、包装div
         div.innerHTML=txt
         div.id='message'
         div.classList.add(className)
         // 3、追加 条件限制  txt不为空&&#message没有的时候
         var msg = getEl.getDom('#message')
         if(txt&&!msg){
             document.body.appendChild(div)
         }else{
             return
         }
         // 4、消失
         setTimeout(function(){
             document.body.removeChild(div)
         },newTime)
    }
})