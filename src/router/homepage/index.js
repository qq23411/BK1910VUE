export default {
    path:"/homepage",
    component:()=>import("../../views/homepage/index.vue"),
    name:"首页",
    meta:{
        tabBar:true,
        auto:false
    }
}