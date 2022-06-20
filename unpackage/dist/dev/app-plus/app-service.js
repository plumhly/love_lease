if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$1 = {
    computed: {
      sliders() {
        return this.data.data.filter((item) => item.type === "sowing")[0].sowing;
      }
    },
    data() {
      return {
        href: "https://uniapp.dcloud.io/component/README?id=uniui",
        data: {
          "code": "000000",
          "data": [
            {
              "type": "sowing",
              "pageSort": 1,
              "sowing": [
                {
                  "jumpType": 3,
                  "jumpUrl": "923494",
                  "orgId": 23694,
                  "groupId": 19873686,
                  "pictureUrl": "http://oss.197.com/202203/15/sns/sns_dGYUBl6IL80317L0UO4I11.jpg",
                  "customPageId": 6280914,
                  "deleteAppId": false,
                  "heightWidthScale": "2:1"
                },
                {
                  "jumpType": 3,
                  "jumpUrl": "881770",
                  "orgId": 23694,
                  "groupId": 19873686,
                  "pictureUrl": "http://oss.197.com/202201/01/sns/sns_LoAJvXTzfO0224L00TDYJJ.jpg",
                  "customPageId": 6280914,
                  "deleteAppId": false,
                  "heightWidthScale": "2:1"
                },
                {
                  "jumpType": 3,
                  "jumpUrl": "421416",
                  "orgId": 23694,
                  "groupId": 19873686,
                  "pictureUrl": "http://oss.197.com/202201/01/sns/sns_ngNayadrjX0224L00TFBZ5.jpg",
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
                "title": "\u70B9\u6B64\u8F93\u5165\u641C\u7D22"
              }
            },
            {
              "type": "button",
              "pageSort": 3,
              "button": {
                "jumpType": 4,
                "jumpUrl": "subPackage/index/pages/classify-tag/classify-tag?iconName=\u5206\u7C7B\u4E3B\u9875",
                "jumpProductType": 0,
                "orgId": 23694,
                "buttonWords": "\u70B9\u6B64\u8FDB\u5165\u5546\u57CE",
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
              "icon": [
                {
                  "jumpType": 3,
                  "jumpUrl": "3308",
                  "jumpProductType": 1,
                  "groupId": 19873689,
                  "orgId": 23694,
                  "iconRatio": "2",
                  "iconUrl": "http://oss.197.com/202201/01/sns/sns_ajDZqUdOKL0112KYAUEHGU.jpg",
                  "iconWords": "\u6BD5\u4E1A\u6821\u56ED",
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
                  "iconWords": "\u54C1\u724C\u6C49\u670D",
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
                  "iconWords": "\u53E4\u4EE3\u670D\u88C5",
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
                  "iconWords": "\u6E05\u5BAB\u7CFB\u5217",
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
                  "iconWords": "\u6C11\u56FD\u6297\u6218",
                  "customPageId": 6280914,
                  "deleteAppId": false
                }
              ]
            },
            {
              "type": "icon",
              "pageSort": 5,
              "icon": [
                {
                  "jumpType": 3,
                  "jumpUrl": "3309",
                  "jumpProductType": 1,
                  "groupId": 19873690,
                  "orgId": 23694,
                  "iconRatio": "2",
                  "iconUrl": "http://oss.197.com/202201/01/sns/sns_rNeKtFo0iY0115KYFN8UJO.png",
                  "iconWords": "\u519B\u88C5\u7CFB\u5217",
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
                  "iconWords": "\u5A5A\u7EB1\u79C0\u79BE",
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
                  "iconWords": "\u4E3B\u6301\u793C\u670D",
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
                  "iconWords": "\u897F\u88C5\u7CFB\u5217",
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
                  "iconWords": "\u65D7\u888D\u793C\u4EEA",
                  "customPageId": 6280914,
                  "deleteAppId": false
                }
              ]
            },
            {
              "type": "icon",
              "pageSort": 6,
              "icon": [
                {
                  "jumpType": 3,
                  "jumpUrl": "2887",
                  "jumpProductType": 1,
                  "groupId": 19873691,
                  "orgId": 23694,
                  "iconRatio": "2",
                  "iconUrl": "http://oss.197.com/202004/09/sns/sns_YDun2eQx9G0410K8TMNAZ1.png",
                  "iconWords": "\u821E\u8E48\u670D",
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
                  "iconWords": "\u5408\u5531\u670D",
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
                  "iconWords": "\u5F02\u57DF\u98CE\u60C5",
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
                  "iconWords": "\u7ECF\u5178\u5267\u76EE",
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
                  "iconWords": "\u5361\u901A\u4EBA\u5076",
                  "customPageId": 6280914,
                  "deleteAppId": false
                }
              ]
            },
            {
              "type": "icon",
              "pageSort": 7,
              "icon": [
                {
                  "jumpType": 3,
                  "jumpUrl": "529348",
                  "jumpProductType": 1,
                  "groupId": 19873692,
                  "orgId": 23694,
                  "iconRatio": "2",
                  "iconUrl": "http://oss.197.com/202201/01/sns/sns_kXgjGrpgSr0112KYAUJDVE.jpg",
                  "iconWords": "\u5E74\u4EE3\u670D\u88C5",
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
                  "iconWords": "\u914D\u9970\u9053\u5177",
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
                  "iconWords": "\u8FD0\u52A8\u4F1A",
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
                  "iconWords": "\u513F\u7AE5\u670D\u88C5",
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
                  "iconWords": "\u5404\u884C\u5404\u4E1A",
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "goodsLayoutJump": [
                  {
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
                "jumpUrl": "subPackage/index/pages/classify-tag/classify-tag?iconName=\u5206\u7C7B\u4E3B\u9875",
                "jumpProductType": 0,
                "orgId": 23694,
                "buttonWords": "\u67E5\u770B\u66F4\u591A\u6B3E\u5F0F",
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
          "msg": "\u64CD\u4F5C\u6210\u529F"
        }
      };
    },
    methods: {}
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "container" }, [
      vue.createElementVNode("swiper", {
        class: "wappper",
        "indicator-dots": true,
        autoplay: true,
        interval: 3e3,
        duration: 1e3
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.sliders, (item) => {
          return vue.openBlock(), vue.createElementBlock("swiper-item", null, [
            vue.createElementVNode("image", { src: "http://oss.197.com/202203/15/sns/sns_dGYUBl6IL80317L0UO4I11.jpg" })
          ]);
        }), 256))
      ])
    ]);
  }
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/plum/Desktop/uni_ex/pages/index/index.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (shared.toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = shared.toTypeString(v).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = shared.toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("warn", "at App.vue:4", "\u5F53\u524D\u7EC4\u4EF6\u4EC5\u652F\u6301 uni_modules \u76EE\u5F55\u7ED3\u6784 \uFF0C\u8BF7\u5347\u7EA7 HBuilderX \u5230 3.1.0 \u7248\u672C\u4EE5\u4E0A\uFF01");
      formatAppLog("log", "at App.vue:5", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:8", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:11", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/plum/Desktop/uni_ex/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
