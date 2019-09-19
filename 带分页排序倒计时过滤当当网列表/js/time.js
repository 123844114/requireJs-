/**
 * 倒计时模块
 */
define(['getEl'],function (getEl) {
    return {
        init: function () {
            this.timer()
            var _this=this
            setInterval(function () {
                _this.timer()

            }, 1000)
        },
        timer: function () {
            //    1、获取当前时间
            var now = new Date()
            var end = new Date('2019-7-2 14:50:00')
            var cha = (end - now) / 1000  //秒
            // console.log(cha)
            // 2、转化成‘天 小时  分 秒’
            // 天 cha/60/60/24
            // console.log(cha/24/60/60 ) 
            var day = parseInt(cha / 24 / 60 / 60)
            //时 cha/60/60%24
            var hour = parseInt(cha / 60 / 60 % 24)
            //分   cha/60%60
            var minite = parseInt(cha / 60 % 60)
            //秒 cha%60
            var second = parseInt(cha % 60)
            console.log(day, hour, minite, second)
            getEl.getDom('#time').innerHTML = `${day}天 ${hour}时 ${minite}分${second} 秒`
        }
    }
})