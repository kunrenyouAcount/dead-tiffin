// cookieからkey値で保存されている値を取得する
export const getCookieValue = (key: string) => {
  const arr = [];
  if (process.browser) {
    if (document.cookie != "") {
      const tmp = document.cookie.split("; ");
      for (let i = 0; i < tmp.length; i++) {
        const data = tmp[i].split("=");
        arr[data[0]] = decodeURIComponent(data[1]);
      }
    }
    if (key in arr) {
      return arr[key];
    }
    return "";
  }
};

// jwt認証ように保存するkey値
export const tiffin_token_key = "tiffin_token";
