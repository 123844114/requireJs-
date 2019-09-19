/**
 * tab功能
 * 模拟数据
 */
define(['getEl'], function (getEl) {
    // 1、模拟数据
    var data = [{ tab: 'A', content: "AAAAA" },
    { tab: 'B', content: "BBBBBBB" },
    { tab: 'C', content: "CCCCCC" },
    { tab: 'D', content: "DDDDDDDDD" }
    ]
    // 2、生成dom结构
    var tabBar = getEl.getDom('.tab-bar')
    var tabContent= getEl.getDom('.tab-content')
    var str=``
    var str1=``
    data.forEach(function(item,i){
        if(i===0){
            str+=`<span index=${i} class='active'>${item.tab}</span>`
        str1+=`<div style='display:block'>${item.content}</div>`
        }else{
            str+=`<span index=${i}>${item.tab}</span>`
        str1+=`<div style='display:none'>${item.content}</div>`
        }
    })
    tabBar.innerHTML=str
    tabContent.innerHTML=str1

    // 3、事件委托---给span绑定click事件
    tabBar.addEventListener('click',function(e){
        var e = e||window.event
        var target = e.target||e.srcElement
        if(target.tagName==='SPAN'){
            var index = target.getAttribute('index')
            var tabContentDivs= getEl.getDoms('.tab-content>div')
            var tabSpans= getEl.getDoms('.tab-bar>span')
            
            // 循环tabContentDiv
            tabContentDivs.forEach(function(item,i){
                tabContentDivs[i].style.display='none'
                tabSpans[i].className=''
            })
            tabContentDivs[index].style.display='block'
            tabSpans[index].className='active'
        }
    })

})