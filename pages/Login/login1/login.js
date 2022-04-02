// pages/Login/login1/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    check: false,
    studentInfo: "",
    passWord: "",
    userinfo:""
  },
  bindInput: function (e) {
    this.setData({
      studentInfo: e.detail.value
    })
  },
  bindInput1: function (e) {
    this.setData({
      passWord: e.detail.value
    })
  },
  bindInput2: function (e) {
    this.setData({
      userinfo: e.detail.value
    })
  },
  test() {
    var that = this;
    that.setData({
      check: true
    })
  },
  Login: function () {
    var that = this;
    var app = getApp();
    wx.request({
      data: {
        student_number: that.data.studentInfo,
        passport: that.data.passWord
      },
      url: app.globalData.url + 'login/student',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log(res);
        if (res.data.code == 200) {
          app.globalData.studentInfo=that.data.studentInfo
          wx.switchTab({
            url: '/pages/sHome/s-home'
          })
        } else {
          wx.lin.showMessage({
            type: 'error',
            duration: 1500,
            content: '输入有误，请重新输入'
          });
        }
      }
    })
  },
  Login1: function () {
    var that = this;
    var app = getApp();
    wx.request({
      data: {
        jobnumber: that.data.userinfo,
        passport: that.data.passWord
      },
      url: app.globalData.url + 'login/maintainer',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log(res);
        if (res.data.code == 200) {
          app.globalData.userInfo=that.data.userinfo;
          wx.navigateTo({
            url: '/pages/wHome/w-home/w-home'
          })
        } else {
          wx.lin.showMessage({
            type: 'error',
            duration: 1500,
            content: '输入有误，请重新输入'
          });
        }
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})