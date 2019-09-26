<template >
    <div class="cinema_body">
        <ul v-if="cinemasList.length">
            <li v-for="item in cinemasList" :key="item.id">
                <div >
                    <span class='cinema_name'>{{item.nm}}</span>
                    <span v-if="item.sellPrice"><span class="price">{{item.sellPrice}}</span>元起</span>
                </div>
                <div class="address">
                    <span v-if="item.addr">{{item.addr}}</span>
                    <span v-if="item.distance">{{item.distance}}</span>
                </div>
                <div class="card" v-if="item.tag" >
                    <div v-for="(num,key) in item.tag" :key="key" 
                    ><span v-if='num===1'> {{key |formatCard(key)}}</span>
                   
                    </div>
                   
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'Clist',
    data() {
        return {
            cinemasList:[],

        }
    },
    mounted() {
        this.axios.get('/api/cinemaList?cityId=10').then((res)=>{
            if(res.data.msg === 'ok'){
                var cinemasList = res.data.data.cinemas;
                this.cinemasList = cinemasList;
            }
        })
    },
    filters:{
        formatCard(key){
            var card = [{
                key:'allowRefund',value:'退费'
            },{
                key:'buyout',value:'转让'
            },{
                key:'cityCardTag',value:'城市卡'
            },{
                key:'deal',value:'折扣'
            },{
                key:'endorse',value:'退费2'
            },{
                key:'sell',value:'买卖'
            },{
                key:'snack',value:'小吃'
            },{
                key:'vipTag',value:'折扣卡 '
            }]
           for (let i = 0; i < card.length; i++) {
               if(card[i].key === key){
                   return card[i].value
               };
               
           }
        }
    }


}
</script>
<style lang="scss" scoped>
li{
   padding: 10px ;
   margin:10px 10px 0;
   border-bottom: 1px solid #eeeeee;
}
.cinema_name{
    font-weight: 900;
    color: #6dddd7;
    font-size: 18px
}
</style>