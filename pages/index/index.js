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
    recommendList: [{
        img: "../../assets/recommend/red.png",
        title: "红色",
        price: "123"
      },
      {
        img: "../../assets/recommend/orange.png",
        title: "橙色",
        price: "123"
      },
      {
        img: "../../assets/recommend/yellow.png",
        title: "黄色",
        price: "123"
      },
      {
        img: "../../assets/recommend/green.png",
        title: "绿色",
        price: "123"
      },
      {
        img: "../../assets/recommend/cyan.png",
        title: "青色",
        price: "123"
      },
      {
        img: "../../assets/recommend/blue.png",
        title: "蓝色",
        price: "123"
      },
      {
        img: "../../assets/recommend/purple.png",
        title: "紫色",
        price: "123"
      }
    ]
  },
  onShow() {

  },
  getData() {
    api.get("http://192.168.31.158/users").then(res => {
      console.log(res);
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