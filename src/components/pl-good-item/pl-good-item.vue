<template>
  <view :class="[isOdd ? 'odd' : 'even', 'container']">
    <image :src="url" mode="aspectFill" />
    <label class="name">{{ name }}</label>
    <view class="price">
      <label>￥</label>
      <label>{{ price }}</label>
    </view>
  </view>
</template>

<script>
export default {
  name: "pl-good-item",
  watch: {
    index(newValue, oldValue) {
      this.isOdd = newValue % 2 == 0;
    },
  },
  props: {
    url: String,
    name: String,
    price: Number,
    index: Number,
  },
  data() {
    return {
      isOdd: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.even {
  margin-right: 6rpx;
}

.odd {
  margin-left: 6rpx;
}
.container {
  display: flex;
  flex-direction: column;
  margin-top: 12rpx;
  overflow: hidden;
  image {
    height: 318rpx;
  }

  .name {
    font-size: 24rpx;
    color: #000000d9;
    padding: 10rpx 9rpx 6rpx 9rpx;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    color: #fa7801ff;
    font-weight: 500;
    vertical-align: bottom;

    :first-child {
      font-size: 24rpx;
    }

    :last-child {
      margin-left: 2rpx;
      font-size: 32rpx;
    }
  }
}
</style>