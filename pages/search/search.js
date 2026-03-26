Page({
    data:{
        searchlist:[],
        hislist:wx.getStorageSync('his')||[],
        arr:wx.getStorageSync('his')||[]
    },
    ipthandler(e){
        wx.request({
          url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/qsearch',
          method:'GET',
          data:{
              query:e.detail.value
          },
          success:(res)=>{
              console.log(res);
              this.setData({
                  searchlist:res.data.message
              })
          }
        })
    },
    gotoproductlist(e){
        wx.navigateTo({
          url: '/pages/productlist/productlist?name='+e.currentTarget.dataset.name,
        })
    },
    entryhandler(e){
        console.log(e);
        let flag=this.data.hislist.some(item=>{
            return item==e.detail.value
        })
        if(flag){
            return
        }
        this.data.arr.push(e.detail.value)
        wx.setStorageSync('his', this.data.arr)
        this.setData({
            hislist:this.data.arr
        })
    },
    clearhandler(){
        wx.clearStorageSync()
        this.setData({
            hislist:[],
            arr:[]
        })
    }
})