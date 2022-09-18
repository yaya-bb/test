// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    wording: "world",
  },
  onclick: function() {
    this.setData({
      wording: 'school'
    })
  }
})