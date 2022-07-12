var JYS: any = (function (win: any) {
  const ua = navigator.userAgent;
  let isAndroid = ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1;
  let isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  let isApp = ua.indexOf("JYS_ANDROID") > 0 || ua.indexOf("JYS_IOS") > -1;
  // 这是必须要写的，用来创建一些设置
  function setupWebViewJavascriptBridge(callback: any) {
    // Android使用
    if (isAndroid) {
      if (win.WebViewJavascriptBridge) {
        callback(win.WebViewJavascriptBridge);
      } else {
        document.addEventListener(
          "WebViewJavascriptBridgeReady",
          () => {
            callback(win.WebViewJavascriptBridge);
          },
          false
        );
      }
      sessionStorage.phoneType = "android";
    }

    // iOS使用
    if (isiOS && isApp) {
      if (win.WebViewJavascriptBridge) {
        return callback(win.WebViewJavascriptBridge);
      }
      if (win.WVJBCallbacks) {
        return win.WVJBCallbacks.push(callback);
      }
      win.WVJBCallbacks = [callback];
      var WVJBIframe = document.createElement("iframe");
      WVJBIframe.style.display = "none";
      WVJBIframe.src = "wvjbscheme://__BRIDGE_LOADED__";
      document.documentElement &&
        document.documentElement.appendChild(WVJBIframe);
      setTimeout(() => {
        document.documentElement.removeChild(WVJBIframe);
      }, 0);
      sessionStorage.phoneType = "ios";
    }
  }
  // 注册回调函数，第一次连接时调用 初始化函数(android需要初始化,ios不用)
  setupWebViewJavascriptBridge((bridge: any) => {
    if (isAndroid) {
      // 初始化
      if (!bridge._messageHandler) {
        bridge.init((message: any, responseCallback: any) => {
          var data = {
            "Javascript Responds": "Wee!",
          };
          responseCallback(data);
        });
      }
    }
  });
  return {
    // js调APP方法 （参数分别为:app提供的方法名  传给app的数据  回调）
    callHandler(name: string, data: any, callback: any) {
      // console.log(name, data, callback)
      setupWebViewJavascriptBridge((bridge: any) => {
        bridge.callHandler(name, data, callback);
      });
    },
    // APP调js方法 （参数分别为:js提供的方法名  回调）
    registerHandler(name: string, callback: any) {
      // console.log(name, callback)
      setupWebViewJavascriptBridge((bridge: any) => {
        try {
          bridge.registerHandler(name, (data: any, responseCallback: any) => {
            callback(data, responseCallback);
          });
        } catch (error) {
          console.log(error);
        }
      });
    },
  };
})(window);
(function () {
  // 返回
  JYS.registerHandler("onBackClick", (res: any) => {
    // console.log('onBackClick' + datas)
  });
  JYS.back = function (data: any, cb: any) {
    // console.log(data: any, cb: any)
    return JYS.callHandler("onBackClick", data, cb);
  };
  // 获取用户登录信息
  JYS.registerHandler("getUserInfo", (datas: any, cb: any) => {
    // console.log('getUserInfo' + datas)
  });
  JYS.getUserInfo = function (data: any, cb: any) {
    return JYS.callHandler("getUserInfo", data, cb);
  };
  // 获取用户认证信息
  JYS.registerHandler("getUserStatInfo", (datas: any, cb: any) => {
    // console.log('getUserStatInfo' + datas)
  });
  JYS.getUserStatInfo = function (data: any, cb: any) {
    return JYS.callHandler("getUserStatInfo", data, cb);
  };
  // openLoginPage
  JYS.registerHandler("openLoginPage", (datas: any, cb: any) => {
    // console.log('openLoginPage' + datas)
  });
  JYS.openLoginPage = function (data: any, cb: any) {
    return JYS.callHandler("openLoginPage", "", cb);
  };
  // getLocalUuid
  JYS.registerHandler("getLocalUuid", (datas: any, cb: any) => {
    // console.log('getLocalUuid' + datas)
  });
  JYS.getLocalUuid = function (data: any, cb: any) {
    return JYS.callHandler("getLocalUuid", data, cb);
  };
  // 打开新的webview  openWebView
  JYS.registerHandler("openWebView", (datas: any, cb: any) => {
    // console.log('openWebView' + datas)
  });
  JYS.openWebView = function (data: any, cb: any) {
    // console.log('JYS:openWebView', data)
    return JYS.callHandler("openWebView", data, cb);
  };
  //打开新的浏览器
  JYS.registerHandler("openNewWindow", (datas: any, cb: any) => {
    // console.log('openNewWindow' + datas)
  });
  JYS.openNewWindow = function (data: any, cb: any) {
    return JYS.callHandler("openNewWindow", data, cb);
  };
  //打开外链
  JYS.registerHandler("openOuterLink", (datas: any, cb: any) => {
    // console.log('openOuterLink' + datas)
  });
  JYS.openOuterLink = function (data: any, cb: any) {
    return JYS.callHandler("openOuterLink", data, cb);
  };
  // 关闭webview onFinishClick
  JYS.registerHandler("onFinishClick", (datas: any, cb: any) => {
    // console.log('onFinishClick' + datas)
  });
  JYS.onFinishClick = function (data: any, cb: any) {
    return JYS.callHandler("onFinishClick", "", cb);
  };
  // 获取app秘钥
  JYS.registerHandler("getAppKey", (datas: any, cb: any) => {
    // console.log('getAppKey' + datas)
  });
  JYS.getAppKey = function (data: any, cb: any) {
    return JYS.callHandler("getAppKey", "", cb);
  };
  // 内购
  JYS.registerHandler("openApplePay", (datas: any, cb: any) => {
    // console.log('openApplePay' + datas, cb)
  });
  JYS.openApplePay = function (data: any, cb: any) {
    // console.log('open')
    return JYS.callHandler("openApplePay", data, cb);
  };

  //内购弹窗
  JYS.registerHandler("openApplePayDialiog", (datas: any, cb: any) => {
    // console.log('openApplePayDialiog' + datas, cb)
  });
  JYS.openApplePayDialiog = function (data: any, cb: any) {
    // console.log('data')
    return JYS.callHandler("openApplePayDialiog", data, cb);
  };

  // app跳转小程序、各个导航tab
  JYS.registerHandler("jumpPage", (datas: any, cb: any) => {
    // console.log('jumpPage' + datas)
  });
  JYS.jumpPage = function (data: any, cb: any) {
    // console.log(data: any, cb: any)
    return JYS.callHandler("jumpPage", data, cb);
  };
  // 获取app版本号
  JYS.registerHandler("getAppVersion", (datas: any, cb: any) => {
    // console.log('getAppVersion' + datas)
  });
  JYS.getAppVersion = function (data: any, cb: any) {
    return JYS.callHandler("getAppVersion", data, cb);
  };

  //拉起支付
  //orderId,orderMoney
  JYS.registerHandler("startAppPay", (datas: any, cb: any) => {
    // console.log('startAppPay' + datas)
  });
  JYS.startAppPay = function (data: any, cb: any) {
    return JYS.callHandler("startAppPay", data, cb);
  };

  //  webView调用原生打开微信
  JYS.registerHandler("actionFromJSOpenWeChat", (datas: any, cb: any) => {
    // console.log('getAppKey' + datas)
  });
  JYS.actionFromJSOpenWeChat = function (data: any, cb: any) {
    return JYS.callHandler("actionFromJSOpenWeChat", data, cb);
  };
})();
export default JYS;
