<template>
  <div class="movie_body" ref="movie_body">
    <Loading v-if="isLoading"></Loading>
      <Scroller v-else :handlerToScroll="handlerToScroll" :handlerToTouchedEnd="handlerToTouchedEnd">
        <ul>
          <li>{{pullname}}</li>
          <li v-for="item in movieList" :key="item.id">
            <div class="show_pic" @tap="handleToDetail">
              <img :src="item.img|setWH('78.130')" alt />
            </div>
            <div class="info_list">
              <h2>{{item.nm}} {{item.version}}</h2>

              <p>
                观众评分
                <span>{{item.sc}}</span>
              </p>
              <p>主演：{{item.star}}</p>
              <p>{{item.showInfo}}</p>
            </div>
            <div class="btn_mall">购票</div>
          </li>
        </ul>
      </Scroller>
    
  </div>
</template>
<script>
export default {
  name: "Playing",
  data() {
    return {
      movieList: [],
      pullname: "",
      isLoading: true
    };
  },
  mounted() {
    this.axios.get("/api/movieOnInfoList?cityId=10").then(res => {
      if (res.data.msg === "ok") {
        var movieList = res.data.data.movieList;
        this.movieList = movieList;
         this.isLoading = false;
      }
    });
  },
  methods: {
    handleToDetail() {
      console.log("handleToDetail");
    },
    handlerToScroll(pos) {
      this.pullname = "正在更新中";
    },
    handlerToTouchedEnd(pos) {
      this.pullname = "数据更新完成";
      this.axios.get("/api/movieOnInfoList?cityId=11").then(res => {
        if (res.data.msg === "ok") {
          var movieList = res.data.data.movieList;
          console.log(movieList);

          setTimeout(() => {
            this.movieList = movieList;
            this.pullname = "";
          }, 100);
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.movie_body {
  font-size: 14px;
  margin-left: 10px;
  margin-right: 10px;
}
.movie_body li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(211, 205, 205);
}
.movie_body li p {
  margin-bottom: 5px;
}
.movie_body li p span {
  color: #c50b0b;
  font-weight: bolder;
}
.btn_mall {
  background: #db9327;
  width: 50px;
  text-align: center;
  color: floralwhite;
  margin: 30px 5px 0;
  height: 40px;
  line-height: 40px;
  vertical-align: middle;
}

.info_list {
  margin-left: 10px;
}
</style>