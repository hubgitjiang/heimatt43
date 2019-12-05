// 设置 localst
function setLocal(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

// 获取 local
function getLocal(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

// 删除 local
function removeLocal(key) {
  window.localStorage.removeItem(key);
}

// 按需导出
export { setLocal, getLocal, removeLocal };
