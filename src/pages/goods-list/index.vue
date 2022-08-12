<template>
  <view>
    <view class="select-container">
      <sl-filter class="select" :menuList="menuList"></sl-filter>
    </view>
    <view class="good_list"> </view>
  </view>
</template>

<script>
import { fetchTypeData } from "@/api/index.js";
export default {
  name: "goods-list",
  props: {},
  data() {
    return {
      menuList: [
        {
          title: "菜单1",
          detailTitle: "子标题1",
          isMutiple: true,
          key: "key_1",
          detailList: [
            {
              title: "不限",
              value: "",
            },
            {
              title: "条件_1_1",
              value: "val_1_1",
            },
            {
              title: "条件1_2",
              value: "val_1_2",
            },
          ],
        },
        {
          title: "菜单2",
          detailTitle: "子标题2",
          key: "key_2",
          isMutiple: false,
          detailList: [
            {
              title: "不限",
              value: "",
            },
            {
              title: "条件_2_1",
              value: "val_2_1",
            },
            {
              title: "条件_2_2",
              value: "val_2_2",
            },
          ],
        },
        {
          title: "菜单3",
          detailTitle: "子标题3",
          key: "key_3",
          isSort: true,
          isMutiple: false,
          detailList: [
            {
              title: "条件_3_1",
              value: "val_3_1",
            },
            {
              title: "条件_3_2",
              value: "val_3_2",
            },
            {
              title: "条件_3_3",
              value: "val_3_3",
            },
          ],
        },
      ],
      defaultSelected: [],
      defaultFilterData: [],
      goodsList: [],
      typeList: [],
      // secondClassList: [],
    };
  },
  computed: {},
  methods: {
    parseData(data) {
      if (data) {
        this.typeList = data;
        let second = data[0].children;
        //   data.map((item) => {
        //   return {
        //     name: item.name,
        //     value: item.name,
        //     children: item.children.map((child) => {
        //       return {
        //         name: child.name,
        //         value: child.name,
        //       };
        //     }),
        //   };
        // });
        this.filterData = [
          {
            name: "1",
            type: "filter",
            submenu: [{ name: "1_1" }, { name: "1_2" }, { name: "1_3" }],
          },
        ];

        this.$nextTick(() => {
          this.defaultSelected = [2];
        });

        let child = data[0].children;
        // this.filterData = ;
      }
    },
    loadTypeData() {
      fetchTypeData({}).then((data) => {
        this.parseData(data.data);
      });
    },
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