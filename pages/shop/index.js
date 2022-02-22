import {
  request
} from '../../utils/request'
import {
  fadeIn,
  fadeOut
} from '../../utils/animation'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDisc: false,
    showRule: false,
    rotate: {},
    fadeToggle: {},
    activeValue: 200,
    clickCount: 0,
    clickTime: new Date().getTime(),
    random: 2
  },

  toDisc() {
    this.setData({
      showDisc: true,
    })
    fadeIn(this, 'fadeToggle')
  },

  hideDisc() {
    fadeOut(this, 'fadeToggle')
    setTimeout(() => {
      this.setData({
        showDisc: false
      })
    }, 500)
  },

  toRule() {
    this.setData({
      showRule: true,
    })
    fadeIn(this, 'fadeToggle')
  },

  hideRule() {
    fadeOut(this, 'fadeToggle')
    setTimeout(() => {
      this.setData({
        showRule: false
      })
    }, 500)
  },

  goToLotteryRecord() {
    wx.navigateTo({
      url: './childPages/record?index=1',
    })
  },

  lotteryStart() {
    if (this.data.activeValue > 0) {
      const nowTime = new Date().getTime()
      const deg = this.deg()
      if ((nowTime - this.data.clickTime) > 2200) {
        let animation = wx.createAnimation({
          delay: 0,
          duration: 2000,
          timingFunction: 'ease-out'
        })
        animation.rotate(deg).step()
        this.setData({
          rotate: animation.export()
        })
        this.setData({
          clickTime: new Date().getTime()
        })
        setTimeout(() => {
          this.getLottery()
        }, 2000);
      }
    } else {
      wx.showToast({
        title: '当前活跃值不够抽奖',
      })
    }
  },

  deg() {
    this.setData({
      clickCount: this.data.clickCount + 1
    })
    let deg = this.data.random * -45 + 22.5
    if (this.data.clickCount > 0) {
      deg += 1080 * this.data.clickCount
    }
    return deg
  },

  getLottery() {
    switch (this.data.random) {
      case 1:
        wx.showToast({
          title: '获得5活跃值',
        });
        break;
      case 2:
        wx.showToast({
          title: '获得8活跃值',
        });
        break;
      case 3:
        wx.showToast({
          title: '获得66活跃值',
        });
        break;
      case 4:
        wx.showToast({
          title: '获得5活跃值',
        });
        break;
      case 5:
        wx.showToast({
          title: '获得1活跃值',
        });
        break;
      case 6:
        wx.showToast({
          title: '谢谢参与',
        });
        break;
      case 7:
        wx.showToast({
          title: '获得0.2红包',
        });
        break;
      case 8:
        wx.showToast({
          title: '获得2活跃值',
        });
        break;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(request)
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