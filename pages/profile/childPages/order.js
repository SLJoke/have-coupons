// pages/profile/childPages/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabCtrl: ['全部订单', '待付款', '待发货', '售后/客服'],
    currentIndex: 0,
    currentType: 'all',
    orderInfo: []
  },

  tabCtrlClick(e) {
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    })
    this.changeType()
    this.getOrderInfo(this.data.currentType)
  },

  changeType() {
    switch (this.data.currentIndex) {
      case 0:
        this.setData({
          currentType: 'all'
        });
        break;
      case 1:
        this.setData({
          currentType: 'notPay'
        });
        break;
      case 2:
        this.setData({
          currentType: 'notGoods'
        });
        break;
      case 3:
        this.setData({
          currentType: 'after'
        });
        break;
    }
  },

  getOrderInfo(type) {
    // 网络请求
    console.log(type)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentIndex: Number(options.currentIndex)
    })
    this.changeType()
    this.getOrderInfo(this.data.currentType)
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