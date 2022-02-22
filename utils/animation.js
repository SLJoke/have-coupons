export function fadeIn(that, params) {
  const data = {}
  const animation = wx.createAnimation({
    duration: 500,
    timingFunction: 'ease'
  })
  animation.top(0).opacity(1).step()
  data[params] =  animation.export()
  that.setData(data)
}

export function fadeOut(that, params) {
  const data = {}
  const animation = wx.createAnimation({
    duration: 500,
    timingFunction: 'ease'
  })
  animation.top('100%').opacity(0).step()
  data[params] = animation.export()
  that.setData(data)
}