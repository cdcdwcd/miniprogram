Page({
    data:{
        id:'',
        detail:{}
    },
    onLoad(options){
        if(options.id){
            this.setData({
                id:options.id
            })
        }
        this.getdetail()
    },
    getdetail(){
        wx.request({
          url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail',
          method:'GET',
          data:{
              goods_id:this.data.id
          },
          success:(res)=>{
              console.log(res);
              this.setData({
                  detail:res.data.message
              })
          }
        })
    },
    prewHandler(e){
        let pics=this.data.detail.pics
        let arr=[]
        for(let i=0;i<pics.length;i++){
            arr.push(pics[i].pics_big)
        }
        wx.previewImage({
            current:e.currentTarget.dataset.current,
            urls: arr,
        })
    },
    addcar(){
        let arr=wx.getStorageSync('car')||[]
        let index=arr.findIndex(item=>item.id==this.data.detail.goods_id)
        if(index==-1){
            arr.push({   
                id:this.data.detail.goods_id,
                img:this.data.detail.goods_big_logo,
                price:this.data.detail.goods_price,
                name:this.data.detail.goods_name,
                num:1,
                checked:false          
        })
        }else{
            arr[index].num++
        }
        
        wx.setStorageSync('car', arr)
        wx.showToast({
          title: '加入购物车成功',
        })
    }
    
})