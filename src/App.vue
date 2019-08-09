<template>
  <div id="app">
    <router-view></router-view>
    <TabBar v-if="$route.meta.tabBar"/>
    <!-- <Loading/> -->
  </div>
</template>

<script>

import TabBar from "common/tabBar"
// import Loading from "./lib/loading/index.js"
  //接口测试
// import http from "utils/http";
export default {
  name:"App",
  components:{
    TabBar,
    // Loading
  },
  
  //接口测试
  // created(){
  //   http("get","/java-api/share/homeData").then((data)=>{
  //   })
  // }
}
</script>

<style lang="scss">

</style>
