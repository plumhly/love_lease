<template>
  <view style="background-color: lightblue">
    <view class="company_log">
      <image :src="imageUrl" mode="scaleToFill" />
      <text>{{ companyName }}</text>
    </view>
    <view class="company_info">
      <pl-list-item
        v-for="(item, index) in itemDatas"
        :key="index"
        :title="item.title"
        :value="item.value"
        :showBorder="index < itemDatas.length - 1"
        @click="select"
      >
        <template v-slot:leading>
          <image
            :src="'/static/icon_' + item.leadingIcon + '.png'"
            mode="widthFix"
            style="width: 32rpx"
          />
        </template>
        <template #tail>
          <template v-if="item.tailIcon">
            <image
              :src="'/static/icon_' + item.tailIcon + '.png'"
              mode="widthFix"
              style="width: 32rpx"
            />
          </template>
        </template>
      </pl-list-item>
    </view>

    <view class="tip">
      <text>温馨提示:</text>
      <text>{{ tip }}</text>
    </view>
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
import { fetchCustomerService } from "@/api/index.js";
export default {
  components: {},
  data: () => ({
    itemDatas: [],
    companyName: "百度科技",
    imageUrl:
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgdown.baidu.com%2Fimg%2F0%2F200_200%2F1c7d0637ca01803040e087fb44e47654.png&refer=http%3A%2F%2Fgdown.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662029092&t=ccebb7c2519cc32f217df9736f2d5c29",
    tip: "点击电话号码可以呼叫店家\n点击微信栏可以赋值微信账号\n点击二维码图标可以显示二维码",
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

    select() {
      console.log("click");
    },

    parseInfo(data) {
      // 手机信息
      if (data.mobilePhoneNumber) {
        this.itemDatas.push({
          leadingIcon: "iphone",
          title: "手机",
          value: data.mobilePhoneNumber,
        });
      }

      // 座机信息
      if (data.fixPhoneNumber) {
        this.itemDatas.push({
          leadingIcon: "telephone",
          title: "座机",
          value: data.fixPhoneNumber,
        });
      }

      // 微信
      if (data.wechat) {
        let wxData = {
          leadingIcon: "wechat",
          title: "微信",
          value: data.wechat,
        };

        if (data.wechatQrCodePictureUrl) {
          wxData.tailUrl = data.wechatQrCodePictureUrl;
          wxData.tailIcon = "qrcode";
        }

        this.itemDatas.push(wxData);
      }

      // 公众号
      if (data.officialAccountPictureUrl) {
        this.itemDatas.push({
          leadingIcon: "public",
          title: "微信公众号",
          tailIcon: "qrcode",
          tailUrl: data.officialAccountPictureUrl,
        });
      }

      // 地址
      if (data.address) {
        this.itemDatas.push({
          leadingIcon: "location",
          title: "地址",
          value: data.address,
        });
      }
    },
  },
  watch: {},

  // 页面周期函数--监听页面加载
  onLoad() {
    fetchCustomerService()
      .then((response) => {
        console.log(response.data);
        this.parseInfo(response.data);
      })
      .catch((error) => {});
  },
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
@import "@/uni.scss";

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
    box-shadow: 0 4px 10px #00000080;
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

.tip {
  font-size: $uni-font-size-sm;
  padding: 48px 0 0 24px;
  text:first-child {
    display: block;
    color: $uni-text-color;
    font-weight: 700;
    margin-bottom: 12px;
  }

  text:last-child {
    color: $uni-text-color-grey;
    font-weight: 300;
  }
}
</style>