<template>
  <view class="container">
    <view class="header">
      <swiper
        v-if="sliders.length > 0"
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
          <image :src="item.pictureUrl"></image>
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
        @change="changeCategory"
      />
    </view>
    <view class="list">
      <view v-if="isEmpty"></view>
      <scroll-view scroll-y :scroll-top="scrollTop" @scroll="scroll" v-else>
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
              :url="good.mainPictureUrl"
              :price="good.price"
              :index="index"
            ></pl-good-item>
          </uni-grid-item>
        </uni-grid>
        <uni-load-more :status="loadMoreStatus" />
      </scroll-view>
    </view>
  </view>
</template>


<script>
import { fetchHomeData } from "@/api/";
export default {
  onLoad(options) {
    this.loadData();
  },

  onReachBottom() {
    // this.loadMoreStatus = "loading";
    // this.loadMore();
    // this.loadMoreStatus = "more";
  },

  computed: {
    isEmpty() {
      return this.goods == null || this.goods.length == 0;
    },
  },

  data() {
    return {
      href: "https://uniapp.dcloud.io/component/README?id=uniui",
      searchValue: "",
      categoryIndex: 0,
      loadMoreStatus: "no-more",
      activeIndex: 0,
      scrollTop: 100,
      old: {
        scrollTop: 0,
      },
      sliders: [],
      categoryConfig: {
        tabs: [],
        color: "#BFBFBF",
        activeColor: "black",
        lineHeight: "0rpx",
        bold: false,
        activeIndex: 0,
        height: "88rpx",
      },
      recommendList: [],
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
      if (index < this.recommendList.length) {
        this.goods = this.recommendList[index];
      }

      this.gotoTop();
    },

    gotoTop() {
      this.scrollTop = this.old.scrollTop;
      this.$nextTick(() => {
        this.scrollTop = 0;
      });
    },

    showDetail(index) {
      uni.navigateTo({
        url: "/pages/goodsDetail/index",
      });
    },

    loadData() {
      fetchHomeData()
        .then((data) => {
          this.parseData(data);
        })
        .catch((e) => {});
    },

    parseData(data) {
      if (data == null) {
        return;
      }

      // banner数据
      this.sliders = data.carousels || [];

      let recommandTabs = [];
      // 新品推荐
      if (data.newCommodities) {
        recommandTabs.push("新品推荐");
        this.recommendList.push(data.newCommodities);
      }

      // 热门推荐
      if (data.hotCommodities) {
        recommandTabs.push("热门推荐");
        this.recommendList.push(data.hotCommodities);
      }

      this.categoryConfig.tabs = recommandTabs;
      if (this.recommendList.length > 0) {
        this.goods = this.recommendList[0];
      }
    },

    scroll(event) {
      this.old.scrollTop = event.detail.scrollTop;
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
