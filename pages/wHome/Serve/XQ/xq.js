// pages/sHome/progress/progress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    workorderNumber:"",
    workOrderState: "0",
    form:[],
    urls:[],
    describe:[],
    
  },
  inputDescripe: function (e) {
    this.setData({
      describe: e.detail.value
    })
  },
  Load: function () {
    var app = getApp();
    var that = this;
    wx.request({
      data: {
        workorder_number:that.data.workorderNumber
      },
      url: app.globalData.url + 'maintainer/preliminary',
      success: function (res) {
        console.log(res);
        var jsonStr = res.data.data.pictureAddress;
        
        var json = JSON.parse(jsonStr);
        console.log(json);
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
  submit(){
    var app = getApp();
    var that = this;
    wx.request({
      data: {
        workorder_number:that.data.workorderNumber,
        maintenance_record:that.data.describe,
        maintainer_number:app.globalData.userInfo
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      url: app.globalData.url + 'maintainer/maintenance',
      success: function (res) {
        console.log(res);
        wx.navigateBack();
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var that=this;
    that.setData({
      workorderNumber:options.workorder_number
    })
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