<template>
  <view class="container">
    <view class="banner-container">
      <swiper @change="changeSwipper">
        <swiper-item
          v-for="(item, index) in banners"
          :key="index"
          @tap="showBannerDetail"
        >
          <image :src="item.url" mode="aspectFill" />
        </swiper-item>
      </swiper>
      <label class="tag">
        {{ indicatorString }}
      </label>
    </view>
    <view class="info">
      <view class="price">
        <label>￥</label>
        <label>{{ price }}</label>
      </view>
      <label class="introduce">{{ introduce }}</label>
    </view>
    <view class="detail-picture">
      <image
        v-for="(item, index) in banners"
        :key="index"
        mode="aspectFill"
        :src="item.url"
      />
    </view>
    <view class="float-button" @tap="comminicateWithHost">
      <uni-icons type="weixin" size="26" color="#25DB5AFF" />
      <label>找店家</label>
    </view>
    <uni-transition mode-class="fade" :show="popShow" custom-class="transition">
      <pl-image-detail
        ref="plImage"
        :key="imageKey"
        :default-index="currentBannerIndex"
        :list="detailImageList"
        @dismiss="dismiss"
      />
    </uni-transition>
  </view>
</template>

<script>
export default {
  components: {},
  data: () => ({
    currentBannerIndex: 0,
    price: 20,
    introduce: "节日汉服淡雅小花二曲裾汉服唐装汉服古装小",
    banners: [
      {
        url: "https://img2.baidu.com/it/u=1336396995,334185844&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=344",
      },
      {
        url: "https://img2.baidu.com/it/u=1336396995,334185844&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=344",
      },
      {
        url: "https://img2.baidu.com/it/u=1336396995,334185844&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=344",
      },
      {
        url: "https://img2.baidu.com/it/u=1336396995,334185844&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=344",
      },
    ],
    popShow: false,
    imageKey: 0,
  }),
  computed: {
    indicatorString() {
      return this.currentBannerIndex + 1 + "/" + this.banners.length;
    },

    detailImageList() {
      return this.banners.map((item) => item.url);
    },
  },
  methods: {
    changeSwipper(event) {
      this.currentBannerIndex = event.detail.current;
    },

    comminicateWithHost() {
      uni.switchTab({
        url: "/pages/user/index",
      });
    },

    showBannerDetail() {
      this.popShow = !this.popShow;
      this.$refs.plImage.updateIndex(this.currentBannerIndex);
    },

    dismiss() {
      this.imageKey += 1;
      this.popShow = false;
    },
  },
};
</script>

<style scoped lang="scss">
@mixin wipper-setting {
  width: 100%;
  height: auto;
  aspect-ratio: 1;
}
.container {
  .banner-container {
    swiper {
      @include wipper-setting;
      swiper-item {
        @include wipper-setting;
        image {
          @include wipper-setting;
        }
      }
    }

    .tag {
      padding: 8rpx 20rpx;
      color: white;
      background-color: #2b292dff;
      font-size: 24rpx;
      font-weight: 500;
      border-radius: 28rpx;
      position: absolute;
      right: 24rpx;
      top: 24rpx;
    }
  }

  .info {
    padding: 20rpx 24rpx;
    .price {
      color: #fa7801ff;
      font-weight: 500;
      vertical-align: bottom;
      :first-child {
        font-size: 28rpx;
        margin-right: 4rpx;
      }

      :last-child {
        font-size: 40rpx;
      }
    }

    .introduce {
      color: #000000d9;
      font-size: 28rpx;
    }
  }

  .detail-picture {
    display: flex;
    flex-direction: column;
    image {
      width: 100%;
      height: 480rpx;
    }
  }

  .float-button {
    box-sizing: border-box;
    background-color: white;
    width: 116rpx;
    height: 116rpx;
    border-radius: 58rpx;
    box-shadow: 0 2rpx 20rpx 0 #00000033;
    padding: 34rpx 22rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    right: 28rpx;
    bottom: 50rpx;
    label {
      color: #25db5aff;
      font-size: 24rpx;
      font-weight: 300;
    }
  }

  ::v-deep .transition {
    z-index: 2;
    position: fixed;
    left: 0;
    top: 0;
    background: red;
    width: calc(100vw);
    height: calc(100vh);
    pl-image-detail {
      height: 800rpx;
    }
  }
}
</style>