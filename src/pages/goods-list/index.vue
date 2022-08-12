<template>
  <view>
    <view class="select-container">
      <sl-filter ref="filter" class="select" :list="menuList"></sl-filter>
    </view>
    <view class="good_list"> </view>
  </view>
</template>

<script>
import { fetchTypeData } from "@/api/index.js";
import slFilter from "../../components/sl-filter/sl-filter.vue";
export default {
  components: { slFilter },
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
      if (data && data instanceof Array) {
        let firstData = {
          title: data[0].name,
          defaultSelectedIndex: 0,
          isSort: true,
          key: "1",
          detailList: data.map((item) => {
            return {
              title: item.name,
            };
          }),
        };
        let secondData = {
          title: data[0].children[0].name,
          defaultSelectedIndex: 0,
          isSort: true,
          key: "2",
          detailList: data[0].children.map((item) => {
            return {
              name: item.name,
            };
          }),
        };
        // this.menuList[0] = firstData;
        // this.menuList[1] = secondData;
        // this.menuList[0] = {
        //   title: "1",
        //   defaultSelectedIndex: 0,
        //   isSort: true,
        //   key: "1",
        //   detailList: [
        //     {
        //       title: "1",
        //       value: "1",
        //     },
        //     {
        //       title: "2",
        //       value: "1",
        //     },
        //     {
        //       title: "3",
        //       value: "1",
        //     },
        //   ],
        // };
        // this.$refs.filter.resetMenuList(this.menuList);

        let menuListItem = {
          title: "职位",
          detailTitle: "请选择职位类型（单选）(默认值为1)",
          isMutiple: false,
          key: "jobType",
          defaultSelectedIndex: 1,
          detailList: [
            {
              title: "不限",
              value: "",
            },
            {
              title: "new_1",
              value: "new_1",
            },
            {
              title: "new_2",
              value: "new_2",
            },
            {
              title: "new_3",
              value: "new_3",
            },
          ],
        };
        this.menuList[0] = menuListItem;
        this.$refs.filter.resetMenuList(this.menuList);
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