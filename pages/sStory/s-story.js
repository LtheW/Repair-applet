// pages/sStory/s-story.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cards: [],
    workState: ['待维修', '维修中', '维修成功'],
    years: [],
    months: [],
    days: [],
    weekdays: [],
    times: [],
    weeks:["周一","周二","周三","周四","周五","周六","周天"]
  },
  Load: function () {
    var that = this;
    var app = getApp();
    wx.request({
      data: {
        student_number: app.globalData.studentInfo,
      },
      url: app.globalData.url + 'student/orderlist',
      success: function (res) {
        console.log(res);
        var year=[];
        var month=[];
        var day=[];
        var weekday=[];
        var ctime=[];
        //处理时间
        for (var i = 0; i < res.data.data.length; i++) {
          var time = res.data.data[i].initiationTime;
          var arr = time.split(" ");
          var date = arr[0];
          var arr1 = date.split('-');
          var weeks = new Date(arr1[0], parseInt(arr1[1] - 1), arr1[2]);
          year.push(arr1[0]);
          month.push(arr1[1]);
          day.push(arr1[2]);
          weekday.push(parseInt(weeks.getDay()));
          ctime.push(arr[1]);
        }
        that.setData({
          cards: res.data.data,
          years:year,
          months:month,
          days:day,
          weekdays:weekday,
          times:ctime
        })

      }
    })
  },

  test:function () {
    wx.navigateTo({
      url: '../sStory/evaluation/evaluation',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.Load();
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
    this.Load();
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