<template>
  <view>
    <view class="select-container">
      <sl-filter
        ref="filter"
        class="select"
        :list.sync="menuList"
        @result="changeType"
        independence
      />
    </view>
    <view class="good_list">
      <view v-if="goods.length === 0"> </view>
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
              :url="good.mainPictureUrl"
              :price="good.price"
              :index="index"
            ></pl-good-item>
          </uni-grid-item>
        </uni-grid>
      </view>
    </view>
  </view>
</template>

<script>
import { fetchTypeData, fetchGoodsByCategoryID } from "@/api/index.js";
import { M } from "caniuse-lite/data/agents";
import slFilter from "../../components/sl-filter/sl-filter.vue";
const firstLevelKey = "firstLevelKey";
const secondLevelKey = "secondLevelKey";
export default {
  components: { slFilter },
  name: "goods-list",
  props: {},
  data() {
    return {
      menuList: [],
      defaultSelected: [],
      defaultFilterData: [],
      goods: [],
      typeList: [],
      parentIndex: 0,
      childIndex: 0,
      pageIndex: 0,
      categoryID: 0,
      // secondClassList: [],
    };
  },
  computed: {},
  methods: {
    parseData(data) {
      if (data && data instanceof Array) {
        this.typeList = data;
        let firstData = this.createTypeData(data, firstLevelKey);
        let secondData = this.createTypeData(data[0].children, secondLevelKey);
        this.menuList[0] = firstData;
        this.menuList[1] = secondData;
        this.$refs.filter.resetMenuList(this.menuList);
      }
    },

    createTypeData(data, key) {
      return {
        title: data[0].name,
        defaultSelectedIndex: 0,
        isSort: true,
        reflexTitle: true,
        key: key || data[0].name,
        detailList: data.map((item, index) => {
          return {
            title: item.name,
            value: index,
          };
        }),
      };
    },

    changeType(result) {
      if (result[firstLevelKey]) {
        // 第一层级
        let data = result[firstLevelKey];
        if (data !== this.parentIndex) {
          this.parentIndex = data;
          // 调整子选择
          this.menuList[1] = this.createTypeData(
            this.typeList[this.parentIndex].children
          );
          this.$refs.filter.resetMenuList(this.menuList, 1);

          // 更新数据
        }
      } else {
        // 第二层级
        let data = result[secondLevelKey];
        if (data !== this.childIndex) {
          this.childIndex = data;
          // 更新数据
        }
      }
    },

    changeChildSelect(data) {
      let second = {
        title: data[0].name,
        defaultSelectedIndex: 0,
        isSort: true,
        key: firstLevelKey,
        detailList: data.map((item, index) => {
          return {
            title: item.name,
            value: index,
          };
        }),
      };

      this.menuList[1] = second;
    },

    loadTypeData() {
      fetchTypeData({}).then((data) => {
        this.parseData(data.data);
      });
    },

    fetchGoodsByCategoryID() {
      fetchGoodsByCategoryID({});
    },

    loadMore() {},
  },
  watch: {},
  // 页面周期函数--监听页面加载
  onLoad() {
    this.loadTypeData();
  },
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
.select-container {
  height: 44rpx;
  .select {
    height: 44rpx;
  }
}

.good_list {
}
</style>