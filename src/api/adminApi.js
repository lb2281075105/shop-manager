import ajax from "./index.js";

// 1. 登录
export const checkLogin = (username, password)=> ajax('/api/auth/admin/login', {username, password}, 'post')

// 2. 退出登录
export const checkLogout = ()=> ajax('/api/auth/admin/logout')
