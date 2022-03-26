// pages/sHome/Repair/repair.js
const util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

    dorm: '',
    telephone: '',
    time: '',
    describe: '',
    array: ['9:00--10:00', '10:00-11:00', '11:00--12:00', '14:00--15:00'],
    index: 0,
    length: '',
    allImage: [],
    reAllImages: []
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  inputAddress: function (e) {
    this.setData({
      dorm: e.detail.value
    })
  },
  inputTelephone: function (e) {
    this.setData({
      telephone: e.detail.value
    })
  },
  inputDescripe: function (e) {
    this.setData({
      describe: e.detail.value
    })
  },
  onChangeTap: function (e) {
    var that = this;
    console.log(e.detail.current);
    that.setData({
      allImage: e.detail.current
    })
    
  },
   submitImages:  function (i) {
    var that = this;
      return new Promise((resolve, reject) => {
       
          wx.uploadFile({
            url: 'https://cn-cd-dx-6.natfrp.cloud:41348/fileUpload',
            filePath: encodeURI(that.data.allImage[i]),
            name: 'file',
            formData: {
              file: that.data.allImage[i]
            },
            header: {
              "Content-Type": "multipart/form-data"
            },
            method: "POST",
            success: function (res) {
              resolve(res);
              var jsonStr = res.data;
              var json = JSON.parse(jsonStr);
              var arr = that.data.reAllImages;
              //console.log(jsonStr)
              arr.push(json.data);
              that.setData({
                reAllImages: arr
              })
              //console.log(that.data.reAllImages)
            },
            fail: function (err) {
              reject(err);
            }
          })
        
      })    
  },

  async submit(event) {
    var that = this;
    var app = getApp();
    var upTime = util.formatTime(new Date());
    
    for (var i = 0; i < that.data.allImage.length; i++) {
    const a=await that.submitImages(i);
    }
    console.log(this.data.reAllImages[1]);

    var jarr = {};
    for (var j = 0; j < this.data.reAllImages.length; j++) {
      jarr[j] = {};
      jarr[j] = that.data.reAllImages[j];

    }
    //console.log(jarr);
    var jsonArr = JSON.stringify(jarr);


    //console.log(jsonArr);
    wx.request({
      data: {
        student_number: app.globalData.studentInfo,
        contact_information: this.data.telephone,
        workorder_content: this.data.describe,
        address: this.data.dorm,
        picture_address: jsonArr,
        fixed_time: this.data.array[this.data.index]
      },
      url: app.globalData.url + 'student/submitorder',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success: function (res) {
        console.log("提交成功")
        console.log(res);
        if (res.data.code == 200) {
          wx.navigateBack();
        }
      }
    })
  },
  onLoad: function () {
    wx.lin.initValidateForm(this)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that=this;
    that.setData({
      reAllImages:that.data.reAllImages
    })
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