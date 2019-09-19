require.config({
    baseUrl:'./js',
    paths:{
        data:'./data',
        getEl:'./getEl',
        find:'./find'
    }
})
require(['find','data','getEl'],function(Find,data,getEl){
    new Find({
        data:data,
        keywordDom:getEl.getDom('#keyword'),
        listDom:getEl.getDom('#list'),
    })
})