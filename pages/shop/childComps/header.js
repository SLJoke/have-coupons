// pages/shop/childComps/header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activeValue: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPopup() {
      this.triggerEvent('toDisc')
    },
    onRule() {
      this.triggerEvent('toRule')
    }
  }
})
