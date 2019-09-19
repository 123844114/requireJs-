require.config({
    baseUrl:'./js',
    paths:{
        getEl:'./getEl',
        data:'./data',
        sort:'./sort'
    }
})
require(['sort','data','getEl'],function(sort,data,getEl){
     sort({
        data:data,
        listDom:getEl.getDom('#list'),
        sortDom1:getEl.getDom('#sort1'),
        sortDom2:getEl.getDom('#sort2'),
        zongheDom:getEl.getDom('#zonghe')
    })
})