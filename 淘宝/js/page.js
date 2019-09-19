/**
 * 分页功能
 */
define(function () {
    function Page(options) {
        this.data=options.data
        this.prev=options.prev
        this.next=options.next
        this.pageNum=options.pageNum
        this.pageTotal=options.pageTotal
        this.pageSize=options.pageSize
        this.pageTotalValue=null
        this.init()
     }
    Page.prototype = {
        init:function(){
            this.pageTotalFn()
            this.initEvent()
        },
        pageTotalFn:function(){
            //计算总页数
            this.pageTotalValue=Math.ceil(this.data.length/this.pageSize)
            this.pageTotal.innerHTML= this.pageTotalValue
        },
        initEvent:function(){ //初始化点击事件
            var _this=this
            this.prev.onclick=function(){}
            this.next.onclick=function(){
                //点击后一个按钮
                var pageNum=_this.pageNum.innerHTML*1
                pageNum<_this.pageTotalValue?pageNum++:pageNum=_this.pageTotalValue
                _this.pageNum.innerHTML=pageNum
                _this.pageFn(pageNum,_this.pageSize)
            }

        },
        pageFn:function(pageNum,pageSize){// 实现分页功能
            var start=(pageNum-1)*pageSize
            var end=pageNum*pageSize
          return  this.data.slice(start,end)
        }
    }
    return Page
})