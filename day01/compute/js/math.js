// 加减乘除
define(function(){
    var add=function(a,b){ //加法
        return a*1+b*1
    }
    var reduce=function(a,b){//减法
        return a*1-b*1
    }
    return {add:add,reduce:reduce}
})