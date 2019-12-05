// 用来封装所有与用户相关的网络请求
// 导入 http
import http from "../utils/http";

// 登录的方法
function apiLogin({ mobile, code }) {
  return http({
    url: "/authorizations",
    method: "POST",
    data: {
      mobile,
      code
    }
  });
}

// 按需导出
export { apiLogin };
