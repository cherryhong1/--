<template>
    <header id="header">
        <h1>{{title}}</h1>
    </header>
</template>
<script>
export default {
    name:'Header',
    props:{
        title:{
            type:String,
            default:'喵喵影院'
        }
    }
}
</script>
<style lang="scss" scoped>
    h1{
        text-align: center;
        font-size: 36px;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 50px;
        background: hotpink;

    }
</style>