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
          <image :src="item.pictureUrl" mode="as"></image>
        </swiper-item>
      </swiper>
    </view>
    <view class="content">
      <view class="category">
        <custom-tabs :type="c1" :value="categoryIndex" @change="changeCategory">
          <custom-tab-pane v-for="(category, index) in categorys" :key="index">
            <view v-if="isEmpty"></view>
          </custom-tab-pane>
        </custom-tabs>
      </view>
      <view class="list"></view>
    </view>
  </view>
</template>

<script>
import { datalist } from "@dcloudio/vue-cli-plugin-uni/packages/postcss/tags";
import customTabPane from "../../components/custom-tab-pane/custom-tab-pane.vue";
import CustomTabs from "../../components/custom-tabs/custom-tabs.vue";
export default {
  components: { customTabPane, CustomTabs },
  onLoad(options) {
    let serachData = this.data.data.filter(
      (item) => item.type === "searchBar"
    )[0];
    console.log(serachData);
    if (serachData) {
      this.configure.showSearchBar = true;
      this.searchValue = serachData.searchBar.title;
    }
  },

  computed: {
    sliders() {
      return this.data.data.filter((item) => item.type === "sowing")[0].sowing;
    },

    isEmpty() {
      return datalist == null || datalist.length == 0;
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
      categories: [],
      listData: [],
    };
  },
  methods: {
    changeCategory(index) {
      // 获取分类数据
    },
  },
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
  }
}
</style>
