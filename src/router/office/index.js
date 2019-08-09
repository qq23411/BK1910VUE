export default {
    path:"/office",
    component:()=>import("../../views/office/index.vue"),
    name:"office",
    meta:{
        tabBar:true,
        auto:false
    }
}