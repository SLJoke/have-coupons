// pages/shop/childComps/tabCtrl.js
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
    content: [{
      imgUrl: '/img/shop/ic_thirteen.png',
      title: '使用美团红包',
      mark: '红包奖励+1元'
    }, {
      imgUrl: '/img/shop/ic_fourteen.png',
      title: '使用饿了么红包',
      mark: '红包奖励+1元'
    }, {
      imgUrl: '/img/shop/ic_fifteen.png',
      title: '拼多多限时秒杀',
      mark: '红包奖励+1元'
    }, {
      imgUrl: '/img/shop/ic_fifteen.png',
      title: '拼多多限时秒杀',
      mark: '红包奖励+1元'
    }, {
      imgUrl: '/img/shop/ic_fifteen.png',
      title: '拼多多限时秒杀',
      mark: '红包奖励+1元'
    }, {
      imgUrl: '/img/shop/ic_fifteen.png',
      title: '拼多多限时秒杀',
      mark: '红包奖励+1元'
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    queryData() {
      console.log('console')
    },
  }
})
