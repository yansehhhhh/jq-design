import axios from "../axios";
const prefix = "/api-gk/gk-order";
const prefix2 = "/api-gk/gk-product";
const prefix3 = "/api-gk/gk-audiovideo";
const prefix4 = "/api-gk/zg-question";
const prefixAliyun =
  "https://electronic-contract-files.oss-cn-shanghai.aliyuncs.com/"; //OSS上传地址

// 获取题目
export const getQuestions = (data: object) => {
  return axios.post(`${prefix}/app/electronic/getQuestions`, data);
};

//暂存风评答案
export const saveQuestionsAnswer = (query: object, data: object) => {
  return axios({
    url: `${prefix}/app/electronic/saveQuestions`,
    method: "post",
    params: query,
    data,
  });
};

//提交风评答案
export const submitAnswer = (data: object) => {
  return axios.post(`${prefix}/app/electronic/submitRisk`, data);
};

//获取风评结果
export const getRiskResult = (data: object) => {
  return axios.post(`${prefix}/app/electronic/getRiskResult`, data);
};

// 获取订单信息
export const getOrderInfo = (data: object) => {
  return axios.post(`${prefix}/app/simple_order_pay/getOrderInfo`, data);
};

// 判断是否已失效
export const checkInnerLink = (data: object) => {
  return axios.post(`${prefix}/app/simple_order_pay/checkInnerLink`, data);
};

//调用阿里支付
export const addAliPay = (data: object) => {
  return axios.post(`${prefix}/app/simple_order_pay/addAliPayOrder`, data);
};

//微信接口
export const addWxPay = (data: object) => {
  return axios.post(`${prefix}/app/simple_order_pay/addWxPayOrder`, data);
};

// 获取电子签约进度
export const getNextProcess = (data: object) => {
  return axios.post(`${prefix}/app/Simplesign/getNextProcess`, data);
};

//发送短信验证码
export const sendPhoneCode = (data: object) => {
  return axios.post(`${prefix}/app/Simplesign/sendCode`, data);
};

// 验证短信验证码
export const checkphone = (data: object) => {
  return axios.post(`${prefix}/app/Simplesign/checkPhoneCode`, data);
};

// 实名认证
export const identifiy = (data: object) => {
  return axios.post(`${prefix}/app/Simplesign/identification`, data);
};

//获取订单订单列表
export const getProductList = (data: object) => {
  return axios.post(`${prefix}/app/Simplesign/contractList`, data);
};

//获取订单协议列表 (老的 可能后面不用 )
export function getAgreementList(data: object) {
  return axios.post(`${prefix}/app/Simplesign/getContractInfo`, data);
}

//实名认证 app端保存用户姓名
export const saveUserName = (data: object) => {
  return axios.post(`${prefix}/app/Simplesign/saveCardInfo`, data);
};

//上传凭证图片
export const uploadFile = (data: object) => {
  return axios.post(`${prefix}/app/simple_order_pay/uploadFile`, data);
};

//银联支付
export const addUnionPay = (data: object) => {
  return axios.post(`${prefix}/app/simple_order_pay/addUnionPay`, data);
};

//获取单个协议详情
export const getAgreement = (data: object) => {
  return axios.post(`${prefix}/app/Simplesign/getContractImage`, data);
};

// 权益列表接口
export const getUserRights = (params: object) => {
  return axios.get(`${prefix}/gkd/member/rights`, {
    params: params,
  });
};

//3大指标购买 生成订单号
export const getThreePointOrder = (params: object) => {
  return axios.post(`${prefix}/gkd/order/createInventedOrder`, params);
};

//阅读协议
export const readContent = (params: object) => {
  return axios.post(`${prefix}/app/simplesign/readContent`, params);
};

//老师列表
export const getTeacherList = () => {
  return axios.post(`${prefix}/app/simple_order_pay/teacherList`);
};

//第四方支付宝支付
export const addQmfAliPayOrder = (params: object) => {
  return axios.post(`${prefix}/app/simple_order_pay/addQmfAliPayOrder`, params);
};

//第四方微信支付
export const addQmfWxPayOrder = (params: object) => {
  return axios.post(`${prefix}/app/simple_order_pay/addQmfWxPayOrder`, params);
};

//第四方云闪付
export const addQmfCloudPayOrder = (params: object) => {
  return axios.post(
    `${prefix}/app/simple_order_pay/addQmfCloudPayOrder`,
    params
  );
};

//微信本次支付信息
export const endPayInfo = (params: object) => {
  return axios.post(`${prefix}/app/simple_order_pay/endPayInfo`, params);
};

// 查看用户关联信息
export const getCustomerRelate = (params: object) => {
  return axios.get(`${prefix}/gkd/customer/relate`, {
    params: params,
  });
};
// 查看用户所属团队
export const getCustomerTeam = (id: number) => {
  return axios.get(`${prefix3}/v1/account/user/${id}`);
};
//查询是否新单
export const findContractResult = (params: object) => {
  return axios.post(
    `${prefix}/app/simple_order_pay/findContractResult`,
    params
  );
};

//查询微信支付本次支付情况
export const merPayInfo = (params: object) => {
  return axios.get(`${prefix}/app/simple_order_pay/merPayInfo`, {
    params: params,
  });
};

//查询电签列表
export const getContractList = (data: object) => {
  return axios.post(`${prefix}/gkd/order/contractList`, data);
};

// 查询在线购买-单功能营销页
export const buyOnline = (id: number) => {
  return axios.get(`${prefix2}/v1/retail/buyOnline/${id}`);
};

// 查询在线购买-零售新增接口
export const getPriceList = (id: number) => {
  return axios.get(`${prefix2}/v1/shop_mall/product/prices/${id}`);
};

// 产品包购买页
export const packageBuy = (id: number) => {
  return axios.get(`${prefix2}/v1/retail/package/buy/${id}`);
};

// 根据功能id查询产品包
export const productList = (id: number) => {
  return axios.get(`${prefix2}/v1/retail/product/${id}`);
};

// 立即购买获取下单id
export const createInventedOrder = (data: object) => {
  return axios.post(`${prefix}/gkd/order/createInventedOrder`, data);
};

// 获取销售二维码
export const getSaleQR = () => {
  return axios.get(`${prefix}/gkd/order/getSaleQR`);
};

// 获取用户可以购买的产品包
export const getPurchase = () => {
  return axios.get(`${prefix2}/productPackage/purchase`);
};

//获取全民付开关状态
export const getPayConfig = () => {
  return axios.get(`${prefix}/app/simple_order_pay/pay_config`);
};

// 放心签用户签署
export const contractSign = (data: object) => {
  return axios.post(`${prefix4}/v1/contract/sign`, data);
};

// 放心签协议列表
export const getAgreements = (data: object) => {
  return axios.post(`${prefix4}/v1/contract/getAgreements`, data);
};

// 获取人脸识别url
export const getFaceUrl = (data: object) => {
  return axios.post(`${prefix4}/v1/contract/getFaceUrl`, data);
};

//人脸识别结果回调
export const faceFxqCall = (params: object) => {
  return axios.post(`${prefix}/gkd/order/faceFxqCall`, params);
};

// 放心签pdf转图片
export const getAgreementImages = (params: object) => {
  return axios.post(`${prefix4}/v1/contract/getAgreementImages`, params);
};

// 获取oss上传token
export const getSignOssTicket = (query: object) => {
  return axios.get(`${prefix4}/v1/contract/getOssTicket`, {
    params: query,
  });
};

//上传至oss
export const saveIdCardOss = (data: object) => {
  return axios.post(`${prefixAliyun}`, data);
};

// oss图片回显
export const getSignOssLink = (query: object) => {
  return axios.get(`${prefix4}/v1/contract/getOssLink`, {
    params: query,
  });
};
