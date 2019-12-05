// 导入了 vue
import Vue from "vue";
// 导入了 VueROuter
import VueRouter from "vue-router";
// 导入组件
import UserVant from "../views/uservant";
// 导入组件
import Login from "../views/login"

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/UserVant", // 请求的路由
      name: "UserVant", // 给当前路由设置一个别名
      component: UserVant // 当前路由对应的组件
    },
    // 登录路由
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
