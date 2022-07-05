<template>
  <view class="container">
    <view class="header">
      <swiper
        v-if="configure.showSwipper"
        class="swiper"
        :indicator-dots="true"
        circular
        :autoplay="false"
        :interval="3000"
        :duration="1000"
        indicator-color="transparent"
        indicator-active-color="white"
      >
        <swiper-item v-for="(item, index) in sliders" :key="index">
          <image :src="item.picture"></image>
        </swiper-item>
      </swiper>
    </view>
    <view class="content">
      <view class="category">
        <custom-tabs
          class="tabs"
          type="c1"
          :value="categoryIndex"
          @change="changeCategory"
        >
          <custom-tab-pane
            class="tab-pane"
            v-for="(category, index) in categories"
            :key="index"
            :name="'c1_' + index"
            :label="category.name"
          >
            <view v-if="isEmpty"></view>
            <view v-else>
              <uni-grid :column="2">
                <uni-grid-item>1</uni-grid-item>
              </uni-grid>
              <uni-load-more :status="loadMoreStatus" />
            </view>
            <view>1</view>
          </custom-tab-pane>
        </custom-tabs>
      </view>
      <view class="list"></view>
    </view>
  </view>
</template>


<script>
export default {
  onLoad(options) {},

  computed: {
    isEmpty() {
      return this.listData == null || this.listData.length == 0;
    },
  },

  data() {
    return {
      href: "https://uniapp.dcloud.io/component/README?id=uniui",
      configure: {
        showSwipper: true,
        showSearchBar: false,
      },
      searchValue: "",
      categoryIndex: 0,
      loadMoreStatus: "more",
      categories: [
        {
          name: "0",
          value: 0,
        },
        {
          name: "1",
          value: 1,
        },
        {
          name: "2",
          value: 2,
        },
      ],
      listData: [],
      sliders: [
        {
          url: "",
          picture:
            "https://img2.baidu.com/it/u=1336396995,334185844&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=344",
        },
        {
          url: "",
          picture:
            "https://img2.baidu.com/it/u=1336396995,334185844&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=344",
        },
        {
          url: "",
          picture:
            "https://img2.baidu.com/it/u=1336396995,334185844&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=344",
        },
      ],
    };
  },
  methods: {
    changeCategory(index) {
      // 获取分类数据
    },
  },
  // components: { CustomTabs, CustomTabPane },
};
</script>

<style lang="scss">
.container {
  padding: 20px;
  font-size: 14px;
  line-height: 24px;
}
.swiper {
  height: 300rpx;
  width: 100%;

  swiper-item image {
    width: 100%;
  }
}

::v-deep .uni-swiper-dots {
  bottom: 1rpx;
}

::v-deep .uni-swiper-dot {
  height: 12rpx !important;
  width: 12rpx !important;
  border: 1rpx solid #ccc;
  bottom: 200rpx;
}
.item {
  color: red;
}

.content {
  padding: 0, 12rpx;
  .category {
    padding: 16rpx 0;
    .tabs {
      height: 30rpx;
      .tab-pane {
        height: 30rpx;
      }
    }
  }
}
</style>
