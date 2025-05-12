// pages/mine/mine.js

import {
  getStorage
} from "../../utils/storage"
import {
  ComponentWithStore
} from "mobx-miniprogram-bindings"

import {
  userStore
} from '../../stores/user'
ComponentWithStore({
  storeBindings: {
    store: userStore,
    fields: ['token', 'userInfo'],
    actions: ['setUserInfo']
  },
  data: {

  },
  methods: {
    login() {
      wx.navigateTo({
        url: '/pages/login/login',
      })
    },
    userSetting() {
      wx.navigateTo({
        url: '/pages/user_setting/index',
      })
    },
  },
})