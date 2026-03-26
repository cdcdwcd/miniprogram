Page({
    data:{
        cartlist:[],
        activeIndex:0
    },
    onLoad(){
        this.getcartlist()
    },
    getcartlist(){
        wx.request({
          url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories',
          method:'GET',
          success:(res)=>{
            // console.log(res);
            this.setData({
                cartlist:res.data.message
            })
          }
        })
    },
    tabhandler(e){
        // console.log(e);
        this.setData({
            activeIndex:e.currentTarget.dataset.index
        })
    },
    navtoproductlist(e){
        // console.log(e);
        wx.navigateTo({
          url: '/pages/productlist/productlist?id='+e.currentTarget.dataset.id,
        })
    }
})