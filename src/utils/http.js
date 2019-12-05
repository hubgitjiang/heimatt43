// 封装 axios
import axios from "axios";

// 创建一个新的 axios 对象
// axios.create：
//    根据 axios 创建出一个新的实例来
//      意义在于：
//          同时请求两个服务器的接口：
//              黑马头条的服务器： http://ttapi.research.itcast.cn/app/v1_0
//                  instance1
//              黑马页面的服务器： http://mm.research.itcast.cn/app/v1_0
//                  instance2
// 这个实例单独用来请求黑马头条的服务器
let instance = axios.create({
  baseURL: "http://ttapi.research.itcast.cn/app/v1_0"
});

// 设置请求拦截器
instance.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 暴露 axios 实例
export default instance;
