/**
 * 获取dom
 */
define(function(){
    function getDom(dom){
        return document.querySelector(dom)
    }
    return {getEl:getDom}
})