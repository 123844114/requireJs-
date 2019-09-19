require.config({
    baseUrl:'./js',
    paths:{
        data:'./data',
        getEl:'./getEl',
        shopcar:'./shopcar'
    }
})
require(['data','getEl','shopcar'],function(data,getEl,ShopCar){
  new ShopCar({
    data:data,
    checkall:getEl.getDom('#checkall'),
    totalCount:getEl.getDom('.totalCount'),
    totalPrice:getEl.getDom('.totalPrice'),
    tbody:getEl.getDom('tbody')
  })
})