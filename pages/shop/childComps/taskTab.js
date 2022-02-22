// pages/shop/childComps/taskTab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 0,
    dayTask: [
      {
        imgUrl: '/img/shop/ic_six.png',
        title: '每日签到',
        mark: '活跃值+5'
      },
      {
        imgUrl: '/img/shop/ic_seven.png',
        title: '领取游戏试玩奖励',
        mark: '活跃值首次+5，其余+1，最高+100'
      },
      {
        imgUrl: '/img/shop/ic_eight.png',
        title: '激励视频观看5次（0/5）',
        mark: '活跃值+10，最高+50'
      },
      {
        imgUrl: '/img/shop/ic_nine.png',
        title: '激励视频观看下载1次',
        mark: '活跃值+10，最高+30'
      },
      {
        imgUrl: '/img/shop/ic_ten.png',
        title: '完成一次充值任务',
        mark: '活跃值+20'
      }
    ],
    otherTask: [
      {
        imgUrl: '/img/shop/ic_twelve.png',
        title: '领取简单任务奖励',
        mark: '活跃值首次+5，其余+1，最高+50'
      }, {
        imgUrl: '/img/shop/ic_ten.png',
        title: '领取悬赏任务奖励',
        mark: '活跃值首次+5，其余+1，最高+50'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabChange(e) {
      const index = e.detail.index
      this.setData({
        current: index
      })
    },
    queryData() {
      console.log('query data')
    }
  }
})