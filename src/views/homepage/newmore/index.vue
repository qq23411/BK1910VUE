<template>
    <div class="newmorewrap">
        <div class="newmoretop">
            <router-link
             to="../../homepage"
                tag="span" 
            >&lt;</router-link>
            新用户专属福利
        </div>
        <div class="newmoreimg">
            <img src="https://bgl.zbjimg.com/bgl/bjclound/%E7%94%A8%E4%BA%8E%E8%A7%A6%E5%B1%8F%E6%96%B0%E7%94%A8%E6%88%B7%E7%A6%8F%E5%88%A9%E9%A1%B5%E9%9D%A2%E5%A4%B4%E9%83%A8.jpg/origine/61b855ed-974b-425e-8087-3bbba4e23d4d?imageMogr2/auto-orient/strip/quality/90" alt="">
        </div>
        <div class="newmoremain">
            <ul class="newmainlist">
                <li class="newmainlistli" v-for="(itemlist,indexlist) in newmorelist" :key="indexlist">
                    <div class="newmainlistliheader" >
                        <img :src="itemlist.imgUrl" >
                        <div class="coupon">
                            <p>{{itemlist.title}}</p>
                            <p>{{itemlist.content}}</p>
                            <div class="coupon2">
                                <p></p>
                                <span>已抢1407</span>
                                <span>剩余102</span>
                            </div>
                        </div>
                        <div class="couponbottom">
                            <span>福利价￥<span>{{itemlist.realPrice}}</span></span>
                            <span>马上抢&gt;</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {newmore_api} from "../../../api/homepage"
export default {
    name:"Newmore",
    data(){
        return{
            newmorelist:[]
        }
    },
    async created(){
         let data7 = await newmore_api();
        this.newmorelist = data7.data.shareInfoList;
        console.log(this.newmorelist)

    },
    
}
</script>

<style>
html,body{
    widows: 7.5rem;;
    height: 100%;
    overflow-y: auto;
}
.newmorewrap{
    width: 7.5rem;
    height: auto;
    overflow-y: auto;
}
.newmoretop{
    width: 7.5rem;
    height:.88rem;
    text-align: center;
    font-size: .36rem;
    line-height: .88rem;
    position: relative;
}
.newmoretop span{
    position: absolute;
    left: .3rem;
}
.newmoreimg{
    height: 4.85rem;
    width:7.5rem;
}
.newmoremain{
     width:6.9rem;
    height:auto;
    margin: 0 auto;
}
.newmainlist{
    width: 6.9rem;
    height: auto;
}
.newmainlistli{
    width: 100%;
    height:2.94rem;
    box-sizing: border-box;
    margin-bottom:.1rem;
    padding-bottom:.4rem;
    background: #fff;
    box-shadow: 0 -9px 19px -3px rgba(181,181,181,.68);
    border-radius: 4px;

}
.newmainlistliheader{
    width: 100%;
    height:1.96rem;
    margin: 0 0 .1rem;
}
.newmainlistliheader img{
    width:1.7rem;
    height:1.96rem;
    margin: 0 .26rem ;
    padding-top: .26rem;
    float: left;
}
.coupon{
    width:4.68rem;
    height:1.7rem;
    float: left;
}
.coupon>p:nth-child(1){
    height: .48rem;
    margin: .22 0 .1rem;
    font-size: .35rem;
    color: #333333
}
.coupon>p:nth-child(2){
    color: #c3c3c3;
    font-size:.24rem;
    line-height: .36rem;
    overflow: hidden;
}
.coupon2{
    height:.44rem;
    line-height:.44rem;
    margin-top: .1rem;
}  
.coupon2 p:nth-child(1){
   display: inline-block;
    width: 105px;
    width: 28vw;
    margin-right: .53333333vw;
    height:.15rem;
    border-radius: 4px;
    background-color: #FFD8BC;
    overflow: hidden;
    position: relative;
    vertical-align: middle;
}
.coupon2 span:nth-child(2){
    display: inline-block;
    color: #999;
    font-size:.2rem;
    vertical-align: middle;
    margin-left: .3rem
}
.coupon2 span:nth-child(3){
    display: inline-block;
    color: #FF6900;
    font-size: .22rem;
    margin-right:.22rem;
    vertical-align: middle;
    margin-left: .3rem
}    
.couponbottom{
    float: left;
    width:6.9rem;
    height: .48rem;
    padding-left:2.14rem;
}
.couponbottom>span:nth-child(1){
    display: block;
    font-size:.32rem;
    color: #333;
    font-weight: 700;
    color: #ff6900;
    float: left;
}
.couponbottom>span:nth-child(2){
    display: block;
    width:1.5rem;
    height: .6rem;
    background: #ff6900;
    border-radius: .04rem;
    line-height: .6rem;
    float: right;
    margin-right:.22rem;
    margin-top: -.08rem;
    text-align: center;
    font-size:.26rem;
    color: #fff;
}
</style>

