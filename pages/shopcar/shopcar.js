Page({
    data:{
        storagedata:wx.getStorageSync('car')||[],
        ressum:0,
        resnum:0
    },
    onShow(){
        console.log(1);
        this.setData({
            storagedata:wx.getStorageSync('car')||[]
        })
    },
    parhandler(e){
        console.log(e);
        if(e.detail.value.length>0){
            for(let i=0;i<this.data.storagedata.length;i++){
                this.data.storagedata[i].checked=true
            }
            let sum=0;
            let num=0
            for(let i=0;i<this.data.storagedata.length;i++){
                sum+=this.data.storagedata[i].price*this.data.storagedata[i].num
                num+=this.data.storagedata[i].num
            }
            this.setData({
                ressum:sum,
                resnum:num
            })
        }else{
            for(let i=0;i<this.data.storagedata.length;i++){
                this.data.storagedata[i].checked=false
            }
            this.setData({
                ressum:0,
                resnum:0
            })
        }
        this.setData({
            storagedata:this.data.storagedata
        })
    }
})