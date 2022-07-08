<template>
  <view class="container">
    <view class="banner-container">
      <swiper>
        <swiper-item v-for="(item, index) in banners" :key="index">
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
      <!-- <image
        v-for="(item, index) in banners"
        :key="index"
        mode="aspectFill"
        :src="item.url"
      /> -->
      <image
        src="https://img2.baidu.com/it/u=1336396995,334185844&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=344"
        mode="scaleToFill"
      />
    </view>
    <view class="float-button"> </view>
  </view>
</template>

<script>
export default {
  components: {},
  data: () => ({
    currentBannerIndex: 1,
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
  }),
  computed: {
    indicatorString() {
      return this.currentBannerIndex + "/" + this.banners.length;
    },
  },
  methods: {},
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
};
</script>

<style scoped lang="scss">
@mixin wipper-setting {
  width: 100%;
  height: auto;
  aspect-ratio: 1;
}
.container {
  background: red;
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
    image {
      width: 100%;
      // height: 240rpx;
    }
  }

  .float-button {
  }
}
</style>