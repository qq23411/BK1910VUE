export default {
    path:"/search",
    component:()=>import("../../views/search/index.vue"),
    name:"search",
    meta:{
        tabBar:false,
        auto:false
    }
}