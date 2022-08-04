const baseUrl = "http://39.107.53.166/shuwei/ccp/api/v1/merchants/";

function request({
    path,
    para = {},
    method = 'GET'
}) {
    return new Promise((resolve, reject) => {
        uni.request({
            url: baseUrl + path, //仅为示例，并非真实接口地址。
            data: para,
            method: method,
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
export function fetchCustomerService() {
    return request({
        path: '1',
    });
}