Page({
    data:{
        prolist:[],
        num:1,
        total:0,
        id:'',
        name:''
    },
    onLoad(options){
        // console.log(options);
        if(options.id){
            this.setData({
                id:options.id
            })
        }
        if(options.name){
            this.setData({
                name:options.name
            })
        }
        this.getprolist()
    },
    getprolist(){
        wx.request({
          url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/search',
          method:"GET",
          data:{
                cid:this.data.id,
                pagenum:this.data.num,
                pagesize:10,
                query:this.data.name
          },
          success:(res)=>{
                // console.log(res);
                this.setData({
                    prolist:[...this.data.prolist,...res.data.message.goods],
                    total:res.data.message.total
                })
          }
        })
    },
    onReachBottom(){
        if(this.data.prolist.length>=this.data.total){
            return wx.showToast({
              title: '暂无数据',
              icon:'none'
            })
        }
        wx.showLoading({
          title: '加载中...',
        })
        this.setData({
            num:++this.data.num
        })
        this.getprolist()
        setTimeout(()=>{
            wx.hideLoading()
        },500)
    },
    onPullDownRefresh(){
        wx.showLoading({
          title: '加载中',
        })
        this.setData({
            num:1,
            prolist:[],
            total:0
        })
        this.getprolist()
        setTimeout(()=>{
            wx.stopPullDownRefresh()
            wx.hideLoading()
        },500)
    },
    gotodetail(e){
        wx.navigateTo({
          url: '/pages/detail/detail?id='+e.currentTarget.dataset.id,
        })
    }
})