<template>
  <div class="city_body" ref="scroll">
      <div>
        <!--热门城市-->
        <div class="hot_city">
          <div class="hot_title">热门城市</div>
          <div class="hot_city_list">
            <div class="hot_city_name" v-for="(item,index) in hotCitys" :key="index">{{item.JXNAME}}</div>
          </div>
        </div>
        <!--城市列表-->
        <div class="city_list" ref="list">
          <div class="city_list_item" v-for="(item,index) in number" :key="index">
            <div class="city_title_letter">{{item}}</div>
            <div class="city_list_name">
              <router-link
                class="city_list_name_item"
                v-for="(child,idx) in fcitysList"
                :key="idx"
                tag="div"
                to="../homepage"
                @tap="handleTo(child)"
              >{{child.CITYNAME}}</router-link>
            </div>
          </div>
        </div>
      </div>
    <!--城市列表下标-->
    <div class="city_list_index">
      <div
        class="index_item"
        v-for="(item1,index1) in number"
        :key="index1"
        @tap="handleIndexTo(index)"
      >{{item1}}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState,mapMutations} from "vuex";
import { citylist_api } from "../../api/city";
export default {
  name: "CityList",
  async created() {
    let data = await citylist_api();
    this.fcitysList = data.data.fcitys;
    this.hotCitys = data.data.hotCitys;

    this.handleGetCityAction();
  },
  data() {
    return {
      fcitysList: [],
      hotCitys: [],
      number: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ]
    };
  },
  methods:{
   ...mapActions({
      handleGetCityAction:"city/handleGetCityAction"
    })
  }
 
};
</script>

<style>
html,body{
    height: auto;
    display: flex;
    overflow: auto;
}
.city_body {
  background: #ebebeb;
  height: auto;
  
}

/*热门城市*/
.hot_title,
.city_title_letter {
  line-height: 0.6rem;
  padding-left: 0.26rem;
  font-size: 0.28rem;
}

.hot_city_list,
.city_list_name {
  width: 96%;
  background: #f5f5f5;
  padding-bottom: 0.16rem;
  padding-right: 0.6rem;
  display: flex;
  flex-wrap: wrap;
}
.hot_city_name {
  margin-top: 0.3rem;
  margin-left: 0.26rem;
  width: 1.9rem;
  height: 0.66rem;
  background: #fff;
  text-align: center;
  line-height: 0.66rem;
  font-size: 0.28rem;
  border: 2px solid #e6e6e6;
}

.city_list > div {
  width: 100%;
}
.city_list_name_item {
  line-height: 0.9rem;
  margin-left: 0.26rem;
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
  font-size: 0.28rem;
}

/*城市列表下标*/
.city_list_index {
  position: fixed;
  right: 0;
  top: 1rem;
}
.city_list_index > div {
  padding: 0.1rem 0.05rem;
  font-size: 0.25rem;
}
</style>