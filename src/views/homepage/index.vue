<template>
    <div class="homepage">
        <div class="homepageheader">
            <ul class="headerul">
                <li><i class="iconfont">&#xe60d;</i>
                <router-link
                to="../city"
                class="movie_menu_city" 
                tag="span">北京</router-link>
                
                </li>
                <li class="li2">
                    <label for="">
                    <i class="iconfont">&#xe848;</i>
                    <router-link
                to="../search"
                class="movie_menu_city" 
                tag="input"  placeholder="logo设计">
                </router-link>
                    <span>搜一下</span>
                    </label>
                </li>
                <li><i class="iconfont">&#xf00d6;</i><span>分类</span></li>
            </ul>
        </div>
     <div class="scroll">
         <div class="hometop">
             
         </div>
        <div class="homeoftenscr">
            <span>热搜:</span>
            <div class="main">
                <span v-for="(item2,index2) in homeoftenscr" :key="index2">{{item2.keyword}}</span>
                
            </div>
        </div>
        <div class="homebanner">
            <Slideshow/>
        </div>
        <div class="workrange">
            <div class="workrangemain"> 
                <div><img src="https://tianpeng.zbjimg.com/tianpeng/task/品牌设计.png/origine/a8160499-b1ce-4791-b54a-9a62c6df5998"></div>
                <ul>
                    <li>LOGO设计</li>
                    <li>包装设计</li>
                    <li>宣传品设计</li>
                </ul>
            </div>
            <div class="workrangemain"> 
                <div><img src="https://tianpeng.zbjimg.com/tianpeng/task/营销推广.png/origine/6eff80ec-319f-4a32-b830-2b43f2835cab" alt=""></div>
                <ul>
                    <li>网络营销</li>
                    <li>网点代运营</li>
                    <li>营销策划</li>
                </ul>
            </div>
            <div class="workrangemain"> 
                <div><img src="https://tianpeng.zbjimg.com/tianpeng/task/it.png/origine/9f38e5c3-755c-40de-9b85-53bc6da71e33" alt=""></div>
                <ul>
                    <li>网页建设</li>
                    <li>网页开发</li>
                    <li>APP开发</li>
                </ul>
            </div>
        </div>
        <div class="allwork">
            <span><img src="https://tianpeng.zbjimg.com/tianpeng/task/知产.png/origine/6fc8d7be-c715-40a7-9d2f-6e227c108baf" > 知识产权</span>
            <span><img src="https://tianpeng.zbjimg.com/tianpeng/task/财税.png/origine/f76d1742-0431-43e4-a70d-7a8939c87927" alt=""> 工商财税</span>
            <span><img src="https://tianpeng.zbjimg.com/tianpeng/task/科技.png/origine/1ad20e2c-852a-4844-a84b-25fef85ef5e2" alt=""> 科技服务</span>
            <span><img src="https://tianpeng.zbjimg.com/tianpeng/task/装修.png/origine/4c2adb9c-046c-4270-851e-61c21872e810" alt=""> 装修服务</span>
            <span><img src="https://tianpeng.zbjimg.com/tianpeng/task/全部分类.png/origine/3f4077b5-04ee-40de-859a-fdee87ef5a25" alt=""> 全部服务</span>
        </div>
        <div class="homeimg">
            <img src="https://tianpeng.zbjimg.com/tianpeng/task/首页楼层.gif/origine/f7fb6e50-f8a9-4712-ad6a-8f02f1d01d7c" alt="">
        </div>
        <div class="homerecommend">
            <div>
                <h3>- 免费获取报价 官方推荐优质服务 -</h3>
                <div>
                    <label class="homelabel">
                        <span>我需要</span>
                        <input type="text" placeholder="如LOGO设计">
                    </label>
                </div>
                <div>
                    <label class="homelabel">
                        <span>手机号</span>
                        <input type="text" placeholder="信息保护中 ， 仅官方可见">
                    </label>
                </div>
                <button>马上为我推荐</button>
            </div>
        </div>
        <div class="newman">
            <div class="newmanheader">
                <div>
                    <p>新人专属福利</p>
                    <router-link
                    to="../homepage/newmore"
                    tag="a"
                    >更多 ></router-link>
                </div>
                <span>每天9:00定时更新</span>
            </div>
            <div class="homemain" v-for="(item,index) in homeList" :key="index">
                <div>
                    <img :src="item.imgUrl">
                    <div class="homemainmain">
                        <p>{{item.title}}}</p>
                        <p>{{item.content}}}</p>
                        <div class="homemaindiv">
                            <span class="homemainspan1"></span>
                            <span class="homemainspan2">已抢{{item.currentNumber}}个</span>
                            <span  class="homemainspan3">剩余{{item.limitNumber-item.currentNumber}}个</span>
                        </div>
                    </div>
                </div>
                <div class="homemainmain2">
                    <span>福利价:￥ {{item.realPrice}}</span>
                    <span>马上抢</span>
                </div>
            </div>
           
        </div>
        <div class="newman">
            <div class="newmanheader">
                <div>
                    <p>官方严选</p>
                </div>
                <span>品质保障/每天9:00和21：00点准时上新</span>
            </div>
            <div class="homemain" v-for="(item3,index3) in homeofficeList" :key="index3">
                <div class=" homeoffice">
                    <img :src="item3.coverImg" >
                    <div class="homemainmain">
                        <p>{{item3.yxProductName}}</p>
                        <p>{{item3.sellingPoints}}</p>
                        <span class="free">免费咨询</span>   
                    </div>
                </div>
            </div>
           
        </div>
        <div class="newman">
            <div class="newmanheader">
                <div>
                    <p>服务案例</p><a>更多 ></a>
                </div>
                <span>精选优质服务案例</span>
            </div>
            <div class="newman_suchimg">
                <img src="https://homesitetask.zbjimg.com/homesite/task/图片6.png/origine/0a611ea8-eba4-43c7-b595-ccd7d0b0305b" >
                <img src="https://homesitetask.zbjimg.com/homesite/task/14.jpg/origine/115d521a-a2f6-4cf7-9fe8-729608d8b034">
                <img src="//rms.zhubajie.com/resource/redirect?key=homesite%2Ftask%2F155418558.jpg%2Forigine%2F54de4fa6-de7a-4da7-a1c9-aaa8fd4ae863&s.w=800&s.h=483" alt="">
                <img src="//rms.zhubajie.com/resource/redirect?key=homesite%2Ftask%2F%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg%2Forigine%2F9c3b4cd7-4d5c-4706-adc7-4d679d00bca8&s.w=800&s.h=483" alt="">
            </div>
        </div>
        <div class="newman">
            <div class="newmanheader">
                <div>
                    <p>热门社区</p><a>更多 ></a>
                </div>
                <span>办公空调/生意机会/成长交流</span>
            </div>
            <div class="newman_lunbo">
                <img src="http://bgl.zbjimg.com/bgl%2Fbjclound%2Fcommunity-1.png%2Forigine%2F1e621401-7ead-4444-87c7-f84e48da52d7?imageMogr2/auto-orient/strip/quality/90" alt="">
                <img src="http://bgl.zbjimg.com/bgl%2Fbjclound%2Fcommunity-22.png%2Forigine%2F4d20706b-72af-4f89-aa65-1ce0e96175ad?imageMogr2/auto-orient/strip/quality/90" alt="">
                <img src="http://bgl.zbjimg.com/bgl%2Fbjclound%2Fcommunity-5.png%2Forigine%2F86d88693-102f-4cc2-b5b5-40c37f6a7847?imageMogr2/auto-orient/strip/quality/90" alt="">
                <img src="http://bgl.zbjimg.com/bgl%2Fbjclound%2Fcommunity-4.png%2Forigine%2F7458bfbb-ca74-437d-89ce-c184d448cb93?imageMogr2/auto-orient/strip/quality/90" alt="">
                <img src="http://bgl.zbjimg.com/bgl%2Fbjclound%2Fcommunity-all.png%2Forigine%2F956c1834-dedd-4b71-9f7d-0c9cfdeee11e?imageMogr2/auto-orient/strip/quality/90" alt="">

           </div>
        </div>
        <div class="homeend"></div>
      </div>
    </div>
</template>

<script>
import Swiper from "swiper"
import "swiper/dist/css/swiper.css"
import Slideshow from "../../common/slideshow"
import {homepage_newman_api , homeoftenscr_api , homeoffice_api} from "../../api/homepage"
// import http from "../../utils/http"
export default {
    name:"Homepage",
    data(){
        return{
            homeList:[],
            homeoftenscr:[],
            homeofficeList:[],
            // banner:[]
        }
    },
    components:{
     Slideshow,
    },
    async created(){
        let data6 = await homepage_newman_api();
            this.homeList = data6.data.shareInfoList;
        let params = await homeoftenscr_api();
            this.homeoftenscr=params.data.list;
        let homeofficedata = await homeoffice_api();
            this.homeofficeList=homeofficedata.data;
    //     homepage_newman_api().then((data)=>{
    //     this.homeList = data.data.shareInfoList;
    //     })
    //    http("get","/api/cmsapi/hotSearch").then((data)=>{
    //        this.homeoftenscr=data.data.list;
    //        console.log(this.homeoftenscr)
    //    })
    },
}
 
</script>

<style>
html,body{
    widows: 7.5rem;;
    height: 100%;
    overflow-y: auto;
}
/* header */
.homepage{
    width:6.9rem;
    height: 100%;
    margin: 0 .3rem;
}
.hometop{
     width: 100%;
    height: 0.90rem;
}
.homepageheader{
    width: 100%;
    height: 0.90rem;
    position: fixed;
    background: #ffffff;
}
.homepageheader ul{padding-top: 0.1rem}
.homepageheader ul li{
    float: left;
}
.headerul>li:nth-child(1) i , .headerul>li:nth-child(3) i{
    display: block;
    margin: 0 auto;
    font-size: 0.40rem;
}
.headerul>li:nth-child(2){
    width:5.36rem;
    background:#EEEEEE;
    padding: 0.1rem 0;
    margin:0  0.29rem;
    border-radius:8px;
    position: relative;
}
.headerul>li:nth-child(2) i{
    font-size: 0.40rem;
    line-height: 0.48rem;
}
.headerul>li:nth-child(2) input{
    width:4.08rem;
    height: 0.48rem;
    background:#EEEEEE;
    border: none;
    font-size: 0.30rem;
    padding: 0 0.5rem 0 0.56rem;
    
}
.headerul>li:nth-child(2) span{
    display: block;
    width: 1.14rem;
    height: 0.46rem;
    color: #ffffff;
    padding: 0 0.06rem;
    font-size: 0.26rem;
    background: #ff6830;
    position: absolute;
    left:4rem;top:0.14rem;
    border-radius:8px;
    line-height: 0.46rem;
    text-align: center;

}

.scroll{
    box-sizing: border-box;
    flex-direction: column;
    flex: 1;
    height: 100%; 
    width: 6.9rem;
}

/* hometopsearch */
.homeoftenscr{
    width:6.8rem;
    height:0.44rem;
    margin:0.14rem auto 0;
     color: #666666;
}
.homeoftenscr>span{
    font-size: 0.24rem;
    line-height:0.44rem;
    float: left;
}
.homeoftenscr>div{
    height:0.44rem;
    margin-left:0.60rem;
    white-space: nowrap;
    display: flex;
    overflow-x: auto;
}
.homeoftenscr>div>span{
    line-height:0.44rem;
    height:0.38rem;
    display: block;
    float: left;
    font-size: 0.24rem;
    background: #F5F5F5;
    padding: 0 0.2rem;
    border-radius: 0.12rem;
    margin-right: 0.14rem;
}

/* homebanner */
.homebanner{
    width: 6.9rem;
    height:1.5rem;
    margin-bottom:10px;
}

/* workrange */
.workrange{
    width:6.9rem;
    height:3.6rem;
}
.workrangemain{
    width:6.9rem;
    height:1.1rem;
    margin-bottom: 0.1rem;
}
.workrangemain div{
    width:1.85rem;
    height:1.1rem;
    margin-right: 0.1rem;
    float: left;
    line-height:1.1rem;
    text-align: center;
    border-radius: 0.1rem;
}
.workrangemain img{
    width: 1.66rem;
    height:1.1rem;
}
.workrangemain ul{
    width:4.95rem;
    height:1.1rem;
    background: #FDEFD7;
    float: left;
    border-radius: 0.1rem;
}
.workrangemain ul li{
    width:1.64rem;
    height:0.8rem;
    line-height:0.8rem;
    float: left;
    border-right:1px solid red;
    margin-top: 0.15rem;
    color: #FFBA3F;
    text-align: center;
}
.workrangemain ul li:nth-child(3){
    border:none;
}
/* allwork */
.allwork{
    width: 6.9rem;
    height: 1.04rem;
    margin: 0.34rem 0 0.04rem;
    display: flex;
    justify-content:space-between;
}
.allwork img{
    margin: 0 15px 0 15px;
}
.allwork>span{
    display: block;
    width: 0.96rem;
    height: 1.04rem;
    
}

.homeimg{
    margin-bottom: 0.2rem;
}
.homeimg>img{
    width: 6.9rem;
    height: 2.65rem;
}

/* homerecommend*/
.homerecommend{
    width: 6.9rem;
    height:3.9rem;
    margin: 0.3rem 0;
}
.homelabel{
    width: 100%;
    height:100%;
}
.homelabel>span{
    font-size:0.28rem;
    line-height:.74rem; 
}
.homelabel>input{
    width:4.04rem;
    height:.4rem;
    font-size:0.28rem;
    line-height:.74rem; 
    border: none;
    background:#F2F2F2; 
    /* padding-left: 40px; */
    text-indent: 40px;
}
.homerecommend>div{
    width: 6.3rem;
    height:3.3rem;
    margin: 0.3rem ;
}
.homerecommend>div h3{
    color: #333333;
    font-size: .34rem;
    margin: 0 0 .3rem;
    text-align: center;
}
.homerecommend>div div{
     width: 6.3rem;
    height:0.74rem;
    background:#f2f2f2;
    margin:0 0 0.1rem;
    padding: 0 0.26rem;
}
.homerecommend>div button{
     width: 6.3rem;
    height:0.7rem;
    background:linear-gradient(-47deg,#ff6830,#ff9c54);
    color: #ffffff;
    text-align: center;
    line-height: 0.7rem;
    font-size: 0.3rem;
    border-radius: 0.1rem;
    margin-top:.17rem; 
}

/* newman */
.newman{
    width: 6.9rem;
    height:auto;
    margin: 0.3rem 0 .6rem;
}
.newmanheader{
    width: 6.9rem;
    height:0.8rem;
    margin-bottom: .3rem;
}
.newman_suchimg{
  white-space: nowrap;
  overflow-x: scroll;
  display: flex;
  width: 6.9rem;
}
.newman_suchimg img{
    width: 5.48rem;
    height: 3.34rem;
    float: left;
    margin-right:.2rem;
}
.newmanheader>div{
    width: 6.9rem;
    height: 0.5rem;
    margin-bottom: 0.2rem;
    color: #333333;
    line-height: 0.5rem;
}
.newmanheader>div p{
    font-size: .36rem;
    float: left;
}
.newmanheader>div a{
    float: right;
    font-size: .26rem;
}
.newmanheader span{
     width: 6.9rem;
     font-size: .26rem;
}

.homemain{
    width: 6.9rem;
    margin-bottom:.4rem;
    padding-bottom:.2rem;
    background: #fff;
    box-shadow: 0 3px 8px 1px hsla(0,0%,89%,.55);
    border-radius: 3px;
    height: auto;
}
.homemain>div:nth-child(1),.homeoffice{
    width: 6.9rem;
    height: 2.06rem;
    margin-bottom: 0.1rem;
}  
.homemain>div:nth-child(1) img{
    display: inline-block;
    width: 1.7rem;
    height:1.7rem;
    margin: .36rem .22rem 0 .22rem;
}
.homemain>div:nth-child(2){
    width: 6.9rem;
    height:0.5rem;
    margin-left: 2.14rem;
} 
.homemainmain {
    width:4.76rem;
    height:2.06rem;
    float: right;
}
.newman .homeoffice{
    height:2.08rem;
    margin-bottom:.6rem;
}
.homemainmain p:nth-child(1){
    font-size:0.32rem;
    color: #333;
    font-weight: 700;
    height:.48rem;
    line-height:.48rem;
    margin-top:.22rem;
    margin-bottom: 5px;
    overflow: hidden;
    white-space: nowrap;
}
.homemainmain p:nth-child(2),.homemainspan2{
    color: #999;
    font-size:.24rem;
    height:.72rem;
    line-height:.36rem;
    display: -webkit-box;
    padding-right:.22rem;
    overflow: hidden;
}
.homemaindiv{
    height:.44rem;
    line-height:.44rem;
    margin-top:0.1rem;
}
.homemaindiv span{
    float: left;
}
.homemainspan1{
    width:2.1rem;
    height: .16rem;
    background:#ff6900;
    border-radius:.08rem;
    margin-top: 0.12rem;
} 
.homemainspan3{
    color: #ff6900;
    font-size:.22rem;
    margin-right:.1rem;
    vertical-align: middle;
} 
.homemainmain2 span:nth-child(1){
    font-size: .3rem;
    color: #FF6900;
    font-weight: bold;
}
.homemainmain2 span:nth-child(2),.free{
    width:1.18rem;
    height:.44rem;
    line-height:.44rem;
    background: #ff6830;
    border-radius: 8px;
    margin-right:.22rem;
    text-align: center;
    font-size:.26rem;
    color: #fff;
    margin-left: 2.1rem;
}
.free{
    margin-left:3.4rem;
}
.homemain .homeofficemain{
    width: 6.9rem;
    height:2.06rem;
    background: red;
}
.homeofficemain img{
     display: inline-block;
    width: 1.7rem;
    height:1.7rem;
    margin: .36rem .22rem 0 .22rem;
}
.newman_suchimg{
    width: 6.9rem;
    height: 3.34rem;
}
.newman_lunbo{
    width: 6.9rem;
    height: 2rem;
    white-space: nowrap;
    overflow: auto;
    display: flex;
}
.newman_lunbo img{
    width: 2rem;
    height: 2rem;
    margin-right: .2rem;
    float: left;
}

.homeend{
    width: 100%;
    height: 1rem;
    background: red;
}
</style>