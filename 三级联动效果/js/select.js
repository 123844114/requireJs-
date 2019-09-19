/**
 * 三级联动功能
 */
define(function () {
    var data = null
    var province = null
    var city = null
    var area = null
    var cityList=null
    var btn=null
    return function (options) {
        data = options.data
        province = options.province
        city = options.city
        area = options.area
        btn=options.btn
        console.log(data)
        //1渲染省份
        var str=`<option>请选择</option>`
        for(var i=0;i<data.length;i++){
            str+= `<option>${data[i].name}</option>`
        }
        province.innerHTML=str

        //2给省份绑定change事件
        province.onchange=function(){
             var pIndex = this.selectedIndex-1
             cityList = data[pIndex].cityList    //全局赋值
             
             //3渲染第二个下拉
             var str=`<option>请选择</option>`
             for(var i=0;i<cityList.length;i++){
                 str+=`<option>${cityList[i].name}</option>`
             }
             city.innerHTML=str
        }


        // 4给第二个绑定change事件
        city.onchange=function(){
            var cIndex = this.selectedIndex-1
            var areaList = cityList[cIndex].areaList
            // 5渲染第三个列表
            var str=`<option>请选择</option>`
            for(var i=0;i<areaList.length;i++){
                str+=`<option>${areaList[i]}</option>`
            }
            area.innerHTML=str
        }
        btn.onclick=function(){
            console.log(province.value,city.value,area.value)
            console.log(province.selectedIndex-1,city.selectedIndex-1)
        }
    }
})