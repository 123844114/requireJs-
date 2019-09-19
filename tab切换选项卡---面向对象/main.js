/**
 * 主入口文件
 */
require.config({
    baseUrl: './js',
    paths: {
        getEl: './getEl',
        tab: './tab',
        data: './data'
    }
})
require(['tab'], function (Tab) {
    new Tab()
 })