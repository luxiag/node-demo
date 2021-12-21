import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style

import { Toast, Dialog } from "antd-mobile";

import { useAuth } from "context/auth-context";

NProgress.configure({ showSpinner: false });

const instance = axios.create({
  // 默认的配置
  baseURL: BASE_URL, // -> http://123.57.176.198:3000/banner
  timeout: TIMEOUT, // -> 5000
  headers: {},
  withCredentials: true,
});

instance.interceptors.request.use(
  // 请求拦截
  (config) => {
    // const { user } = useAuth();
    // 1.发送网络请求时, 在界面的中间位置显示Loading的组件
    NProgress.start(); // 启动滚动条
    // 2.某一些请求要求用户必须携带token, 如果没有携带, 那么直接跳转到登录页面
    // if (user?.token) {
    //   config.headers["Authorization"] = `Bearer ${user.token}`;
    // }
    // 3.params/data序列化的操作

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
instance.interceptors.response.use(
  (response) => {
    NProgress.done(); // 关闭滚动条
    const res = response.data;

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 0) {

      Toast.show({
        content: res.msg || "请求失败",
        icon: "fail",
        duration: 5 * 1000,
      });

      // 判断 token 失效的场景
      if (res.code === -2) {
        Dialog.confirm({
          content: "Token 失效，请重新登录",
          confirmText: "重新登录",
          cancelText: "取消",
          onConfirm: () => {
            Window.location.reload();
          },
        });
      }
      return Promise.reject(new Error(res.msg || "请求失败"));
    } else {
      
      return res.data;
    }
  },
  (error) => {
    NProgress.done();
    let message = error.message || "请求失败";
    if (error.response && error.response.data) {
      const { data } = error.response;
      message = data.msg;
    }
    Toast.show({
      content: message.msg || "请求失败",
      icon: "fail",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default instance;
