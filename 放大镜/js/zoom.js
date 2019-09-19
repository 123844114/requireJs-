/**
 * 放大镜
 */
define(['getEl'],function(getEl){
    return function(){
        //监听鼠标滑动事件
        var leftBox = getEl.getDom('.leftBox')
        var moveBox = getEl.getDom('.moveBox')
        var rightImg=getEl.getDom('.rightBox>img')
        var rightBox=getEl.getDom('.rightBox')
        //鼠标移动事件
        leftBox.addEventListener('mousemove',function(e){
            // 当鼠标移动上来之后显示    注意不要使用offsetX
            console.log(e)
            var x=e.clientX-leftBox.offsetLeft-moveBox.offsetWidth/2
            var y=e.clientY-leftBox.offsetTop-moveBox.offsetHeight/2
            if(x<0){
                x=0
            }
            if(y<0){
                y=0
            }
            if(x>leftBox.offsetWidth-moveBox.offsetWidth){
                x=leftBox.offsetWidth-moveBox.offsetWidth
            }
            if(y>leftBox.offsetHeight-moveBox.offsetHeight){
                y=leftBox.offsetHeight-moveBox.offsetHeight
            }
            moveBox.style.left=x+'px'
            moveBox.style.top=y+'px'
            rightImg.style.left=-x*4+'px'
            rightImg.style.top=-y*4+'px'
        })
        //鼠标移入 mouseenter
        leftBox.addEventListener('mouseover',function(e){
            moveBox.style.display='block'
            rightBox.style.display='block'
        })
        //鼠标移出 mouseout
        leftBox.addEventListener('mouseout',function(){
            moveBox.style.display='none'
            rightBox.style.display='none'
        })
    }
})