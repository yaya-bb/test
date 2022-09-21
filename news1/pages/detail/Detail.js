// pages/detail/Detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    strings: '',
    // list传来的newid
    id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options.id),
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://unidemo.dcloud.net.cn/api/news/36kr/'+ options.id,
      success: res => {
        wx.hideLoading(),
        console.log(res.data),
        this.setData({
          id: options.id,
          title: res.data.title,
          strings: res.data.content,
        })
      },
      fail: () => {
        
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})