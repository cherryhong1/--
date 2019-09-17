<template>
    <div id='main'>
        <Header title="喵喵电影"></Header>
        <HelloWorld> </HelloWorld>
          <TabBar></TabBar>
    </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import HelloWorld from '@/components/HelloWorld'
export default {
    name:'Movie',
    components:{
      Header,
      TabBar,
      HelloWorld
    }
}
</script>
<style lang="scss" scoped>
// 使用scoped，样式只会在当前的内容里生效，不会污染其他的内容
</style>