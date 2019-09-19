/**
 * 购物车模块
 */
define(['page', 'getEl', 'data', 'render'], function (Page, getEl, data, render) {
    function Shop(options) {
        //属性
        this.data = options.data
        this.page = options.page
        this.saleDom = options.saleDom
        this.priceDom = options.priceDom
        this.zyDom=options.zyDom
        this.init()
    }
    Shop.prototype = {
        //方法
        init: function () {
            this.initEvent()
        },
        initEvent: function () {//给页面上的元素绑定事件
            var _this = this
            this.saleDom.onclick = function () {//销量排序
                _this.sortFn('num')
            }
            this.priceDom.onclick = function () {//价格排序
                _this.sortFn('price')
            }
            this.zyDom.onclick=function(){//给自营绑定点击事件
                var currentData = _this.page.getCurrentPageData()
                var arr=[]
                if(this.checked){
                    currentData.forEach(function(item){
                        if(item.flag){
                            arr.push(item)
                        }
                    })
                    //拿着新数组重新渲染
                    render(getEl.getDom('#list'), arr)
                }else{
                    render(getEl.getDom('#list'), currentData) 
                }
            }
        },
        sortFn: function (name) {//排序方法
            //1、获取当前页数据
            var currentData = this.page.getCurrentPageData()
            // 2、排序
            currentData.sort(function (a, b) {
                return a[name] - b[name]
            })
            //3、排序结束后，渲染
            render(getEl.getDom('#list'), currentData)
        }
    }
    return Shop
})