// index.js
import api from "../../utils/request"
Page({

  data: {
    avatarUrl: "../../assets/default.png",
    classesList: [{
        title: "全部分类",
        key: ""
      },
      {
        title: "裙子",
        key: "skirt"
      },
      {
        title: "上衣",
        key: "tops"
      },
      {
        title: "外套",
        key: "coat"
      },
      {
        title: "卫衣",
        key: "hoodie"
      },
      {
        title: "鞋子",
        key: "shoes"
      },
      {
        title: "裤子",
        key: "pants"
      },
      {
        title: "其他",
        key: "other"
      }
    ],
    recommendList: []
  },
  onReady() {
    this.getData();
  },
  getData() {
    api.get("http://192.168.31.158/recommend").then(res => {
      const {
        code,
        data,
        message
      } = res;
      if (code === 200) {
        this.setData({
          recommendList: data
        })
      }
    })
  },
  onChooseAvatar(event) {
    const {
      avatarUrl
    } = event.detail;
    this.setData({
      avatarUrl
    });
  }
})