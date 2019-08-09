import Vue from "vue"
import VueRouter from "vue-router"
import activity from "./activity/index"
import homepage from "./homepage/index"
import mine from "./mine/index"
import needs from "./needs/index"
import office from "./office/index"
import city from "./city/index"
import search from "./search/index"
import newmore from "./homepage/newmore/index"
Vue.use(VueRouter)


export default new VueRouter({
    routes:[
        {
            path:"/",
            redirect:"/homepage"
        },
        activity,
        homepage,
        mine,
        needs,
        office,
        city,
        search,
        newmore
    ]
})