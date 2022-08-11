const baseUrl = "http://39.107.53.166/";

function request({
    path,
    para = {},
    header = {},
    method = 'GET'
}) {
    return new Promise((resolve, reject) => {
        uni.request({
            url: baseUrl + path, //仅为示例，并非真实接口地址。
            data: para,
            method: method,
            header: header,
            success: (res) => {
                resolve(res);
            },
            error: (err) => {
                reject(err);
            }
        });
    });
}


//客服信息
const customerServicePath = "shuwei/ccp/api/v1/merchants/1";
export function fetchCustomerService() {
    return request({
        path: customerServicePath,
    });
}

// 首页
const homePath = "wx/home/index";
import data from "./home.json";

export function fetchHomeData() {
    console.log(data);
    return Promise.resolve(data);
    return request({
        path: homePath,
    });
}