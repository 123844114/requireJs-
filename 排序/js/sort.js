define(function () {
    var data = null, listDom = null, sortDom1 = null,sortDom2 = null, zongheDom = null,clone=null
    return function (options) {
        data = options.data, 
        clone=JSON.parse(JSON.stringify(data)),
        listDom = options.listDom, 
        sortDom1 = options.sortDom1, 
        sortDom2 = options.sortDom2, 
        zongheDom = options.zongheDom
        render()
        sortFn1()
        sortFn2()
        zongheDom.onclick=function(){
            console.log(clone)
        }
    }
    function render(){ //渲染
        var str=``
        for(var i=0;i<data.length;i++){
            str+=`<li>${i+1}${data[i].name}${data[i].count}</li>`
        }
        listDom.innerHTML=str
    }
    function sortFn1(){ //点击升序
        sortDom1.onclick=function(){
            data.sort(function(a,b){
                return a.count-b.count
            })
            render()
        }
    }
    function sortFn2(){ //点击升序
        sortDom2.onclick=function(){
            data.sort(function(a,b){
                return b.count-a.count
            })
            render()
        }
    }
})