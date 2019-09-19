/**
 * 功能：根据页面上的信息，生成li标签
 * 并添加到#list中
 */

define(['getEl','addLi'], function (getEl,clearValue) {
    var addLi = function () {
        // 1、获取页面信息 #txt
        var txt = getEl.getDom('#txt').value
        var bgcolor = getEl.getDom('#bgcolor').value
        var bordercolor = getEl.getDom('#bordercolor').value
        //  2、生成li标签
        var li = document.createElement('li')
        li.innerHTML = txt
        li.style = `width: 100%;
    height: 30px;
    line-height: 30px;
    background: ${bgcolor};
    border: 1px solid ${bordercolor};
    margin: 5px 0;`
        //追加li标签
        if(txt&&bgcolor&&bordercolor){
            getEl.getDom('#list').appendChild(li)
        }else{
            alert('请输入完整！')
            return
        }
        // 清空input
        clearValue()
    }
    return addLi
})