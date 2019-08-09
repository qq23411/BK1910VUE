import http from "../utils/http.js"

//热门搜索
export const search_hot = () =>http("get","/getHotWord/")