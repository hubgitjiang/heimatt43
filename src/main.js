// 导入了 Vue
import Vue from "vue";
// 导入 vant
import Vant from "vant";
// 导入 vant 的样式
import "vant/lib/index.css";
// 导入了 App.vue （根组件）
import App from "./App.vue";
// 导入了 路由
import router from "./router";
// 导入了 仓库
import store from "./store";
// 导入字体图标
import "./styles/myiconfont.css";

// 使用 vant
Vue.use(Vant);

// 设置当前项目为开发环境
Vue.config.productionTip = false;

// 创建一个 Vue 实例
new Vue({
  router, // 挂载路由
  store, // 挂载仓库
  render: h => h(App) // 渲染根组件
}).$mount("#app"); // 将内容渲染到视图容器中
