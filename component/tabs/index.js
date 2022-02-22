// component/tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabs: {
      type: Array,
      value: ['标签1', '标签2']
    },
    active: {
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
    change(e) {
      const index = e.currentTarget.dataset.index
      this.setData({
        active: index
      })
      this.triggerEvent('change',{index})
    }
  }
})
