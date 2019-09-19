define(['./getEl.js'],function(getEl){
    return function(){
        getEl.getDom('#txt').value=''
        getEl.getDom('#bgcolor').value=""
        getEl.getDom('#bordercolor').value=''
    }
})