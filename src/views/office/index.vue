<template>
  <div class="officewrap">
    <img
      src="https://tianpeng.zbjimg.com/tianpeng/task/社区88.png/origine/af1ebcbe-5db6-4e3b-a351-a243955fa6fa"
    />
    <div class="officecity">
      <img src="http://bgl.zbjimg.com/bgl%2Fbjclound%2Fcommunity-1.png%2Forigine%2F1e621401-7ead-4444-87c7-f84e48da52d7?imageMogr2/auto-orient/strip/quality/90" >
      <img src="http://bgl.zbjimg.com/bgl%2Fbjclound%2Fcommunity-22.png%2Forigine%2F4d20706b-72af-4f89-aa65-1ce0e96175ad?imageMogr2/auto-orient/strip/quality/90" >
      <img src="http://bgl.zbjimg.com/bgl%2Fbjclound%2Fcommunity-5.png%2Forigine%2F86d88693-102f-4cc2-b5b5-40c37f6a7847?imageMogr2/auto-orient/strip/quality/90" >
      <img src="http://bgl.zbjimg.com/bgl%2Fbjclound%2Fcommunity-4.png%2Forigine%2F7458bfbb-ca74-437d-89ce-c184d448cb93?imageMogr2/auto-orient/strip/quality/90" >
      <img src="http://bgl.zbjimg.com/bgl%2Fbjclound%2Fcommunity-all.png%2Forigine%2F956c1834-dedd-4b71-9f7d-0c9cfdeee11e?imageMogr2/auto-orient/strip/quality/90" >
    </div>
    <div class="officeheader">
      <div class="officescroll">
        <OfficeSliceShow/>
      </div>
      <div class="officeadress">
        <span>全部</span>
        <span>北京</span>
        <span>上海</span>
        <span>广东</span>
        <span>重庆</span>
        <span>河南</span>
        <span>四川</span>
        <span>山东</span>
        <span>湖北</span>
        <span>安徽</span>
        <span>江苏</span>
        <span>湖南</span>
        <span>辽宁</span>
        <span>甘肃</span>
        <span>广西</span>
      </div>
      <div class="officelist">
          <img src="https://zworkapi.zbjimg.com/zbjwork/mobile/休息区.jpg/origine/48933af1-af58-459c-8152-bef4b7706ba8" >
            <p class="officelistp1">北京中关村社区<span>仅剩 <span>24</span> 个工位</span></p>
            <p class="officelistp2">北京市海淀区中关村E世界C座5层</p>
      </div>
      
      <div class="officelist">
          <img src="https://zworkapi.zbjimg.com/zbjwork/mobile/休息区.jpg/origine/48933af1-af58-459c-8152-bef4b7706ba8" >
            <p class="officelistp1">北京中关村社区<span>仅剩 <span>24</span> 个工位</span></p>
            <p class="officelistp2">北京市海淀区中关村E世界C座5层</p>
      </div>
      <div class="officelist">
          <img src="https://zworkapi.zbjimg.com/zbjwork/mobile/休息区.jpg/origine/48933af1-af58-459c-8152-bef4b7706ba8" >
            <p class="officelistp1">北京中关村社区<span>仅剩 <span>24</span> 个工位</span></p>
            <p class="officelistp2">北京市海淀区中关村E世界C座5层</p>
      </div>

      <div class="officelist">
          <img src="https://zworkapi.zbjimg.com/zbjwork/mobile/休息区.jpg/origine/48933af1-af58-459c-8152-bef4b7706ba8" >
            <p class="officelistp1">北京中关村社区<span>仅剩 <span>24</span> 个工位</span></p>
            <p class="officelistp2">北京市海淀区中关村E世界C座5层</p>
      </div>

      <div class="officelist">
          <img src="https://zworkapi.zbjimg.com/zbjwork/mobile/休息区.jpg/origine/48933af1-af58-459c-8152-bef4b7706ba8" >
            <p class="officelistp1">北京中关村社区<span>仅剩 <span>24</span> 个工位</span></p>
            <p class="officelistp2">北京市海淀区中关村E世界C座5层</p>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
import OfficeSliceShow from "../../common/officeslideshow"
// import {officecity_api}  from "../../api/office"
// import http from "../../utils/http"
export default {
  name: "Office",
  components:{
     OfficeSliceShow,
    },
  
};
</script>

<style>
html,body{ overflow: auto;}
.officewrap {
  width: 100%;
  height: auto;
  position: relative;
}
.officecity {
  width: 6.9rem;
  height: 1.7rem;
  background: #ffffff;
  position: absolute;
  left: 0.3rem;
  top: 3.45rem;
  box-shadow: 0 3px 8px 1px hsla(0, 0%, 89%, 0.55);
  white-space: nowrap;
  overflow: auto;
  display: flex;
}
.officecity img{
  width: 1.4rem;
  height: 1.4rem;
  float: left;
  margin-left:.2rem;
  margin-top: .15rem;
}
/* officeheader */
.officeheader {
  width: 6.9rem;
  height: auto;
  margin: 1.2rem auto 0;
}
.officescroll {
  width: 6.9rem;
  height: 1.48rem;
}
.officeadress{
  width: 6.9rem;
  height: 0.9rem;
  white-space: nowrap;
  display: flex;
overflow: auto;
}
.officeadress span{
    height: .9rem;
    color: #666666;
    font-size: .28rem;
    margin-right:.4rem;
    line-height: .9rem
}
/* officelist */
.officelist{
    width: 6.9rem;
    height: 5.2rem;
}
.officelist>img{
    width: 6.9rem;
    height:3.88rem;
    margin-bottom: .3rem;
}
.officelistp1{
    padding: 0 2.2rem 0 .2rem;
    color: #333;
    font-size:.3rem;
    font-weight: 800;
    line-height: .3rem;
    white-space: nowrap;
    overflow: hidden;
    margin: .2rem 0;
    position: relative;
    
}
.officelistp1>span{
    font-size:.24rem;
    color: #999;
    position: absolute;
    top: 0;
    right: 15px;    
}
.officelistp1>span>span{
    color: #ff6900;
}
.officelistp2{
    padding: 0 .2rem;
    color: #666;
    font-size:.24rem;
    line-height:.24rem;
    margin-bottom:.28rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
       
</style>
