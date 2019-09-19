// 显示结果
define(['getEl','math'],function(getEl,math){
    var getresult=function(){
        // 获取页面上的num1、num2、select 的值
        var num1 = getEl('num1').value
        var num2 = getEl('num2').value
        var operate = getEl('operate').value
        var result = getEl('result')
        // console.log(num1,num2,operate)  parseInt parseFloat Number  *1
        switch(operate*1){
            case 0:result.innerHTML=math.add(num1,num2)
                break;
            case 1:result.innerHTML=math.reduce(num1,num2)
                break;
        }
    }
    return getresult
})