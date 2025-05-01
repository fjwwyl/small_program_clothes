// components/c-icon/c-icon.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    name: String,
    type: String,
    width: String,
    height: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    src: "",
    style: ""
  },
  observers: {
    "name,type": function (src, type) {
      this.setData({
        src: `../../assets/icon/${src}.${type}`
      })
    },
    "width,height": function (width, height) {
      this.setData({
        style: `width: ${width}px;height: ${height}px`
      })
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})