<template >
  <div class="detailContent slide-enter-active">
    <Header title="影片详情">
      <i @click="handleToBack">返回</i>
    </Header>
    <Loading v-if="isLoading"></Loading>
    <div v-else class="moiveContent">
      <div class="movieMain">
        <div class="bgBlur" :style="{backgroundImage:'url('+detailMovie.albumImg+')'}"></div>
        <div class="fengmian">
          <img :src="detailMovie.albumImg || detailMovie.img" alt />
        </div>

        <div class="movieNew">
          <h3>{{detailMovie.nm}}</h3>
          <p>{{detailMovie.enm}}</p>
          <p>类型：{{detailMovie.cat}}</p>
          <p>导演：{{detailMovie.dir}}</p>
          <p>{{detailMovie.ver}}</p>

          <p>{{detailMovie.pubDesc}}</p>
        </div>
      </div>
      <div class="desc">
        <span>剧情介绍：</span>
        {{detailMovie.dra}}
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in detailMovie.photos" :key="index">
            <img :src="detailMovie.albumImg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  name: "Detail",
  components: {
    Header
  },
  data() {
    return {
      detailMovie: [],
      isLoading: true
    };
  },
  props: ["id"],
  methods: {
    handleToBack() {
      console.log("a");
      this.$router.back();
    }
  },
  mounted() {
    this.axios.get("/api/detailmovie?movieId=" + this.id).then(res => {
      if (res.data.msg === "ok") {
        this.detailMovie = res.data.data.detailMovie;
        this.isLoading = false;
        this.$nextTick(() => {
          var mySwiper = new Swiper(".swiper-container", {
            autoplay: true, //可选选项，自动滑动
            loop: true,
            effect: "coverflow",
            slidesPerView: 3,
            centeredSlides: true,
            coverflowEffect: {
              rotate: 30,
              stretch: 10,
              depth: 60,
              modifier: 2,
              slideShadows: true
            }
          });
        });
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.detailContent {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  background: #fff;
  z-index: 100;
}
.slide-enter-active {
  animation: 0.2s slideMove;
}
@keyframes slideMove {
  0% {
    transform: translateX((100%));
  }
  100% {
    transform: translateX(0);
  }
}
.movieDetail {
  margin-top: 100px;
  text-align: center;
}
i {
  line-height: 100px;
  color: #fff;
  position: absolute;
  left: 10px;
  top: -25px;
  z-index: 100;
}
header {
  position: relative;
}
.movieMain {
  margin-top: 50px;
  padding-top: 10px;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  background: #474953;
  color: #fff;
  position: relative;
  padding-bottom: 20px;
}
.bgBlur {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
//   background: 0 40%;
 filter: blur(65px);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
}

.fengmian {
  width: 100px;
}
.fengmian img {
  width: 100%;
}
.desc {
  padding: 5px;
  text-indent: 2em;
}
.desc span {
  color: #474953;
  font-weight: bold;
}
.swiper-slide {
  display: inline-block;
  width: 100px !important;
}
.swiper-slide img {
  width: 90%;
}
</style>