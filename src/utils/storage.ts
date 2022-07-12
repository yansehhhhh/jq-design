const { localStorage, sessionStorage } = window;
const storage = {
  setLocal: (key: string, value: any) => {
    let isObj = typeof value === "object";
    localStorage.setItem(key, isObj ? JSON.stringify(value) : value);
  },
  getLocal: (key: string) => {
    let value = localStorage.getItem(key);
    try {
      let isObj = typeof value === "object";
      return isObj ? value : JSON.parse(value || "{}");
    } catch (e) {
      return value;
    }
  },
  clearOneLocal: (key: string) => {
    localStorage.removeItem(key);
  },
  clearAllLocal: () => {
    localStorage.clear();
  },
  setSession: (key: string, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  //对象追加新key值，不改变原值
  appendSession: (key: string, value: any) => {
    if (sessionStorage.getItem(key)) {
      let oldValue = JSON.parse(sessionStorage.getItem(key) || "{}");
      let newValue = Object.assign(oldValue, value);
      sessionStorage.setItem(key, JSON.stringify(newValue));
    } else {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  },
  getSession: (key: string) => {
    let value = sessionStorage.getItem(key);
    try {
      return JSON.parse(value || "{}");
    } catch (e) {
      return value;
    }
  },
  clearOneSession: (key: string) => {
    sessionStorage.removeItem(key);
  },
  clearAllSession: () => {
    sessionStorage.clear();
  },
  setCookie: (cname: string, cvalue: any, exdays: number) => {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=''; expires=-1";
    document.cookie = cname + "=" + cvalue + "; " + expires;
  },
  getCookie: (cname: string) => {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i].trim();
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
  },
};

export default storage;
