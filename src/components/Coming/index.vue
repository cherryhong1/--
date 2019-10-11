<template>
  <div class="movie_body">
    <Loading v-if="isLoading"></Loading>
    <Scroller v-else>
      <ul>
        <li v-for="item in comingMovie" :key="item.id">
          <div class="show_pic">
            <img :src="item.img|setWH('78.130')" alt />
          </div>
          <div class="info_list">
            <h2>{{item.nm}} {{item.version}}</h2>
            <p v-if="item.star">主演：{{item.star}}</p>
            <p v-if="item.showInfo">{{item.showInfo}}</p>
            <p v-if="item.wish">{{item.wish}}人想看</p>
          </div>
          <div class="btn_mall">预售</div>
        </li>
      </ul>
    </Scroller>
  </div>
</template>
<script>
export default {
  name: "Coming",
  data() {
    return {
      comingMovie: [],
      isLoading: true,
      preCity:-1,
    };
  },
  activated() {
    var cityId = this.$store.state.city.id;
    if (this.preCity === cityId) {
      return false
    }
    this.isLoading = true;
    console.log(cityId)
    this.axios.get("/api/movieComingList?cityId="+cityId).then(res => {
      if (res.data.msg === "ok") {
        var comingMovie = res.data.data.comingList;
        this.comingMovie = comingMovie;
        this.isLoading = false;
        this.preCity = cityId
      }
    });
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