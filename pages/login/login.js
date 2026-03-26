Page({
    handler(){
        wx.setStorageSync('token', true)
        wx.switchTab({
          url: '/pages/index/index',
        })
    }
})