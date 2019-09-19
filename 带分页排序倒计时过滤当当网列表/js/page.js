/**
 * 分页模块
 */
define(['getEl','render'],function(getEl,render){
    function Page(options){
        this.data=options.data
        console.log(this.data)
        this.pageSize=options.pageSize||10
        this.prevDom=options.prevDom
        this.nextDom=options.nextDom
        this.pageNumDom=options.pageNumDom
        this.pageTotalDom=options.pageTotalDom
        this.pageNum=1   //当前页码
        this.totalPageNum=null //总页数
        this.init()

    }
    Page.prototype={
        init:function(){
            render(getEl.getDom('#list'),this.getCurrentPageData())
            this.getTotalPageNum()
            this.initEvent()
        },
        getTotalPageNum:function(){
            //获取当前总页数
           this.totalPageNum= Math.ceil(this.data.length/this.pageSize)
           this.pageTotalDom.innerHTML=this.totalPageNum
        },
        initEvent:function(){
            var _this=this
            this.prevDom.onclick=function(){
                //当前页码-1
                // if(_this.pageNum>1){
                //     _this.pageNum--
                // }else{
                //     _this.pageNum=1
                // }
                _this.pageNum>1?_this.pageNum--:_this.pageNum=1
                _this.pageNumDom.innerHTML=_this.pageNum
                render(getEl.getDom('#list'),_this.getCurrentPageData())
            }
            this.nextDom.onclick=function(){//下一页
                // 当前页码+1
                _this.pageNum<_this.totalPageNum?_this.pageNum++:_this.pageNum=_this.totalPageNum
                _this.pageNumDom.innerHTML=_this.pageNum
                //对应的渲染数据
                render(getEl.getDom('#list'),_this.getCurrentPageData())
            }
        },
        getCurrentPageData:function(){
            //获取当前页的数据
            var start=(this.pageNum-1)*this.pageSize
            var end= this.pageNum*this.pageSize
            return this.data.slice(start,end)
        }
    }
    return Page
})