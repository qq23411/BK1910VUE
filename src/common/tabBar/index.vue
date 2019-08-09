<template>
    <div id="footer">
        <ul>
            <router-link
            v-for="(item,index) in navs"
            :key="index"
            :to="item.path"
            tag="li"
            >
            <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.text}}</span>
            </router-link>
        </ul>
    </div>
</template>


<script>
export default {
    name:"TabBar",
    data(){
        return {
            navs:[
                {
                    icon:"&#xe620;",
                    text:"首页",
                    path:"/homepage"
                },
                {
                    icon:"&#xe609;",
                    text:"办公",
                    path:"/office"
                },
                {
                    icon:"&#xe691;",
                    text:"发需求",
                    path:"/needs"
                    
                },
                {
                    icon:"&#xe665;",
                    text:"活动",
                    path:"/activity"
                },
                {
                    icon:"&#xe66a;",
                    text:"我的",
                    path:"/mine"
                },
            ]
        }
    }
}
</script>

<style>
    #footer{
        width: 100%;
        height: 1rem;
        position: fixed;
        left: 0;bottom: 0;
        background: #ffffff;
        border-top: 1px solid #ccc;
    }
    #footer ul,#footer ul li{
        width: 100%;
        height: 100%;
    }
    #footer ul{
        display: flex;
    }
    #footer ul li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 0.3rem
    }
    #footer ul li i{
        font-size:0.4rem;
    }
    #footer ul .router-link-active{
        color: #c33;
    }
</style>
