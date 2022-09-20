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
  // goDetail: function(e) {
  //   // event.target 触发事件的组件的一些属性值集合，想要一个大组件中有多个触发事件，就可以用target减少事件定义
  //   // event.currentTarget 当前组件的一些属性值集合，想要更精确用这个
  //   let newsid = e.currentTarget.dataset.newid
  //   wx.navigateTo ({
  //     url: `../detail/Detail?id=${newsid}`
  //   });
  //   console.log(newsid);
  // },
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