import http from "../utils/http.js"
//新人福利
export const homepage_newman_api = ()=>http("get","/java-api/share/homeData")
//
export const homeoffice_api = (homeofficedata)=>http("get","/java-api/yx/indexData",homeofficedata={})
//热搜
export const homeoftenscr_api = (params)=>http("get","/api/cmsapi/hotSearch",params={})

//更多
export const newmore_api = () =>http("post","/java-api/share/list")

// export {
//     homepage_newman_api,
//     homeoftenscr_api
// }
   

    
 