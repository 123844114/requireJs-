/**
 * 文档注释
 * 功能：获取dom元素
 * document.getElementById
 * parent.getElementById 
 * parent.querySelector
 * parent.querySelectorAll
 */

define(function(){
    //返回一个dom元素，querySelector
    // var getDom=function(dom,parent){
    //     var p=parent||document     //短路   ||   &&
    //     return p.querySelector(dom)
    // }
    var getDom=function(dom){
        return document.querySelector(dom)
    }
    //返回数组dom元素
    var getDoms=function(dom,parent){
        return parent.querySelectorAll(dom)
    }
    return {getDom:getDom,getDoms:getDoms}
})