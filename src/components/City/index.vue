<template>
  <div>
    <Scroller ref="citylist">
      <div>
        <div class="city_list">
          <div class="city_hot">
            <h2>热门城市</h2>
            <ul class="cl">
              <li class="hotCity" v-for="item in hotList" :key="item.id" @tap='handleToCity(item.nm,item.id)'>{{item.nm}}</li>
            </ul>
          </div>
          <div class="city_sort" ref="city_sort">
            <div v-for="item in cityList" :key="item.index">
              <h3>{{item.index}}</h3>
              <ul>
                <li class="city_name" v-for="city in item.list" :key="city.id" @tap='handleToCity(city.nm,city.id)'>{{city.nm}}</li>
              </ul>
            </div>
          </div>
          <div class="city_index">
            <ul>
              <li
                v-for="(item,index) in cityList"
                :key="item.index"
                @touchstart="handleToList(index)"
              >{{item.index}}</li>
            </ul>
          </div>
        </div>
      </div>
    </Scroller>
  </div>
</template>
<script>
export default {
  name: "City",
  data() {
    return {
      cityList: [],
      hotList: []
    };
  },
  mounted() {
      if(window.localStorage.getItem('cityList')&&window.localStorage.getItem('hotList')){
         this.cityList = JSON.parse(window.localStorage.getItem('cityList'));
          this.hotList = JSON.parse(window.localStorage.getItem('hotList'));
      }else{
          this.axios.get("/api/cityList").then(res => {
        var msg = res.data.msg;
        if (msg === "ok") {
          var cities = res.data.data.cities;
          // console.log(cities.length)
          var { cityList, hotList } = this.formatCityList(cities);
          this.cityList = cityList;
          this.hotList = hotList;
          window.localStorage.setItem('cityList',JSON.stringify(cityList))
          window.localStorage.setItem('hotList',JSON.stringify(hotList))
        }
      });
      }
    
  },

  methods: {
    //cityList =[{index:"A",list:[{id:1,nm:"beijing",isHot:1}]}]
    formatCityList(cities) {
      var cityList = [];
      var hotList = [];
      for (let index = 0; index < cities.length; index++) {
        if (cities[index].isHot === 1) {
          hotList.push(cities[index]);
        }
      }

      for (let i = 0; i < cities.length; i++) {
        var firstLetter = cities[i].py.substring(0, 1).toUpperCase();
        if (tocom(firstLetter)) {
          cityList.push({
            index: firstLetter,
            list: [{ id: cities[i].id, nm: cities[i].nm }]
          });
        } else {
          for (let k = 0; k < cityList.length; k++) {
            if (cityList[k].index === firstLetter) {
              cityList[k].list.push({ id: cities[i].id, nm: cities[i].nm });
            }
          }
        }
      }
      cityList.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1;
        } else if (n1.index < n2.index) {
          return -1;
        }
      });
      function tocom(firstLetter) {
        for (let j = 0; j < cityList.length; j++) {
          if (firstLetter === cityList[j].index) {
            return false;
          }
        }
        return true;
      }

      return { cityList, hotList };
    },
    handleToList(index) {
      var h3 = this.$refs.city_sort.getElementsByTagName("h3");
      console.log(h3[index]);
      console.log(this.$refs.city_sort);
      console.log(h3[index].offsetTop);
      // this.$refs.city_sort.parentNode.scrollTop = h3[index].offsetTop;
        this.$refs.citylis.scrollTo(h3[index].offsetTop);
    },
    handleToCity(nm,id){
      console.log(nm,id)
      this.$store.commit('city/CTIY_INF0',{nm,id})
      window.localStorage.setItem('nowNm',nm);
      window.localStorage.setItem('nowId',id)
      this.$router.push('movie/playing')
    }
  }
};
</script>
<style lang="scss" scoped>
.hotCity {
  float: left;
  width: 23%;
  text-align: center;
  border: 1px solid #454545;
  margin-left: 1%;
  margin-top: 10px;
  background: #c3b7da;
  color: antiquewhite;
  line-height: 30px;
}
h3 {
  height: 30px;
  background: #534555;
}
.city_sort {
  margin-left: 10px;
}
</style>