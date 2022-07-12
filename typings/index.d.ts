export {};

// => 全局类型声明
declare global {
  interface Window {
    _hmt: any;
    wx: any;
    AlipayJSBridge: any;
  }
  namespace GD {
    interface BaseResponse<T = any> {
      code: number;
      data: T;
      msg: string;
      page: {
        pageNo: number;
        pageSize: number;
        pages: number;
        total: number;
      };
    }
  }
}

// 全局访问：const response = GD.BaseResponse<{name: string}>
