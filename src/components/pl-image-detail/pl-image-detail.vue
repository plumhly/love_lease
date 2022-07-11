<template>
  <view class="contaienr">
    <label class="tag"></label>
    <swiper @change="change">
      <swiper-item v-for="(item, index) in list" :key="index">
        <image :src="item" mode="aspectFill" />
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  props: {
    defaultIndex: Number,
    list: Array,
  },

  data: () => ({
    currentIndex: 0,
  }),
  computed: {
    tagString() {
      return this.currentIndex + "/" + this.list.length;
    },
  },
  methods: {
    change(event) {
      this.currentIndex = event.detail.current + 1;
    },
  },
  watch: {
    defaultIndex(newIndex, oldIndnex) {
      this.currentIndex = newIndex;
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
  .tag {
    margin-top: 40rpx;
    color: white;
    font-size: 28rpx;
    text-align: center;
  }

  swiper {
    @include wipper-setting;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    swiper-item {
      @include wipper-setting;
      image {
        @include wipper-setting;
      }
    }
  }
}
</style>