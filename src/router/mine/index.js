export default {
    path:"/mine",
    component:()=>import("../../views/mine/index.vue"),
    name:"mine",
    meta:{
        tabBar:true,
        auto:true
    }
}