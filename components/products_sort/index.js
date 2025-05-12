
Component({
  /**
   * 组件的属性列表
   */
  options: {
   
   
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    newIcon: "arrow-down",
    saleIcon: "arrow-down",
    priceIcon: "arrow-down",
    activeSort: "newIcon",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getState(event, key) {
      const iconName = event.currentTarget.dataset.icon;
      const isDown = this.data[iconName].endsWith("down");
      const isActive = this.data.activeSort === iconName;
      if (iconName === key) {
        if (isDown) {
          if (isActive) {
            return "arrow-up";
          } else {
            return "arrow-down";
          }
        } else {
          return "arrow-down";
        }
      } else {
        return "arrow-down"
      }
    },
    changeIcon(event) {
      const iconName = event.currentTarget.dataset.icon;
      this.setData({
        activeSort: iconName,
        newIcon: this.getState(event, "newIcon"),
        saleIcon: this.getState(event, "saleIcon"),
        priceIcon: this.getState(event, "priceIcon")
      })
    }
  }
})