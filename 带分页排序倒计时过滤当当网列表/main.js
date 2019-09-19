/**
 * 入口模块
 */
require.config({
    baseUrl: './js',
    paths: {
        data: './data',
        getEl: './getEl',
        render: './render',
        page: './page',
        shop: './shop',
        time:'./time'
    }
})
require(['data', 'render', 'getEl', 'page','shop','time'], function (data, render, getEl, Page,Shop,time) {
 var page= new Page({
        data: data,
        prevDom:getEl.getDom('#prev'),
        nextDom:getEl.getDom('#next'),
        pageNumDom:getEl.getDom('#pageNum'),
        pageTotalDom:getEl.getDom('#pageTotal'),
        pageSize:8
    })
    new Shop({
        page:page,
        data:data,
        saleDom:getEl.getDom('#sale'),
        priceDom:getEl.getDom('#price'),
        zyDom:getEl.getDom('#zy')
    })
    time.init()
})