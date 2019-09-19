/**
 * 4个消息提示
 * success
 * warning
 * info
 * error
 */
define(['getEl','createMsg'],function(getEl,createMsg){
   return{
        success:function(txt,time){
            // 弹出成功的提示信息
            createMsg('success',txt,time)
        },
        warning:function(txt,time){
            createMsg('warning',txt,time)
        },
        info:function(txt,time){
            createMsg('info',txt,time)
        },
        error:function(txt,time){
            createMsg('error',txt,time)
        }
   }
})
