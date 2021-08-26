/*
 本地存储
*/
// 1. 存
export function setLocalData(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
}

// 2. 取
export function getLocalData(key){
    const value = window.localStorage.getItem(key)
    try {
        return JSON.parse(window.localStorage.getItem(key))
    }catch (e) {
      return value
    }
}

// 3. 删除
export function removeLocalData(key) {
    window.localStorage.removeItem(key)
}