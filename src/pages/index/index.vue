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
    <view class="category">
      <v-tabs
        :tabs="categoryConfig.tabs"
        :color="categoryConfig.color"
        :activeColor="categoryConfig.activeColor"
        :value="categoryConfig.activeIndex"
        :bold="changeCategory.bold"
        :lineHeight="categoryConfig.lineHeight"
        :height="categoryConfig.height"
        @tabClick="changeCategory"
      />
    </view>
    <view class="list">
      <view v-if="isEmpty"></view>
      <view v-else>
        <uni-grid
          :column="2"
          :square="false"
          :showBorder="false"
          @change="showDetail"
        >
          <uni-grid-item
            v-for="(good, goodIndex) in goods"
            :key="goodIndex"
            :index="goodIndex"
          >
            <pl-good-item
              :name="good.name"
              :url="good.url"
              :price="good.price"
              :index="index"
            ></pl-good-item>
          </uni-grid-item>
        </uni-grid>
        <uni-load-more :status="loadMoreStatus" />
      </view>
    </view>
  </view>
</template>


<script>
export default {
  onLoad(options) {
    this.loadMore();
  },

  onReachBottom() {
    this.loadMoreStatus = "loading";
    this.loadMore();
    this.loadMoreStatus = "more";
  },

  computed: {
    isEmpty() {
      return this.goods == null || this.goods.length == 0;
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
      activeIndex: 0,
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
      categoryConfig: {
        tabs: ["汉服", "中山装", "现代装"],
        color: "#BFBFBF",
        activeColor: "black",
        lineHeight: "0rpx",
        bold: false,
        activeIndex: 0,
        height: "88rpx",
      },
      activeTextStyle: {
        color: "black",
        fontSize: "28rpx",
        fontWeight: 500,
      },
      activeLineStyle: {
        backgroundColor: "transparent",
        height: 0,
      },
      goods: [],
    };
  },
  methods: {
    changeCategory(index) {
      // 获取分类数据
    },

    showDetail(index) {
      uni.navigateTo({
        url: "/pages/goodsDetail/index",
      });
    },

    loadMore() {
      for (let index = 0; index < 10; index++) {
        this.goods.push({
          name: "漢服，泛指漢人的服飾，也是一種中國朝代服飾以及相對於中國少數民族服飾的漢人服飾的概念",
          price: 30,
          url: "http://news.yxrb.net/uploadfile/2020/0720/20200720035548972.jpg",
        });
      }
    },
  },
  // components: { CustomTabs, CustomTabPane },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;

  padding: 0 24rpx;

  .header {
    height: 396rpx;

    .swiper {
      height: 100%;
      width: 100%;

      swiper-item image {
        width: 100%;
      }
    }
  }
  .category {
    height: 88rpx;
    position: sticky;
    z-index: 100;
    top: 0;
  }

  .list {
    background-color: #cccccc1a;
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
</style>
