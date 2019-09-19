require.config({
    baseUrl:'./js',
    paths:{
        getEl:'./getEl',
        shop:'./shop',
        data:'./data',
        velocity:'./velocity.min',
        page:'./page',

    }
})
require(['shop','data','getEl','page'],function(shop,data,getEl,Page){
    var page =new Page({
        data:data,
        prev:getEl.getDom('#prev'),
        next:getEl.getDom('#next'),
        pageNum:getEl.getDom('#pageNum'),
        pageTotal:getEl.getDom('#pageTotal'),
        pageSize:12 //每页显示12条
    })

    shop({
        data:currentPageData,
        listDom:getEl.getDom('#list'),
        saleDom:getEl.getDom('#sale'),
        spansDom:getEl.getDoms('#toolbar>span'),
        colDom:getEl.getDom('#col'),
        rowDom:getEl.getDom('#row'),
        btn:getEl.getDom('#btn'),
        keywordDom:getEl.getDom('#keyword')
    })
})