require.config({
    baseUrl:'./js',
    paths:{
        getEl:'./getEl',
        previewImage:'./previewImage',
        velocity:'../lib/velocity.min'
    }
})
require(['previewImage'],function(imageViewer){
    imageViewer.previewImage({
        currentIndex: 0, // 当前显示图片的http链接
        urls: ['./img/1.jpg','./img/2.jpg','./img/3.jpg','./img/4.jpg'] // 需要预览的图片http链接列表
      })

})