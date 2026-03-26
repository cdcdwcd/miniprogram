Page({
    data:{
        swiperList:[],
        navList:[],
        floorList:[]
    },
   onLoad(){
       let token=wx.getStorageSync('token')
       if(!token){
           wx.navigateTo({
             url: '/pages/login/login',
           })
       }
    this.getswiperList()
    this.getnavlist()
    this.getfloorlist()
   },
   getswiperList(){
    wx.request({
        url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
        method:'GET',
        success:(res)=>{
           //  console.log(res);
            if(res.statusCode!=200){
                return wx.showToast({
                  title: '轮播图加载失败',
                  icon:'error'
                })
            }
            this.setData({
               swiperList:res.data.message
            })
        }
      })
   },
   getnavlist(){
    wx.request({
        url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/catitems',
        method:'GET',
        success:(res)=>{
           //  console.log(res);
            if(res.statusCode!=200){
                return wx.showToast({
                  title: '加载导航错误',
                  icon:'error'
                })
            }
            this.setData({
                navList:res.data.message
            })
        }
      })
   },
   getfloorlist(){
    wx.request({
        url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata',
        method:'GET',
        success:(res)=>{
            // console.log(res);
            this.setData({
               floorList:res.data.message
            })
        }
      })
   }
})