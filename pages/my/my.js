Page({
    data:{
        list:[
            {num:8,title:'收藏的店铺'},
            {num:14,title:'收藏的商品'},
            {num:18,title:'关注的商品'},
            {num:84,title:'足迹'},
        ]
    },
    exit(){
        wx.showModal({
          title: '提示',
          content: '确认退出登录吗？',
          complete: (res) => {
            if (res.confirm) {
              wx.setStorageSync('token', false)
              wx.navigateTo({
                url: '/pages/login/login',
              })
            }
        
  
          }
        })
    }
})