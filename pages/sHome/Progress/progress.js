// pages/sHome/progress/progress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    workOrderState: "0",
    form:[],
    urls:[],
    urls5: [
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/album/photo-1.jpg?sign=ff17b6597c5659186d54469e6122d153&t=1590025404',
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/album/photo-2.jpg?sign=7ccd10f793df154311f15a7b15d9ba57&t=1590025418',
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/album/photo-3.jpg?sign=d71bb290f896e14bb800d0fb807f6764&t=1590025427',
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/album/photo-4.jpg?sign=37d3fc32fe841a137e56b54cec2807c8&t=1590025434',
      'https://656e-env-9eb476-1258886794.tcb.qcloud.la/images/album/photo-5.jpg?sign=785abbd12c4fa70454ef4bd7c3961536&t=1590025441'
    ],
  },
  Load: function () {
    var app = getApp();
    var that = this;
    wx.request({
      data: {
        student_number: app.globalData.studentInfo
      },
      url: app.globalData.url + 'student/getlatestorder',
      success: function (res) {
        console.log(res);
        var jsonStr = res.data.data.pictureAddress;
        var json = JSON.parse(jsonStr);
        var arr=that.data.urls;
        for(var i=0;i<4;i++){
          if(json[i]==undefined){
            break;
          }
          arr.push(json[i]);
        }
        that.setData({
          workOrderState: parseInt(res.data.data.workorderState) - 1,
          form:res.data.data,
          urls:arr
        })
        console.log(that.data.urls);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.Load();
  },

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