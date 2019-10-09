<template>
  <div id="main">
    <Header title="喵喵电影"></Header>
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
        {{$store.state.city.nm}}
        </router-link>
        
          <router-link tag="div"  class="hot_item " to="/movie/playing">正在热映</router-link>
          <router-link tag="div" class="hot_item" to="/movie/coming">即将上映</router-link>
      
        <router-link tag="div" class="search_entry" to='/movie/search'>
          <p>🔍</p>
        </router-link>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import HelloWorld from "@/components/HelloWorld";
export default {
  name: "Movie",
  components: {
    Header,
    TabBar,
    HelloWorld
  }
};
</script>
<style lang="scss" scoped>
// 使用scoped，样式只会在当前的内容里生效，不会污染其他的内容
#content{
  width: 100%;
  height: 45px; 
  margin-top: 50px;
}
.movie_menu{
  display: flex;
  width: 100%;
  line-height: 45px;
  justify-content: space-around;  
  flex-direction: row;
}
.router-link-active{
  color:rgb(63, 219, 42);
  font-size: 18px;
  font-weight: bolder;
  border-bottom: 1px solid yellowgreen;
}
</style>