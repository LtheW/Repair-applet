// pages/sHome/s-home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      imgUrls: [
        '/images/轮播1.png',
        '/images/轮播3.png'
      ],
      indicatorDots: true,  //是否显示面板指示点
      autoplay: true,      //是否自动切换
      interval: 3000,       //自动切换时间间隔
      duration: 1000,       //滑动动画时长s
      inputShowed: false,
      inputVal: ""
  
    },
    jumppage:function () {
      wx.navigateTo({
        url: '../TZ/tz'
      }) 
    },
    bindtap:function () {
      wx.navigateTo({
        url: '../Serve/Serve/serve'
      }) 
    },
    bindtap1:function () {
      wx.navigateTo({
        url: '../History/history'
      }) 
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
  
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