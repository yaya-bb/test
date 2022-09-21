// pages/list/List.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getList();
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
  getList() {
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'https://unidemo.dcloud.net.cn/api/news',
      method: 'GET',
      data: {},
      success: res => {
        wx.hideLoading(),
        console.log(res),
        this.setData({
          list: res.data
        })
      },
      fail: () => {
        
      }
    })
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 重新发起请求，并关闭下拉窗口
    this.getList(() => wx.stopPullDownRefresh())
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