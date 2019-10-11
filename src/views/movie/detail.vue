<template lang="">
    <div class='detailContent'>
        <Header title="影片详情">
           <i><</i>
        </Header>
        <div class='movieDetail'> 影片详情457890</div>
       

    </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  name: "Detail",
  components:{
      Header
  }
};
</script>
<style lang="scss" scoped>
.detailContent {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  background: #fff;
}
.movieDetail{
    margin-top: 100px;
    text-align: center;
}
</style>