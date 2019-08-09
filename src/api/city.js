import http from "../utils/http.js"
//地区
export const citylist_api = ()=>http("get","/server/content/city/list.json")
//
