define(function () {
  var render=  function (listDom,data) {
        var str = ``
        data.forEach(function (item, i) {
            str += `<li>
                <img src="${item.src}" alt="">
                <p class="detail"><span>￥${item.price}</span><span>${item.count}万+人付款</span></p>
                <p class="title">${item.title}</p>
                </li>`
        })
        listDom.innerHTML = str
    }
    return render
})