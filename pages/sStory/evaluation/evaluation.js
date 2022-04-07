// index.js
// 获取应用实例
const app=getApp();
Page({
  data: {
    workorderNumber:"",
    changeScore:0,
    yourview: "",
    image:app.globalData.url
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
  test() {
    var that=this;
    var app = getApp();
    wx.request({
      url: app.globalData.url+'student/evaluate',
      data: {
        student_number: app.globalData.studentInfo,
        workorder_number: that.data.workorderNumber,
        maintenance_satisfaction:that.data.changeScore,
        evaluation:that.data.yourview
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success:function(res){
        console.log(res);
        wx.navigateBack();
      },
    })
  },
  // 事件处理函数
  
  onLoad:function(options) {
   var that=this;
   that.setData({
    workorderNumber:options.workorderNumber
   })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

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