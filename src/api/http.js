import axios from "axios";
import { showNotfy } from "../utils/index";
const http = axios.create({
  baseURL: "",
  timeout: 10000,
});


// 拦截器的添加
http.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    showNotfy()
    return Promise.reject(err);
  }
);

//响应拦截器
http.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    showNotfy('Connection error')
    
    return Promise.reject(err);
  }
);
export default http;