<template>
    <div class="wrapper" ref='wrapper'>
        <slot></slot>
    </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
    name:'Scroller',
    data() {
        return {
            scroll:'',
        }
    },
    props:{
       handlerToScroll: {
           type:Function,
           default:function(){}
       },
       handlerToTouchedEnd:{
           type:Function,
           default:function () {
               
           }
       }
    },
    mounted() {
        var scroll = new BScroll(this.$refs.wrapper, {
            tap: true,
            probeType: 1
          });
          this.scroll = scroll
          scroll.on("scroll", (pos) => {
            this.handlerToScroll(pos)
          });
          scroll.on("touchEnd", (pos) => {
            this.handlerToTouchedEnd(pos)
          })
    },
    methods: {
        scrollTo:function (y) {
            this.scroll.scrollTo(0,y)
        }
    },
}
</script>
<style lang="scss" scoped>
.wrapper{
    height: 100%;

}
</style>