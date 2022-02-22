// pages/shop/childPages/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentType: {},
    currentIndex: 0,
    content: ''
  },

  changeRecord(e) {
    const index = e.detail.index
    this.setData({
      currentIndex: index
    })
    this.getContent(index)
  },

  getContent(index) {
    switch (index) {
      case 0:
        this.setData({
          currentType: 'duobaoRecord',
          content: '夺宝记录'
        })
        break;
      case 1:
        this.setData({
          currentType: 'lotteryRecord',
          content: '抽奖记录'
        })
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const index = Number(options.index)
    this.setData({
      currentIndex: index
    })
    this.getContent(index)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})