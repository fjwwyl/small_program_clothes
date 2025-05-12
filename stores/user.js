import {
  observable,
  action
} from "mobx-miniprogram"
import {
  getStorage
} from "../utils/storage"
export const userStore = observable({
  token: getStorage("token") || "",
  userInfo: {
    avatar: "",
    nickName: getStorage("nickName") || "",
  },
  setUserInfo: action(function (userInfo) {
    this.userInfo = {
      ...this.userInfo,
      ...userInfo
    };
  }),
  setToken: action(function (token) {
    this.token = token;
  })
})