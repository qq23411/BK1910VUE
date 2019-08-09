<template>
  <div class="swiper-container" ref="swiperContainer">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(img1,indeximg) in banner" :key="indeximg">
        <img :src="img1" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>


<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "Slideshow",
  data() {
    return {
      banner: []
    };
  },
  created() {
    setTimeout(() => {
      let arr = [
        "https://tianpeng.zbjimg.com/tianpeng/task/首页头部幻灯wap150.jpg/origine/844100d3-b870-420c-8287-28774536c9cb",
        "https://tianpeng.zbjimg.com/tianpeng/task/690x150.jpg/origine/abe91b6c-3b43-4b70-91d4-640dee3e0738",
        "https://tianpeng.zbjimg.com/tianpeng/task/690x150.jpg/origine/aa982f7a-768d-4e61-8695-ffa659c715bb",
        "https://tianpeng.zbjimg.com/tianpeng/task/触屏首页.png/origine/2f5ddeb9-e097-4339-b47b-6e7e1e2461ed"
      ];
      this.banner = arr;
    }, 1000);
  },
  watch: {
    banner() {
      this.$nextTick(() => {
        var mySwiper = new Swiper(this.$refs.swiperContainer, {
          loop: true, // 循环模式选项
          autoplay:{
              disableOnInteraction:false,
          },
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          },
        });
      });
    }
  },
  mounted() {}
};
</script>

<style>


</style>
