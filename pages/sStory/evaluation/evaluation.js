// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    changeScore: 0,
    yourview: "",
  },
  writeView: function (e) {
    this.setData({
      yourview: e.detail.value
    })
  },
  changeScore: function (e) {
    this.setData({
      changeScore: e.detail.score
    })
  },
  submit() {
    wx.request({
      url: 'https://cn-zz-bgp-4.natfrp.cloud:58216/student/evaluate',
      header: {
        "Content-Type": "multipart/form-data"
      },
      method: "POST",
      data: {
        student_number: 1911111111,
        workorder_number: 10,
        maintenance_satisfaction:this.data.changeScore,
        evaluation:this.data.yourview
      },
      success:function(res){
        console.log(res);
      },
    })
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

})