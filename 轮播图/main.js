require.config({
    baseUrl:'./js',
    paths:{
        getEl:'./getEl',
        carousel:'./carousel',
        velocity:'../lib/velocity.min',
        // jquery:'http://code.jquery.com/jquery'
    }
})
require(['getEl','carousel'],function(getEl,Carousel){
    new Carousel({
        imgs:['./images/1.jpg','./images/2.jpg','./images/3.jpg'],
        imgBox:getEl.getDom('#imgBox'),
        leftBtn:getEl.getDom('#leftBtn'),
        carouseDom:getEl.getDom('#carouse'),
        nodes:getEl.getDoms('#nodeBox>span'),
        time:2000
    })
})