<template>
  <view class="container" @tap="dismiss">
    <label class="tag">{{ tagString }}</label>
    <swiper @change="change" :current="defaultIndex">
      <swiper-item v-for="(item, index) in list" :key="index">
        <image :src="item" mode="aspectFill" />
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  props: {
    defaultIndex: {
      type: Number,
      default: 0,
    },
    list: Array,
  },

  emits: ["dismiss"],

  data() {
    return {
      currentIndex: this.defaultIndex,
    };
  },

  computed: {
    tagString() {
      return this.currentIndex + 1 + "/" + this.list.length;
    },
  },

  watch: {
    defaultIndex(newValue, oldValue) {
      this.currentIndex = newValue;
    },
  },

  methods: {
    change(event) {
      let index = event.detail.current;
      if (index < this.list.length) {
        this.currentIndex = index;
      }
    },

    dismiss() {
      this.$emit("dismiss");
    },

    updateIndex(index) {
      this.currentIndex = index;
    },
  },

  beforeUpdate() {
    console.log("ddd");
  },

  beforeDestroy() {
    console.log("beforeDestroy");
  },
};
</script>

<style scoped lang="scss">
@mixin wipper-setting {
  width: 750rpx;
  height: auto;
  aspect-ratio: 1;
}

.container {
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: black;
  padding-top: 40rpx;
  .tag {
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