define(['velocity'],function () {
    var data = null,
        listDom = null,
        saleDom = null,
        spansDom = null,
        rowDom = null,
        colDom = null,
        copyData = null,
        btn = null,
        keywordDom = null,
        newArr = null  //保存搜索后的数据
    return function (options) {
        data = options.data
        console.log(data.length)
        copyData = JSON.parse(JSON.stringify(data))  //深拷贝
        listDom = options.listDom //ul标签
        saleDom = options.saleDom
        spansDom = options.spansDom
        rowDom = options.rowDom
        colDom = options.colDom
        btn = options.btn
        keywordDom = options.keywordDom
        // 渲染页面
        render(data)
        initEvent()
        fixedTop()
    }
    function render(data) {
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
    function initEvent() {  //绑定点击事件
        saleDom.onclick = function (e) { //销量排序
            // 如果搜索框中有值且newArr有值，我们就用newArr来排序
            if (keywordDom.value && newArr.length) {
                newArr.sort(function (a, b) {
                    return a.count - b.count
                })
                render(newArr)
            } else {//如果搜索框中没有值且newArr没有值，我们就data来排序
                data.sort(function (a, b) {
                    return a.count - b.count
                })
                render(data)
            }

            setSpanActive(e.target)  //点谁给谁加
        }
        price.onclick = function (e) {
            data.sort(function (a, b) {
                return a.price - b.price
            })
            render(data)
            setSpanActive(e.target)
        }
        rowDom.onclick = function (e) {
            listDom.className = 'warning'
            setSpanActive(e.target)
        }
        colDom.onclick = function (e) {
            listDom.className = 'default'
            setSpanActive(e.target)
        }
        zonghe.onclick = function (e) {
            setSpanActive(e.target)
            render(copyData)
        }
        btn.onclick = function () { //模糊查询
            newArr = []
            data.forEach(function (item) {
                if (item.title.indexOf(keywordDom.value) !== -1) {
                    newArr.push(item)
                }
            })
            render(newArr)
        }

    }
    function setSpanActive(span) {
        spansDom.forEach(function (item) {
            item.className = ''
        })
        // span.className='active'
        span.classList.add('active')
    }
    function fixedTop(){ // 吸顶效果
        window.onscroll=function(){
           var scrollTop=document.body.scrollTop||document.documentElement.scrollTop
           var offtop= document.querySelector('.classify').offsetTop
           if(scrollTop>=offtop){
               document.querySelector('.search').classList.add('fixed')
           }else{
            document.querySelector('.search').classList.remove('fixed')
           }
        }
    }
})