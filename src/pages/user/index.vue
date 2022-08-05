<template>
  <view>
    <view class="company_log">
      <image :src="logoUrl" mode="aspectFit" />
      <text>{{ companyName }}</text>
    </view>
    <view class="company_info">
      <pl-list-item
        v-for="(item, index) in itemDatas"
        :key="index"
        :title="item.title"
        :value="item.value"
        :showBorder="index < itemDatas.length - 1"
        :index="index"
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
              style="width: 32rpx; margin-left: 12rpx"
              @click.stop="showQrCode(item.tailUrl)"
            />
          </template>
        </template>
      </pl-list-item>
    </view>
    <view class="tip">
      <text>温馨提示:</text>
      <text>{{ tip }}</text>
    </view>
    <uni-popup class="popup" ref="popup" type="center">
      <image :src="qrUrl" mode="scaleToFill" />
    </uni-popup>
  </view>
</template>

<script>
import { fetchCustomerService } from "@/api/index.js";

const InfoType = {
  phone: 1,
  telePhone: 2,
  whchat: 3,
  public: 4,
  adrees: 5,
};

export default {
  components: {},
  data: () => ({
    itemDatas: [],
    companyName: "",
    logoUrl: "",
    tip: "点击电话号码可以呼叫店家",
    qrUrl: "",
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

    callPhone(phoneNumber) {
      if (phoneNumber) {
        uni.makePhoneCall({
          phoneNumber: phoneNumber,
        });
      }
    },

    copyData(value) {
      if (value) {
        uni.setClipboardData({
          data: value,
          showToast: true,
        });
      }
    },

    select(index) {
      if (index == "undefind") {
        return;
      }

      let data = this.itemDatas[index];
      switch (data.type) {
        case InfoType.phone:
        case InfoType.telePhone:
          this.callPhone(data.value);
          break;

        case InfoType.adrees:
        case InfoType.whchat:
          this.copyData(data.value);
          break;
      }
    },

    showQrCode(url) {
      this.qrUrl = url;
      this.$refs.popup.open();
    },

    parseInfo(data) {
      // 手机信息
      if (data.mobilePhoneNumber) {
        this.itemDatas.push({
          type: InfoType.phone,
          leadingIcon: "iphone",
          title: "手机",
          value: data.mobilePhoneNumber,
        });
      }

      // 座机信息
      if (data.fixPhoneNumber) {
        this.itemDatas.push({
          type: InfoType.telePhone,
          leadingIcon: "telephone",
          title: "座机",
          value: data.fixPhoneNumber,
        });
      }

      // 微信
      if (data.wechat) {
        let wxData = {
          type: InfoType.whchat,
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
          type: InfoType.public,
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

      // 公司名称和logo
      this.logoUrl = data.logoPictureUrl;
      this.companyName = data.name;
    },
  },

  // 页面周期函数--监听页面加载
  onLoad() {
    fetchCustomerService()
      .then((response) => {
        console.log(response.data);
        this.parseInfo(response.data);
      })
      .catch((error) => {});
  },
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
    color: $uni-text-color;
    font-size: $uni-font-size-base;
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
  font-size: 0;
  padding: 24px 0 0 12px;
  text:first-child {
    font-size: $uni-font-size-sm;
    display: block;
    color: $uni-text-color;
    font-weight: 700;
    margin-bottom: 6px;
  }

  text:last-child {
    font-size: $uni-font-size-tiny;
    color: $uni-text-color-grey;
    font-weight: 300;
  }
}

.popup {
  image {
    width: 400rpx;
    height: 400rpx;
  }
}
</style>