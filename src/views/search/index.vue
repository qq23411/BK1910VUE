<template>
    <div class="searchwrap">
        <div class="searchheader">
            <label for="">
                <input type="text" placeholder="如:logo设计">
            </label>
            <router-link
             to="../homepage"
             tag="span"
            >取消</router-link>
        </div>
        <div class="searchmain">
            <div class="searchhot">
                <div class="searchnew">
                    最近搜索
                </div>
                <span class="searchspan">
                   <a href="">山东LOGO</a> 
                </span>
            </div>
            <div class="searchremen">
                <div class="searchnew">
                    热门搜索
                </div>
                 <span  
                 class="searchspan"
                 v-for="(item,index) in searchlist"
                 :key="index"
                 >
                   <a href="">{{item}}</a> 
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { search_hot } from "../../api/search"
export default {
     name:"Search",
      async created(){
        let data4 = await search_hot();
        this.searchlist = data4.data;
      },
       data(){
        return{
            searchlist:[],
          
        }
    },
}
</script>

<style>
/*searchwrap*/
.searchwrap{
     width:7.5rem;
    height:100%;
    
}
.searchheader{
    width:7.5rem;
    height: .88rem;
    margin-left: .3rem;
    margin-top: .12rem;
    position: relative;
    border-bottom: 1px solid gray
}
.searchheader label{
    display: block;
    width: 5.765rem;
    height: .64rem;
    background: rgb(244, 244, 244);
    padding-left: .2rem;
    margin: auto 0;
     
}
.searchheader label input{
    display: block;
    width: 4.565rem;
    height: .48rem;
    padding: 0.1rem .5rem 0 .56rem;
    border: none;
    font-size: .36rem;
    background: rgb(244, 244, 244);
    
}
.searchheader span{
    font-size: .36rem;
    font-weight: bolder;
    position: absolute;
    left: 6.17rem;top:.03rem;
}

/* searchmain */
.searchmain{
    width: 6.9rem;
    height:8rem;
    margin: 0 auto;
}
.searchhot{
    width: 6.9rem;
    height:1.98rem;
    padding: .44rem .3rem 0;
}
.searchnew{
    height: .54rem;
     margin-bottom: .2rem;
     font-weight: bolder;
     font-size: .28rem;
}
.searchspan{
    display: block;
    height:.56rem;
    border: 2px solid gray;
    line-height: .56rem;
    text-align: center;
     font-size: .28rem;
     float: left;
     margin: 0 .24rem .24rem 0;
     border-radius: .1rem;
}
.searchspan a{
    margin: 0 .26rem;
}
.searchremen{
    width:100%rem;
    height:auto;
    padding: .44rem .3rem 0;
}

</style>
