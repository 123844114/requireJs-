/**
 * 模糊查询
 */
define(function(){
    function Find(option){
        this.data=option.data
        this.keywordDom=option.keywordDom
        this.listDom=option.listDom
        this.init()
    }
    Find.prototype={
        init:function(){
            this.initEvent()
        },
        initEvent:function(){
            var _this=this
            this.keywordDom.oninput=function(){
                var renderList=[]  //存匹配中的对象
                var keyword =this.value //存放关键字
                // 根据关键字在data数据中查找包含keyword的项
                if(keyword){
                    _this.data.forEach(function(item){
                        if(item.name.indexOf(keyword)!==-1){
                            renderList.push(item)
                        }
                    })
                }
                _this.render(renderList)
            }
        },
        render:function(arr){
            this.listDom.innerHTML=arr.map(function(item){
                return `<li>${item.name}<span>《${item.class}》</span></li>`
            }).join('')
        }
    }
    return Find
})