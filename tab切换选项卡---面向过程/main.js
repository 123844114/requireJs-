/**
 * 主入口文件
 */
require.config({
baseUrl:'./js',
paths:{
    getEl:'./getEl',
    tab:'./tab'
}
})
require(['tab'],function(){})