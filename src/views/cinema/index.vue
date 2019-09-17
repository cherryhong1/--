<template>
  <div id="main">
    <Header title="喵喵影院"></Header>
    <div id="content">
      <div class="cinema_menu">
        <router-link to="/cinema/clist" tag="div">全城</router-link>
        <router-link to="/cinema/band" tag="div">品牌</router-link>
        <router-link to="/cinema/trait" tag="div">特色</router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <TabBar></TabBar>
  </div>
</template>
<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
export default {
  name: "Cinema",
  components: {
    Header,
    TabBar
  }
};
</script>
<style lang="scss" scoped>
#content {
  margin-top: 50px;
  width: 100%;
  height: 45px;
}
.cinema_menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  line-height: 45px;
}
.router-link-active{
  color: aqua;
  border-bottom: 1px solid aquamarine;
  font-size: 18px;
  font-weight: bolder;
  
}
</style>