import JYS from "./native";
console.log(JYS);
const utils = {
  isPhone(str: string) {
    return /^1[3456789]{1}\d{9}$/.test(str);
  },
  // 手机号脱敏
  phoneDesensitization(phone: string) {
    return phone.replace(/(\d{3})\d*(\d{4})/, "$1****$2");
  },
  /**
   * @desc: 防抖函数
   * @param {Function} func 需要防抖的函数
   * @param {number} time 等待间隔 默认300ms
   * @param {Boolean} immediate true 表立即执行，false 表非立即执行
   * @return: void
   */
  debounce(func: Function, time: number = 300, immediate = false) {
    let timer: number | null = null;
    return (...args: any) => {
      if (timer) clearInterval(timer);
      if (immediate) {
        func.apply(this, args);
        timer = <any>setTimeout(() => {
          timer = null;
        }, time);
      } else {
        timer = <any>setTimeout(() => {
          func.apply(this, args);
        }, time);
      }
    };
  },
  /**
   * @desc: 节流函数
   * @param {Function} func 需要节流的函数
   * @param {number} time 等待间隔 默认300ms
   * @return: void
   */
  throttle(func: Function, time: number = 300, immediate = false) {
    if (immediate) {
      let prevTime = 0;
      return (...args: any) => {
        let nowTime = Date.now();
        if (nowTime - prevTime >= time) {
          func.apply(this, args);
          prevTime = nowTime;
        }
      };
    } else {
      let timer: number | null = null;
      return (...args: any) => {
        if (!timer) {
          func.apply(this, args);
          timer = window.setTimeout(() => {
            if (timer) clearInterval(timer);
            timer = null;
          }, time);
        }
      };
    }
  },
  // 判断在那个容器
  getPlatform() {
    let pf = "";
    const ua: string = window.navigator.userAgent;
    if (ua.indexOf("JYS_ANDROID") > 0) {
      pf = "JYS_ANDROID";
    } else if (ua.indexOf("JYS_IOS") > 0) {
      pf = "JYS_IOS";
    } else if (ua.indexOf("MicroMessenger") > 0) {
      pf = "wechat";
    } else if (ua.indexOf("AlipayClient") > 0) {
      pf = "alipay";
    } else if (ua.indexOf("CloudPay") > 0) {
      pf = "cloudpay";
    } else if (ua.indexOf("Mobile") > 0) {
      pf = "window mobile";
    } else {
      pf = "h5";
    }
    return pf;
  },
  isApp() {
    if (
      utils.getPlatform() == "JYS_ANDROID" ||
      utils.getPlatform() == "JYS_IOS"
    ) {
      return true;
    } else {
      return false;
    }
  },
  // 时间转换方法
  formatDate(time: string, format: any) {
    var t = new Date(time);
    var tf = function (i: any) {
      return (i < 10 ? "0" : "") + i;
    };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (a: string) => {
      switch (a) {
        case "yyyy":
          return tf(t.getFullYear());
        case "MM":
          return tf(t.getMonth() + 1);
        case "mm":
          return tf(t.getMinutes());
        case "dd":
          return tf(t.getDate());
        case "HH":
          return tf(t.getHours());
        case "ss":
          return tf(t.getSeconds());
      }
    });
  },
};
export default utils;
