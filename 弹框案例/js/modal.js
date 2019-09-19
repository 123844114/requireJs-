/**
 * 封装弹框--模态框 modal
 */
define(['getEl'],function (getEl) {
    // 面向对象
    function Modal(options) {
        this.title = options.title || '提示框'
        this.content = options.content || '确定要删除吗？'
        this.oktxt = options.oktxt || '确定'
        this.currentDom=null   //保存当前创建的div对象
        this.currentTarget=options.currentTarget ||null  //要删除的元素
        this.init()
    }
    //初始化
    Modal.prototype.init=function(){
        this.createDom()
        this.initEvents()
    }
    //1、 模态框有一个创建dom的方法
    Modal.prototype.createDom = function () {
        // 1、创建div
        var div = document.createElement('div')
        // 2、组装div
         div.className='modal'
         div.innerHTML=`<div class="body">
         <div class="title"><span>${this.title}</span><span class="close">&times;</span></div>
         <div class="con">${this.content}</div>
         <div class="footer">
             <span class="btn cancel">取消</span>
             <span class="btn ok">${this.oktxt}</span>
         </div>
        </div>`
        // 3、追加元素
        if(!getEl.getEl('.modal')){
            document.body.appendChild(div)
        }else{
        //    如果有的话就显示
        // this.show()
        Modal.div.style.display='block'
        }
        //4、保存div
        this.currentDom = div
        Modal.div=div
    }
    // 2、隐藏弹框
    Modal.prototype.hide=function(){
        this.currentDom.style.display='none'
    }
    // 3、显示弹框
    Modal.prototype.show=function(){
        console.log(this.currentDom)
        this.currentDom.style.display='block'
    }
    // 4、移除dom
    Modal.prototype.removeDom=function(){
        document.body.removeChild(this.currentDom)
    }
    // 5、删除某一条
    Modal.prototype.delItem=function(){
        var ul=getEl.getEl('#list')
        // 谁？
        ul.removeChild(this.currentTarget)
        this.removeDom()
    }
    // 给‘取消’按钮绑定点击事件
    Modal.prototype.initEvents=function(){
        var _this=this  //保存this
        getEl.getEl('.cancel').onclick=function(){
            _this.removeDom()
        }
        getEl.getEl('.ok').onclick=function(){
            _this.delItem()
        }
        
    }
    return Modal
})