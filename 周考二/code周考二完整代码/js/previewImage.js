define(['getEl','velocity'], function (getEl) {
    return {
        urls:null,
        currentIndex:null,
        previewImage: function (options) {
            // 生成img
            this.urls = options.urls
            console.log(this)
            getEl.getDom('#box').innerHTML = this.urls.map(function (item,index) {
                return `<img id=${index} src="${item}" alt="">`
            }).join('')
            //事件委托 弹框
            var _this=this
            getEl.getDom('#box').addEventListener('click', function (e) {
                var e = e || window.event
                var target = e.target || e.srcElement
                if (target.tagName === 'IMG') {
                    // 创建弹框
                    _this.currentIndex=target.id
                    var div = document.createElement('div')
                    div.id = 'tc'
                    div.innerHTML = ` <img src="${target.src}" alt=""> <button id="leftBtn">左侧</button>`
                    document.body.appendChild(div)
                    //点击黑屏
                    getEl.getDom('#tc').onclick = function (e) {
                        if(e.target.tagName==='DIV'){
                            document.body.removeChild(this)
                        }
                        
                    }
                }
            })
            //给左侧按钮绑定事件，事件委托可以给动态增加的元素绑定
            document.body.addEventListener('click',function(e){
                if(e.target.tagName=='BUTTON'){
                    _this.currentIndex--
                    if( _this.currentIndex<0){
                        _this.currentIndex=_this.urls.length-1
                    }
                    getEl.getDom('#tc>img').setAttribute('src',_this.urls[_this.currentIndex])
                    Velocity(getEl.getDom('#tc>img'),'stop',true)
                    Velocity(getEl.getDom('#tc>img'),'fadeIn')
                }
            })
            
        }
    }
})