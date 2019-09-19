/**
 * 渲染列表
 * 
 */
define(['getEl','modal'],function(getEl,Modal){
    var list=['苹果','柿子','栗子']
    var ul=getEl.getEl('#list')
    var str=``
    // 给li绑定点击事件
    ul.addEventListener('click',function(e){
        var e=e.target
        if(e.tagName==='LI'){
            new Modal({
                title:'警告框',
                content:`确定要删除${e.innerHTML} 吗？`,
                oktxt:'确定',
                currentTarget:e
            })
        }
    })
    return function(){
        //生成li
        list.forEach(function(item){
            str+=`<li>${item}</li>`
        })
        ul.innerHTML=str
    }

})