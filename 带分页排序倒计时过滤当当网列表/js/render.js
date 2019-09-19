/**
 * 渲染模块
 * dom 挂载点
 * data 渲染的数据
 */
define([], function () {
    return function (dom, data) {
        var str = ``
        data.forEach(function (item) {
            str += `<li id=${item.id}>
                    <img src="./images/${item.img}" alt="">
                    <p class="detail"><span>￥${item.price}</span><span>${item.num}条评论</span></p>
                    <p class="title">${item.title}</p>
                    <p><button>加入购物车</button></p>
                    </li>`

        })
        dom.innerHTML = str
    }
})