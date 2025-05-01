// components/banner.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    bannerList: {
      type: Array,
      value: ["../../assets/banner/banner.png", "../../assets//banner/banner.png", "../../assets//banner/banner.png"]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    circular: true, // 衔接滑动  123之后环能继续滑动
    indicatorDots: true, //是否显示点
    autoplay: false, //是否自动切换
    interval: 1000, //自动切换时间间隔
    duration: 1000, //滑动动画时长
    background: ["../../assets/default.png", "../../assets/default.png", "../../assets/default.png"]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})