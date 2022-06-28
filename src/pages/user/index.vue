<template>
  <div class="user">
    <uni-list>
      <uni-list-item
        v-for="(item, index) in itemDatas"
        :key="index"
        :show-extra-icon="true"
        :extra-icon="item.icon"
        :rightText="item.value"
        :title="item.title"
        clickable
        @click="action(index)"
      />
    </uni-list>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    itemDatas: [
      {
        title: "电话：",
        value: "18988888888",
        icon: {
          color: "#25D657",
          type: "phone-filled",
          size: "20",
        },
      },
      {
        title: "微信：",
        value: "18988888888",
        icon: {
          color: "#25D657",
          type: "weixin",
          size: "20",
        },
      },
    ],
  }),
  computed: {},
  methods: {
    action(index) {
      if (index == 0) {
        this.callPhone();
      } else {
        this.communicateUsingWechat();
      }
    },

    callPhone() {
      uni.makePhoneCall({
        phoneNumber: this.itemDatas[0].value,
      });
    },

    communicateUsingWechat() {
      uni.setClipboardData({
        data: this.itemDatas[1].value,
        showToast: true,
      });
    },
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {},
  // 页面周期函数--监听页面初次渲染完成
  onReady() {},
  // 页面周期函数--监听页面显示(not-nvue)
  onShow() {},
  // 页面周期函数--监听页面隐藏
  onHide() {},
  // 页面周期函数--监听页面卸载
  onUnload() {},
  // 页面处理函数--监听用户下拉动作
  // onPullDownRefresh() { uni.stopPullDownRefresh(); },
  // 页面处理函数--监听用户上拉触底
  // onReachBottom() {},
  // 页面处理函数--监听页面滚动(not-nvue)
  // onPageScroll(event) {},
  // 页面处理函数--用户点击右上角分享
  // onShareAppMessage(options) {},
};
</script>

<style scoped></style>