// pages/shopping_cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectGoods: 1,
    checkAll: true,
    checkGood: true,
    selectGoodsList: [{
        img: "../../assets/recommend/red.png",
        title: "红色",
        price: "123",
        color: "黄色",
        size: "all",
      },
      {
        img: "../../assets/recommend/red.png",
        title: "红色",
        price: "123",
        color: "黄色",
        size: "all",
      },
      {
        img: "../../assets/recommend/red.png",
        title: "红色",
        price: "123",
        color: "黄色",
        size: "all",
      },
      {
        img: "../../assets/recommend/red.png",
        title: "红色",
        price: "123",
        color: "黄色",
        size: "all",
      },
      {
        img: "../../assets/recommend/red.png",
        title: "红色",
        price: "123",
        color: "黄色",
        size: "all",
      },
      {
        img: "../../assets/recommend/red.png",
        title: "红色",
        price: "123",
        color: "黄色",
        size: "all",
      },
      {
        img: "../../assets/recommend/red.png",
        title: "红色",
        price: "123",
        color: "黄色",
        size: "all",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  onChange() {
    this.setData({
      checkAll: !this.data.checkAll
    })
  },
  onChangeGood() {

  }
})