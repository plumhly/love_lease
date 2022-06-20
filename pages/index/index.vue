<template>
	<view class="container">
		<swiper class="swiper" :indicator-dots="true" circular :autoplay="true" :interval="3000" :duration="1000" indicator-color="transparent" indicator-active-color="white">
			<swiper-item v-for="item in sliders">
				<image :src="item.pictureUrl"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		computed: {
			sliders() {
				return this.data.data.filter(item => item.type === "sowing")[0].sowing
			}
		},
		
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				data: {
					"code": "000000",
					"data": [{
							"type": "sowing",
							"pageSort": 1,
							"sowing": [{
									"jumpType": 3,
									"jumpUrl": "923494",
									"orgId": 23694,
									"groupId": 19873686,
									"pictureUrl": "https://img2.baidu.com/it/u=1336396995,334185844&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=344",
									"customPageId": 6280914,
									"deleteAppId": false,
									"heightWidthScale": "2:1"
								},
								{
									"jumpType": 3,
									"jumpUrl": "881770",
									"orgId": 23694,
									"groupId": 19873686,
									"pictureUrl": "https://img2.baidu.com/it/u=1336396995,334185844&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=344",
									"customPageId": 6280914,
									"deleteAppId": false,
									"heightWidthScale": "2:1"
								},
								{
									"jumpType": 3,
									"jumpUrl": "421416",
									"orgId": 23694,
									"groupId": 19873686,
									"pictureUrl": "https://img2.baidu.com/it/u=1336396995,334185844&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=344",
									"customPageId": 6280914,
									"deleteAppId": false,
									"heightWidthScale": "2:1"
								}
							]
						},
						{
							"type": "searchBar",
							"pageSort": 2,
							"searchBar": {
								"orgId": 23694,
								"customPageId": 6280914,
								"title": "点此输入搜索"
							}
						},
						{
							"type": "button",
							"pageSort": 3,
							"button": {
								"jumpType": 4,
								"jumpUrl": "subPackage/index/pages/classify-tag/classify-tag?iconName=分类主页",
								"jumpProductType": 0,
								"orgId": 23694,
								"buttonWords": "点此进入商城",
								"buttonStyle": 1,
								"buttonColor": "4",
								"buttonCircle": 21,
								"buttonWidth": 298,
								"customPageId": 6280914,
								"deleteAppId": false
							}
						},
						{
							"type": "icon",
							"icon": [{
									"jumpType": 3,
									"jumpUrl": "3308",
									"jumpProductType": 1,
									"groupId": 19873689,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202201/01/sns/sns_ajDZqUdOKL0112KYAUEHGU.jpg",
									"iconWords": "毕业校园",
									"customPageId": 6280914,
									"deleteAppId": false
								},
								{
									"jumpType": 3,
									"jumpUrl": "923494",
									"jumpProductType": 1,
									"groupId": 19873689,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202201/01/sns/sns_8uGsFtzy2h0106KY2C2PQF.png",
									"iconWords": "品牌汉服",
									"customPageId": 6280914,
									"deleteAppId": false
								},
								{
									"jumpType": 3,
									"jumpUrl": "923493",
									"groupId": 19873689,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202201/01/sns/sns_9eOR3NgfPv0106KY2C1KQS.png",
									"iconWords": "古代服装",
									"customPageId": 6280914,
									"deleteAppId": false
								},
								{
									"jumpType": 3,
									"jumpUrl": "3685",
									"groupId": 19873689,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202004/09/sns/sns_O9nwcqMfff0410K8TLU2ZS.png",
									"iconWords": "清宫系列",
									"customPageId": 6280914,
									"deleteAppId": false
								},
								{
									"jumpType": 3,
									"jumpUrl": "2886",
									"groupId": 19873689,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202201/01/sns/sns_UfesOJyglC0112KYAUEUJN.jpg",
									"iconWords": "民国抗战",
									"customPageId": 6280914,
									"deleteAppId": false
								}
							]
						},
						{
							"type": "icon",
							"pageSort": 5,
							"icon": [{
									"jumpType": 3,
									"jumpUrl": "3309",
									"jumpProductType": 1,
									"groupId": 19873690,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202201/01/sns/sns_rNeKtFo0iY0115KYFN8UJO.png",
									"iconWords": "军装系列",
									"customPageId": 6280914,
									"deleteAppId": false
								},
								{
									"jumpType": 3,
									"jumpUrl": "2888",
									"jumpProductType": 1,
									"groupId": 19873690,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202203/15/sns/sns_p8WNTXWi7L0325L161GA0O.jpg",
									"iconWords": "婚纱秀禾",
									"customPageId": 6280914,
									"deleteAppId": false
								},
								{
									"jumpType": 3,
									"jumpUrl": "471712",
									"groupId": 19873690,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202201/01/sns/sns_unTbRyzOgo0112KYAUFLR7.jpg",
									"iconWords": "主持礼服",
									"customPageId": 6280914,
									"deleteAppId": false
								},
								{
									"jumpType": 3,
									"jumpUrl": "3320",
									"groupId": 19873690,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202004/09/sns/sns_5ZzNRukQgy0410K8TMJPKY.jpg",
									"iconWords": "西装系列",
									"customPageId": 6280914,
									"deleteAppId": false
								},
								{
									"jumpType": 3,
									"jumpUrl": "3781",
									"groupId": 19873690,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202201/01/sns/sns_ivaXd0ivnH0115KYFN95FK.png",
									"iconWords": "旗袍礼仪",
									"customPageId": 6280914,
									"deleteAppId": false
								}
							]
						},
						{
							"type": "icon",
							"pageSort": 6,
							"icon": [{
									"jumpType": 3,
									"jumpUrl": "2887",
									"jumpProductType": 1,
									"groupId": 19873691,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202004/09/sns/sns_YDun2eQx9G0410K8TMNAZ1.png",
									"iconWords": "舞蹈服",
									"customPageId": 6280914,
									"deleteAppId": false
								},
								{
									"jumpType": 3,
									"jumpUrl": "421416",
									"jumpProductType": 1,
									"groupId": 19873691,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202201/01/sns/sns_zznrf2Mrpi0112KYAUKD47.jpg",
									"iconWords": "合唱服",
									"customPageId": 6280914,
									"deleteAppId": false
								},
								{
									"jumpType": 3,
									"jumpUrl": "3307",
									"groupId": 19873691,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202004/09/sns/sns_Njv7PFKFE80410K8TMTK11.png",
									"iconWords": "异域风情",
									"customPageId": 6280914,
									"deleteAppId": false
								},
								{
									"jumpType": 3,
									"jumpUrl": "3686",
									"groupId": 19873691,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202004/09/sns/sns_cQ4x4MqAeu0410K8TMVC1L.jpg",
									"iconWords": "经典剧目",
									"customPageId": 6280914,
									"deleteAppId": false
								},
								{
									"jumpType": 3,
									"jumpUrl": "3687",
									"groupId": 19873691,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202201/01/sns/sns_1L98TYNZbp0111KY9XVIA0.jpg",
									"iconWords": "卡通人偶",
									"customPageId": 6280914,
									"deleteAppId": false
								}
							]
						},
						{
							"type": "icon",
							"pageSort": 7,
							"icon": [{
									"jumpType": 3,
									"jumpUrl": "529348",
									"jumpProductType": 1,
									"groupId": 19873692,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202201/01/sns/sns_kXgjGrpgSr0112KYAUJDVE.jpg",
									"iconWords": "年代服装",
									"customPageId": 6280914,
									"deleteAppId": false
								},
								{
									"jumpType": 3,
									"jumpUrl": "2892",
									"groupId": 19873692,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202004/09/sns/sns_F8eH4XHbEx0410K8TNC1P3.jpg",
									"iconWords": "配饰道具",
									"customPageId": 6280914,
									"deleteAppId": false
								},
								{
									"jumpType": 3,
									"jumpUrl": "924370",
									"groupId": 19873692,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202201/01/sns/sns_ud8mfqB0IN0115KYFN9JIG.png",
									"iconWords": "运动会",
									"customPageId": 6280914,
									"deleteAppId": false
								},
								{
									"jumpType": 3,
									"jumpUrl": "932845",
									"jumpProductType": 1,
									"groupId": 19873692,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202201/01/sns/sns_eGXkXNtZec0104KXZTFNOZ.png",
									"iconWords": "儿童服装",
									"customPageId": 6280914,
									"deleteAppId": false
								},
								{
									"jumpType": 3,
									"jumpUrl": "898300",
									"groupId": 19873692,
									"orgId": 23694,
									"iconRatio": "2",
									"iconUrl": "http://oss.197.com/202201/01/sns/sns_4W8aKHkMHg0112KYAUI2EM.jpg",
									"iconWords": "各行各业",
									"customPageId": 6280914,
									"deleteAppId": false
								}
							]
						},
						{
							"type": "shopAddress",
							"pageSort": 8,
							"shopAddress": {
								"orgId": 23694,
								"iconType": 1,
								"customPageId": 6280914
							}
						},
						{
							"type": "segmentingLine",
							"pageSort": 9,
							"segmentingLine": {
								"type": "segmentingLine",
								"value": 4
							}
						},
						{
							"type": "picture",
							"pageSort": 10,
							"picture": {
								"jumpType": 1,
								"jumpProductType": 0,
								"orgId": 23694,
								"pictureUrl": "http://oss.197.com/202201/01/sns/sns_UrFb3O8tM80105KY19CW81.jpg",
								"pictureSpacing": 1,
								"customPageId": 6280914,
								"deleteAppId": false
							}
						},
						{
							"type": "picture",
							"pageSort": 11,
							"picture": {
								"jumpType": 1,
								"jumpProductType": 0,
								"orgId": 23694,
								"pictureUrl": "http://oss.197.com/202008/18/sns/sns_Bjmim8vMri0819KE1AQTD0.jpg",
								"pictureSpacing": 1,
								"customPageId": 6280914,
								"deleteAppId": false
							}
						},
						{
							"type": "segmentingLine",
							"pageSort": 12,
							"segmentingLine": {
								"type": "segmentingLine",
								"value": 4
							}
						},
						{
							"type": "picture",
							"pageSort": 13,
							"picture": {
								"jumpType": 3,
								"jumpUrl": "3308",
								"jumpProductType": 0,
								"orgId": 23694,
								"pictureUrl": "http://oss.197.com/202005/08/sns/sns_oS7LXoc4eG0516KA9A1R31.jpg",
								"pictureSpacing": 2,
								"customPageId": 6280914,
								"deleteAppId": false
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 14,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 1510022,
										"orderBy": 1,
										"joinId": 1798958,
										"customPageId": 6280914
									},
									{
										"productId": 4008442,
										"orderBy": 2,
										"joinId": 1798958,
										"customPageId": 6280914
									},
									{
										"productId": 29503,
										"orderBy": 3,
										"joinId": 1798958,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 15,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
									"productId": 2918093,
									"orderBy": 1,
									"joinId": 1798959,
									"customPageId": 6280914
								}],
								"customPageId": 6280914
							}
						},
						{
							"type": "segmentingLine",
							"pageSort": 16,
							"segmentingLine": {
								"type": "segmentingLine",
								"value": 4
							}
						},
						{
							"type": "picture",
							"pageSort": 17,
							"picture": {
								"jumpType": 3,
								"jumpUrl": "2885",
								"jumpProductType": 0,
								"orgId": 23694,
								"pictureUrl": "http://oss.197.com/202005/08/sns/sns_QJOap1HsKM0516KA9A25LA.jpg",
								"pictureSpacing": 2,
								"customPageId": 6280914,
								"deleteAppId": false
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 18,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 30768,
										"orderBy": 1,
										"joinId": 1798960,
										"customPageId": 6280914
									},
									{
										"productId": 27008,
										"orderBy": 2,
										"joinId": 1798960,
										"customPageId": 6280914
									},
									{
										"productId": 1487574,
										"orderBy": 3,
										"joinId": 1798960,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 19,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 25443,
										"orderBy": 1,
										"joinId": 1798961,
										"customPageId": 6280914
									},
									{
										"productId": 28743,
										"orderBy": 2,
										"joinId": 1798961,
										"customPageId": 6280914
									},
									{
										"productId": 1453171,
										"orderBy": 3,
										"joinId": 1798961,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "segmentingLine",
							"pageSort": 20,
							"segmentingLine": {
								"type": "segmentingLine",
								"value": 4
							}
						},
						{
							"type": "picture",
							"pageSort": 21,
							"picture": {
								"jumpType": 3,
								"jumpUrl": "2886",
								"jumpProductType": 0,
								"orgId": 23694,
								"pictureUrl": "http://oss.197.com/202005/08/sns/sns_inRjWH5lYB0516KA9A2FXJ.jpg",
								"pictureSpacing": 2,
								"customPageId": 6280914,
								"deleteAppId": false
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 22,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 2970168,
										"orderBy": 1,
										"joinId": 1798962,
										"customPageId": 6280914
									},
									{
										"productId": 4224471,
										"orderBy": 2,
										"joinId": 1798962,
										"customPageId": 6280914
									},
									{
										"productId": 4357056,
										"orderBy": 3,
										"joinId": 1798962,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 23,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 3301223,
										"orderBy": 1,
										"joinId": 1798963,
										"customPageId": 6280914
									},
									{
										"productId": 2944720,
										"orderBy": 2,
										"joinId": 1798963,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "segmentingLine",
							"pageSort": 24,
							"segmentingLine": {
								"type": "segmentingLine",
								"value": 4
							}
						},
						{
							"type": "picture",
							"pageSort": 25,
							"picture": {
								"jumpType": 3,
								"jumpUrl": "3309",
								"jumpProductType": 0,
								"orgId": 23694,
								"pictureUrl": "http://oss.197.com/202005/08/sns/sns_xgN6GZyqn00516KA9A2P42.jpg",
								"pictureSpacing": 2,
								"customPageId": 6280914,
								"deleteAppId": false
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 26,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 1482951,
										"orderBy": 1,
										"joinId": 1798964,
										"customPageId": 6280914
									},
									{
										"productId": 29657,
										"orderBy": 2,
										"joinId": 1798964,
										"customPageId": 6280914
									},
									{
										"productId": 1448355,
										"orderBy": 3,
										"joinId": 1798964,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 27,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 25841,
										"orderBy": 1,
										"joinId": 1798965,
										"customPageId": 6280914
									},
									{
										"productId": 4075343,
										"orderBy": 2,
										"joinId": 1798965,
										"customPageId": 6280914
									},
									{
										"productId": 28824,
										"orderBy": 3,
										"joinId": 1798965,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "segmentingLine",
							"pageSort": 28,
							"segmentingLine": {
								"type": "segmentingLine",
								"value": 4
							}
						},
						{
							"type": "picture",
							"pageSort": 29,
							"picture": {
								"jumpType": 3,
								"jumpUrl": "2888",
								"jumpProductType": 0,
								"orgId": 23694,
								"pictureUrl": "http://oss.197.com/202005/08/sns/sns_3DBCep2bRl0516KA9A2ZDY.jpg",
								"pictureSpacing": 2,
								"customPageId": 6280914,
								"deleteAppId": false
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 30,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 31851,
										"orderBy": 1,
										"joinId": 1798966,
										"customPageId": 6280914
									},
									{
										"productId": 853862,
										"orderBy": 2,
										"joinId": 1798966,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 31,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 4117840,
										"orderBy": 1,
										"joinId": 1798967,
										"customPageId": 6280914
									},
									{
										"productId": 4117814,
										"orderBy": 2,
										"joinId": 1798967,
										"customPageId": 6280914
									},
									{
										"productId": 28168,
										"orderBy": 3,
										"joinId": 1798967,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 32,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 4194773,
										"orderBy": 1,
										"joinId": 1798968,
										"customPageId": 6280914
									},
									{
										"productId": 1486060,
										"orderBy": 2,
										"joinId": 1798968,
										"customPageId": 6280914
									},
									{
										"productId": 182716,
										"orderBy": 3,
										"joinId": 1798968,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "segmentingLine",
							"pageSort": 33,
							"segmentingLine": {
								"type": "segmentingLine",
								"value": 4
							}
						},
						{
							"type": "picture",
							"pageSort": 34,
							"picture": {
								"jumpType": 3,
								"jumpUrl": "3320",
								"jumpProductType": 0,
								"orgId": 23694,
								"pictureUrl": "http://oss.197.com/202005/08/sns/sns_tK8tY87fdF0516KA9A39K6.jpg",
								"pictureSpacing": 2,
								"customPageId": 6280914,
								"deleteAppId": false
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 35,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 1634140,
										"orderBy": 1,
										"joinId": 1798969,
										"customPageId": 6280914
									},
									{
										"productId": 5187879,
										"orderBy": 2,
										"joinId": 1798969,
										"customPageId": 6280914
									},
									{
										"productId": 3931552,
										"orderBy": 3,
										"joinId": 1798969,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 36,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 1486766,
										"orderBy": 1,
										"joinId": 1798970,
										"customPageId": 6280914
									},
									{
										"productId": 3300486,
										"orderBy": 2,
										"joinId": 1798970,
										"customPageId": 6280914
									},
									{
										"productId": 1725234,
										"orderBy": 3,
										"joinId": 1798970,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "segmentingLine",
							"pageSort": 37,
							"segmentingLine": {
								"type": "segmentingLine",
								"value": 4
							}
						},
						{
							"type": "picture",
							"pageSort": 38,
							"picture": {
								"jumpType": 3,
								"jumpUrl": "2887",
								"jumpProductType": 0,
								"orgId": 23694,
								"pictureUrl": "http://oss.197.com/202005/08/sns/sns_5013vfFA1p0516KA9A3IX8.jpg",
								"pictureSpacing": 2,
								"customPageId": 6280914,
								"deleteAppId": false
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 39,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 5798638,
										"orderBy": 1,
										"joinId": 1798971,
										"customPageId": 6280914
									},
									{
										"productId": 31955,
										"orderBy": 2,
										"joinId": 1798971,
										"customPageId": 6280914
									},
									{
										"productId": 4404473,
										"orderBy": 3,
										"joinId": 1798971,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 40,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 4113123,
										"orderBy": 1,
										"joinId": 1798972,
										"customPageId": 6280914
									},
									{
										"productId": 3779013,
										"orderBy": 2,
										"joinId": 1798972,
										"customPageId": 6280914
									},
									{
										"productId": 4002620,
										"orderBy": 3,
										"joinId": 1798972,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "segmentingLine",
							"pageSort": 41,
							"segmentingLine": {
								"type": "segmentingLine",
								"value": 4
							}
						},
						{
							"type": "picture",
							"pageSort": 42,
							"picture": {
								"jumpType": 3,
								"jumpUrl": "421416",
								"jumpProductType": 0,
								"orgId": 23694,
								"pictureUrl": "http://oss.197.com/202005/08/sns/sns_Vjf75znXAu0516KA9A3RUI.jpg",
								"pictureSpacing": 2,
								"customPageId": 6280914,
								"deleteAppId": false
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 43,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 4042687,
										"orderBy": 1,
										"joinId": 1798973,
										"customPageId": 6280914
									},
									{
										"productId": 3998679,
										"orderBy": 2,
										"joinId": 1798973,
										"customPageId": 6280914
									},
									{
										"productId": 3736399,
										"orderBy": 3,
										"joinId": 1798973,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 44,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 3990076,
										"orderBy": 1,
										"joinId": 1798974,
										"customPageId": 6280914
									},
									{
										"productId": 4042200,
										"orderBy": 2,
										"joinId": 1798974,
										"customPageId": 6280914
									},
									{
										"productId": 3134949,
										"orderBy": 3,
										"joinId": 1798974,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "segmentingLine",
							"pageSort": 45,
							"segmentingLine": {
								"type": "segmentingLine",
								"value": 4
							}
						},
						{
							"type": "picture",
							"pageSort": 46,
							"picture": {
								"jumpType": 3,
								"jumpUrl": "3686",
								"jumpProductType": 0,
								"orgId": 23694,
								"pictureUrl": "http://oss.197.com/202005/08/sns/sns_BnmWKV0PC10516KA9A41XE.jpg",
								"pictureSpacing": 2,
								"customPageId": 6280914,
								"deleteAppId": false
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 47,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 31785,
										"orderBy": 1,
										"joinId": 1798975,
										"customPageId": 6280914
									},
									{
										"productId": 25817,
										"orderBy": 2,
										"joinId": 1798975,
										"customPageId": 6280914
									},
									{
										"productId": 1507727,
										"orderBy": 3,
										"joinId": 1798975,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 48,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 1487724,
										"orderBy": 1,
										"joinId": 1798976,
										"customPageId": 6280914
									},
									{
										"productId": 30756,
										"orderBy": 2,
										"joinId": 1798976,
										"customPageId": 6280914
									},
									{
										"productId": 664516,
										"orderBy": 3,
										"joinId": 1798976,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "segmentingLine",
							"pageSort": 49,
							"segmentingLine": {
								"type": "segmentingLine",
								"value": 4
							}
						},
						{
							"type": "picture",
							"pageSort": 50,
							"picture": {
								"jumpType": 3,
								"jumpUrl": "2890",
								"jumpProductType": 0,
								"orgId": 23694,
								"pictureUrl": "http://oss.197.com/202005/08/sns/sns_QStXEAfA0X0516KA9A4FFL.jpg",
								"pictureSpacing": 2,
								"customPageId": 6280914,
								"deleteAppId": false
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 51,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 3213268,
										"orderBy": 1,
										"joinId": 1798977,
										"customPageId": 6280914
									},
									{
										"productId": 29701,
										"orderBy": 2,
										"joinId": 1798977,
										"customPageId": 6280914
									},
									{
										"productId": 3752865,
										"orderBy": 3,
										"joinId": 1798977,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "leftAndRightGoods",
							"pageSort": 52,
							"leftAndRightGoods": {
								"modelType": 3,
								"jumpType": 2,
								"orgId": 23694,
								"goodsLayoutJump": [{
										"productId": 3700092,
										"orderBy": 1,
										"joinId": 1798978,
										"customPageId": 6280914
									},
									{
										"productId": 2960653,
										"orderBy": 2,
										"joinId": 1798978,
										"customPageId": 6280914
									}
								],
								"customPageId": 6280914
							}
						},
						{
							"type": "button",
							"pageSort": 53,
							"button": {
								"jumpType": 4,
								"jumpUrl": "subPackage/index/pages/classify-tag/classify-tag?iconName=分类主页",
								"jumpProductType": 0,
								"orgId": 23694,
								"buttonWords": "查看更多款式",
								"buttonStyle": 1,
								"buttonColor": "2",
								"buttonCircle": 50,
								"buttonWidth": 219,
								"customPageId": 6280914,
								"deleteAppId": false
							}
						},
						{
							"type": "video",
							"pageSort": 54,
							"video": {
								"videoUrl": "https://news.197.com/news/video/url/s3268ccs3my",
								"coverUrl": "http://oss.197.com/202106/13/sns1629078517000006570.jpg",
								"orgId": 23694,
								"customPageId": 6280914,
								"marginType": 1
							}
						}
					],
					"currentTimes": 1655705498449,
					"msg": "操作成功"
				}
			}
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
	.swiper {
		height: 300rpx;
		width: 100%;
	}
	
	/deep/ .uni-swiper-dots {
		bottom: 1rpx;
	}
	
	/deep/ .uni-swiper-dot {
		color: red;
		height: 12rpx !important;
		width: 12rpx !important;
		border: 1rpx solid red;
		bottom: 200rpx;
	}
	.item {
		color: red;
	}
</style>
