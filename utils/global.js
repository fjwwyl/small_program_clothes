const toast = ({
  title = '数据加载中...',
  icon = 'success',
  duration = 2000,
  mask = true
} = {}) => {

  wx.showToast({
    title,
    icon,
    duration,
    mask
  })
}

export {
  toast
}