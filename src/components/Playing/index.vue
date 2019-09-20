<template>
  <div class="movie_body">
    <ul>
      <li v-for="item in movieList" :key="item.id">     
        <div class="show_pic">
            <img :src="item.img|setWH('78.130')" alt="">
        </div>
        <div class="info_list">
          <h2>{{item.nm}} {{item.version}}   
              
          </h2>
       
          <p>
            观众评分
            <span>{{item.sc}}</span>
          </p>
          <p>主演：{{item.star}}</p>
          <p>{{item.showInfo}}
          </p>
         
        </div>
         <div class="btn_mall">购票</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Playing",
  data() {
    return {
      movieList: []
    };
  },
  mounted() {
    this.axios.get("/api/movieOnInfoList?cityId=10").then(res => {
      if (res.data.msg === "ok") {
        var movieList = res.data.data.movieList;
        this.movieList = movieList;
      }
    });
  },

};
</script>
<style lang="scss" scoped>
.movie_body{
    font-size: 14px;
    margin-left: 10px;
    margin-right: 10px;
}
.movie_body li{
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgb(211, 205, 205);
}
.movie_body li p{
    margin-bottom: 5px;
}
.movie_body li p span{
    color: #c50b0b;
    font-weight: bolder;
}
.btn_mall{
   
    background: #db9327;
    width: 50px;
    text-align: center;
    color: floralwhite;
    margin: 30px 5px 0;
    height: 40px;
    line-height: 40px;
    vertical-align: middle;
}

.info_list{
    margin-left: 10px;
}
</style>