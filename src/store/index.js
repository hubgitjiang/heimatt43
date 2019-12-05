// 导入了 Vue
import Vue from "vue";
// 导入了 Vuex
import Vuex from "vuex";
import { setLocal, getLocal } from "../utils/mylocal";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 保存用户信息
    user: getLocal("userinfo") || {}
  },
  mutations: {
    setUser: function(state, payload) {
      // 给 user 赋值
      state.user = payload;
      // 保存到 localstoreage 中
      setLocal("userinfo", payload);
    }
  }
});
