<template>
  <view class="container">
    <view class="main">
      <view class="content">
        <view class="leading_container">
          <slot name="leading" />
          <text>{{ title }}</text>
        </view>
        <view class="tail" @click="select">
          <text>{{ value }}</text>
          <slot name="tail" />
        </view>
      </view>
    </view>
    <view v-if="showBorder" class="border"></view>
  </view>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
      default: "",
    },
    title: String,
    value: String,
    showBorder: {
      type: Boolean,
      default: true,
    },
    index: Number,
  },
  data: () => ({}),
  computed: {},
  methods: {
    select() {
      this.$emit("click", this.index);
    },
  },
  watch: {},

  // 组件周期函数--监听组件挂载完毕
  mounted() {},
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate() {},
  // 组件周期函数--监听组件数据更新之后
  updated() {},
  // 组件周期函数--监听组件激活(显示)
  activated() {},
  // 组件周期函数--监听组件停用(隐藏)
  deactivated() {},
  // 组件周期函数--监听组件销毁之前
  beforeDestroy() {},
};
</script>

<style lang="scss" scoped>
@import "@/uni.scss";

.container {
  position: relative;
  height: 100%;
}

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24rpx;
  text-align: center;

  .leading_container {
    display: flex;
    align-items: center;
    text {
      margin-left: 16px;
      font-size: $uni-font-size-base;
      line-height: $uni-font-size-base;
      font-weight: 500;
      color: $uni-color-title;
    }
  }

  .tail {
    display: flex;
    align-items: center;
    text {
      line-height: $uni-font-size-base;
      font-size: $uni-font-size-sm;
      color: $uni-color-title;
      font-weight: 300;
      display: inline-block;
      text-align: left;
      max-width: 60vw;
    }

    image {
      width: 40rpx;
      margin-left: 12px;
    }
  }
}

.border {
  position: absolute;
  bottom: 0;
  left: 52rpx;
  right: 0;
  height: 2rpx;
  background-color: $uni-border-color;
}
</style>