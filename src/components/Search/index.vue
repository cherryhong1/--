<template>
  <div class="search_body">
    <input type="text" placeholder="关键字" v-model="keyword" />

    <p class="search_result" v-if="movieNum||cinemaNum">
      搜索到
      <span>{{movieNum}}部电影</span>
      <span v-if="cinemaNum">{{cinemaNum}}家影院</span>
    </p>
    <p class="search_result" v-else>抱歉，暂时没有搜索到相关的电影和影院</p>
    <ul class="movie_main" v-if="movieList.length">
      <li v-for="item in movieList" :key="item.id">
        <div class="show_pic">
          <img :src="item.img|setWH('78.130')" alt />
        </div>
        <div class="info_list">
          <h2>{{item.nm}} {{item.sc}}</h2>
          <p v-if="item.dir">导演：{{item.dir}}</p>
          <p v-if="item.star">主演：{{item.star}}</p>
          <p v-if="item.cat">{{item.cat}}---{{item.ver}}</p>
          <p v-if="item.pubDesc">{{item.pubDesc}}</p>
          <p v-if="item.wish">{{item.wish}}人想看</p>
        </div>
        <div class="btn_mall">预售</div>
      </li>
    </ul>

    <ul class="cinema_main" v-if="cinemaList.length"></ul>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      movieList: [],
      movieNum: 0,
      cinemaNum: 0,
      cinemaList: [],
      keyword: ""
    };
  },
  mounted() {},
  methods: {
    cancelRequest() {
      if (typeof this.source === "function") {
        this.source("终止请求");
      }
    }
  },
  watch: {
    keyword(newVal) {
      console.log(newVal);

      //   clearTimeout ()
      //   setTimeout()
      var that = this;
      this.cancelRequest();
      this.axios
        .get("/api/searchList?cityId=1&kw=" + newVal, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
          },
          cancelToken: new this.axios.CancelToken(function executor(c) {
            that.source = c;
          })
        })
        .then(res => {
          if (res.data.msg === "ok" && res.data.data !== "") {
            console.log(res.data.data);
            if (res.data.data && res.data.data.movies) {
              var movieList = res.data.data.movies.list;
                 that.movieList = movieList;
              that.movieNum = res.data.data.movies.total;
            }

            if (res.data.data && res.data.data.cinemaList) {
              var cinemaList = res.data.data.cinemas.list;
              that.cinemaList = cinemaList;
               that.cinemaNum = res.data.data.cinemas.total;
            }

           
          }
        })
        .catch(err => {
          if (that.axios.isCancel(err)) {
            console.log("Rquest canceled", err.message); //请求如果被取消，这里是返回取消的message
          } else {
            //handle error
            console.log(err);
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.movie_main {
  font-size: 14px;
  margin-left: 10px;
  margin-right: 10px;
}
.movie_main li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(211, 205, 205);
}
.movie_main li p {
  margin-bottom: 5px;
}
.movie_main li p span {
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