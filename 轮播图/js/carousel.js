define(['getEl','./lib/velocity.min.js'], function (getEl,Velocity) {
    function Carousel(options) {
        this.imgs = options.imgs
        this.imgBox = options.imgBox
        this.lis = options.imgBox.children
        this.leftBtn=options.leftBtn
        this.carouseDom=options.carouseDom
        this.time=options.time||2000
        this.currentIndex=0  //当前显示图片下标
        this.timer=null
        this.nodes=options.nodes
        this.scollWidth = parseInt(this.carouseDom.offsetWidth) // 500
        this.init()
    }
    // 原型对象上添加方法
    Carousel.prototype = {
        init:function(){
            this.createLi()
            this.initEvents()
            this.autoPlay()
        },
        createLi: function () { //动态生成li标签   <li><img src="./images/1.jpg" alt=""></li>
            this.imgBox.innerHTML = this.imgs.map(function (item) {
                return `<li><img src="${item}" alt=""></li>`
            }).join('')
            this.imgBox.appendChild(getEl.getDoms('#imgBox>li')[0].cloneNode(true))
            this.lis=this.imgBox.children
            this.imgBox.style.width=this.scollWidth*this.lis.length+'px'
        },
        initEvents:function(){ //初始化事件
            var _this = this
            this.leftBtn.onclick=function(){
                //点击左侧按钮 currentIndex--
                if(_this.currentIndex==0){
                    _this.currentIndex=_this.lis.length-1
                    _this.imgBox.style.marginLeft=-_this.scollWidth*_this.currentIndex+'px'
                }
                _this.currentIndex--
                Velocity(_this.imgBox,'stop',true) //停止上一个动画，避免连续点击出现的bug 
                Velocity(_this.imgBox,{
                    marginLeft:-_this.scollWidth*_this.currentIndex+'px'
                })
                _this.setNodesActive()
            }
            this.carouseDom.onmouseover=function(){
                clearInterval(_this.timer)
            }
            this.carouseDom.onmouseout=function(){
                _this.autoPlay()
            }
            //给小球绑定事件
            this.nodes.forEach(function(item,index){
                item.onclick=function(){
                    _this.currentIndex=index
                    // _this.imgBox.style.marginLeft=-_this.scollWidth*_this.currentIndex+'px'
                    Velocity(_this.imgBox,{
                        marginLeft:-_this.scollWidth*_this.currentIndex+'px'
                    })
                    _this.setNodesActive()
                }
            })
        },
        autoPlay:function(){ //自动轮播
            var _this = this
            this.timer= setInterval(function(){
                //向左移动   this.scollWidth
                if(_this.currentIndex<_this.lis.length-1){
                    _this.currentIndex++
                    // _this.imgBox.style.marginLeft=-_this.scollWidth*_this.currentIndex+'px'
                    Velocity(_this.imgBox,{
                        marginLeft:-_this.scollWidth*_this.currentIndex+'px'
                    })
                }else{
                    _this.imgBox.style.marginLeft=0
                    _this.currentIndex=0
                }
                _this.setNodesActive()
            },this.time)
        },
        setNodesActive:function(){
            var spans = getEl.getDoms('#nodeBox>span')
                // debugger
                spans.forEach(function(item){
                    item.className=''
                })
                if(this.currentIndex==3){
                    spans[0].className='active'
                }else{
                    spans[this.currentIndex].className='active'
                }
        },

    }
    return Carousel
})