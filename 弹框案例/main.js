/**
 * 入口文件
 */
require.config({
    baseUrl:'./js',
    paths:{
        getEl:'./getEl',
        modal:'./modal',
        renderList:'./renderList'
    }
})
require(['getEl','modal','renderList'],function(getEl,Modal,renderList){
    //生成列表
    renderList()
    //点击事件
    getEl.getEl('#btn').onclick=function(){
        new Modal({
            title:'测试',
            content:'我自己封装的',
            oktxt:'试试'
        })
    }
})