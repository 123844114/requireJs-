/**
 * tab功能--对象
 * 根据数据生成dom
 * 点击事件
 */
define(['getEl', 'data'], function (getEl, data) {
    // 定义类Tab
    function Tab() {
        this.data = data //属性保存数据
        this.init()
    }
    Tab.prototype = {
        init: function () { //初始化
            this.createDom()
            this.clickEvent()
            this.show(0)
        },
        createDom: function () { //创建dom结构
            var tabBar = getEl.getDom('.tab-bar')
            var tabContent = getEl.getDom('.tab-content')
            this.data.forEach(function (item, i) {
                var span = document.createElement('span')
                span.innerHTML = item.tab
                span.id = i
                tabBar.appendChild(span)
                var div = document.createElement('div')
                div.innerHTML = item.content
                tabContent.appendChild(div)
            })
        },
        clickEvent: function () {//添加点击事件
            var tabBar = getEl.getDom('.tab-bar')
            // 事件委托
            var _this = this
            tabBar.addEventListener('click', function (e) {
                var e = e || window.event
                var target = e.target || e.srcElement
                if (target.tagName === 'SPAN') {
                    var id = target.id
                    _this.show(id)
                }
            })
        },
        show: function (id) {
            var divs = getEl.getDoms('.tab-content>div')
            var spans = getEl.getDoms('.tab-bar>span')
            divs.forEach(function (item, i) {
                divs[i].className = ''
                spans[i].className = ''
            })
            divs[id].className = 'active'
            spans[id].className = 'active'
        }
    }
    return Tab
})