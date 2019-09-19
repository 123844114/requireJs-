/**
 * 购物车模块
 */
define(['getEl'], function (getEl) {
    function ShopCar(options) {
        this.data = options.data
        this.checkall = options.checkall
        this.totalCount = options.totalCount
        this.totalPrice = options.totalPrice
        this.tbody = options.tbody
        this.init()
    }
    ShopCar.prototype = {
        init: function () {//初始化
            this.render()
            this.initEvent()
        },
        render: function () {//渲染
            var str = ``
            this.data.forEach(function (item) {
                str += `<tr>
                <td><input type="checkbox"></td>
                <td>${item.title}</td>
                <td>${item.price}</td>
                <td>
                    <button>-</button>
                    <span>${item.count}</span>
                    <button>+</button>
                </td>
                <td>0</td>
                <td> <a href='javascript:void(0)'>删除</a></td>
            </tr>`
            })
            this.tbody.innerHTML = str
        },
        initEvent: function () {//初始化事件
            // 给加减按钮绑定点击事件
            this.buttonClick()
            //给checkbox绑定点击事件
            this.checkBoxClick()
            //给全选按钮绑定点击事件
            this.checkAllClick()
            //给删除按钮绑定点击事件
            this.deleteTr()
        },
        buttonClick: function () {
            var _this=this
            getEl.getDoms('button').forEach(function (item, i) {
                item.onclick = function (e) {
                    // console.log(e.target.previousElementSibling)
                    // 判断点击的是加法还是减法
                    if (e.target.innerHTML === '+') {
                        var value = e.target.previousElementSibling.innerHTML * 1
                        // value++
                        e.target.previousElementSibling.innerHTML = ++value
                    } else { //减法
                        var value = e.target.nextElementSibling.innerHTML * 1
                        // if(value>0){
                        //     value--
                        // }else{
                        //     value=0
                        // }
                        value > 0 ? value-- : value = 0
                        e.target.nextElementSibling.innerHTML = value
                    }
                    //小计
                    var price=e.target.parentNode.previousElementSibling.innerHTML*1   
                    e.target.parentNode.nextElementSibling.innerHTML=price*value
                    _this.totalPriceFn()
                    _this.totalCountFn()
                }
            })
            
        },
        checkBoxClick:function(){ //给checkbox绑定点击事件，不包含checkall
            var _this=this
            getEl.getDoms('tbody input').forEach(function(item){
                item.onclick=function(){
                    // 点击每一项的时候，都要拿着整个数组进行判断的
                    //...arr es6会讲，数组解构运算
                    var result=[...getEl.getDoms('tbody input')].every(function(item){return item.checked===true})
                    // console.log(result)
                    _this.checkall.checked=result //全选与result同步
                    // console.log(_this)
                    _this.totalPriceFn()
                    _this.totalCountFn()
                }
            })
            
        },
        checkAllClick:function(){
            var that=this
            this.checkall.onclick=function(){
                var _this=this
                getEl.getDoms('tbody input').forEach(function(item){
                    item.checked=_this.checked
                })
                that.totalPriceFn()
                that.totalCountFn()
            }
        },
        totalPriceFn:function(){//计算总金额
            var sum=0
            getEl.getDoms('tbody>tr').forEach(function(item){
                // console.log(item.firstElementChild)
                // console.log(item.lastElementChild)
                if(item.firstElementChild.children[0].checked===true){  //判断打钩了
                    sum+=item.children[4].innerHTML*1
                }
            })
            this.totalPrice.innerHTML=sum
        },
        totalCountFn:function(){ //总数量
            var sum=0
            getEl.getDoms('tbody>tr').forEach(function(item){
                // console.log(item.firstElementChild)
                // console.log(item.children[3].children[1])
                if(item.firstElementChild.children[0].checked===true){  //判断打钩了
                    sum+=item.children[3].children[1].innerHTML*1
                }
            })
            this.totalCount.innerHTML=sum
        },
        deleteTr:function(){
            //删除，点谁删除谁
            var _this=this
            getEl.getDoms('a').forEach(function(item){
                item.onclick=function(e){
                    var e=e||window.event
                    var target = e.target||e.srcElement
    
                    console.log(target.parentNode.parentNode)
                    //删除选中的tr
                    _this.tbody.removeChild(target.parentNode.parentNode)
                    _this.totalPriceFn()
                    _this.totalCountFn()

                    //判断全选按钮是否选中
                    var result=[...getEl.getDoms('tbody input')].every(function(item){return item.checked===true})
                    // console.log(result)
                    _this.checkall.checked=result //全选与result同步
                }
            })
            
        }
    }
    return ShopCar
})