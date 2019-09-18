<template>
    <div>
        城市
    </div>
</template>
<script>
export default {
    name:'City',
    data() {
        return {
            cityList:[],
            hotList:[],
        }
    },
    mounted() {
        this.axios.get('/api/cityList').then((res)=>{
           
            var msg =res.data.msg;
            if (msg === 'ok') {
                var cities = res.data.data.cities;
                // console.log(cities.length)
               var {cityList,hotList} = this.formatCityList(cities)
               this.cityList = cityList;
                this.hotList = hotList;

            }
        })
    },

    methods: {
        //cityList =[{index:"A",list:[{id:1,nm:"beijing",isHot:1}]}]
        formatCityList(cities){
            var cityList = [];
            var hotList = [];
            for (let index = 0; index < cities.length; index++) {
                if(cities[index].isHot===1){
                    hotList.push(cities[index])
                }
                
            }
           
            for (let i = 0; i < cities.length; i++) {
                var firstLetter = cities[i].py.substring(0,1).toUpperCase();
                if(tocom(firstLetter)){
                    cityList.push({index:firstLetter,list:[{id:cities[i].id,nm:cities[i].nm}]})
                }else{
                    for (let k = 0; k < cityList.length; k++) {
                        if(cityList[k].index === firstLetter){
                            cityList[k].list.push({id:cities[i].id,nm:cities[i].nm})
                        }
                        
                    }

                }
            }
            cityList.sort((n1,n2)=>{
                if(n1.index > n2.index){
                    return 1
                }else if(n1.index < n2.index){
                     return -1
                }
            })
            function tocom(firstLetter) {
                for (let j = 0; j < cityList.length; j++) {
                    if(firstLetter === cityList[j].index){
                        return false;
                    }
                    
                }
                return true;

              
              
            }
            
            return {cityList,hotList}
           
        }

    },
}
</script>
<style lang="scss" scoped>
    
</style>