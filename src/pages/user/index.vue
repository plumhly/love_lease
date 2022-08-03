<template>
  <view style="background-color: red">
    <view class="company_log">
      <image :src="imageUrl" mode="scaleToFill" />
      <text>{{ companyName }}</text>
    </view>
    <view class="company_info">
      <pl-list-item title="电话" value="189000">
        <template v-slot:leading>
          <image src="/static/kefu.png" mode="widthFix" style="width: 32rpx" />
        </template>
      </pl-list-item>
    </view>

    <view class="tip"> </view>
  </view>

  <!-- <div class="user">
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
  </div> -->
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
    companyName: "百度科技",
    imageUrl:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgdown.baidu.com%2Fimg%2F0%2F200_200%2F1c7d0637ca01803040e087fb44e47654.png&refer=http%3A%2F%2Fgdown.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662029092&t=ccebb7c2519cc32f217df9736f2d5c29",
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

<style scoped lang="scss">
.company_log {
  padding: 50rpx 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  image {
    width: 194rpx;
    height: 194rpx;
    border-radius: 97rpx;
    margin-bottom: 16px;
  }
  text {
    // display: inline-block;
  }
}

.company_info {
  background-color: #f0f0f0;
  pl-list-item {
    display: block;
    height: 112rpx;
  }
}
</style>