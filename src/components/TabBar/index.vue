<template>
    <footer id='footer'>
        <ul>
            <router-link tag="li" to="/movie"><p>电影</p></router-link>
            <router-link tag="li" to="/cinema"><p>影院</p></router-link>
            <router-link tag="li" to="/mine"><p>我的</p></router-link>
        </ul>
    </footer>
</template>
<script>
export default {
    name:'TabBar',
}
</script>
<style lang="scss" scoped>
#footer,ul{
   width: 100%;
   background: rgb(133, 80, 80);
   color: #fff;
}
#footer{
    position: fixed;
    left: 0;
    bottom: 0;
    height: 50px;
    border-top: 1px solid grey;
}
ul{
    display: flex;
}

#footer,ul li.router-link-active{
    color:hotpink;
}
li{
   flex: 1;
   align-items: center;
   text-align: center;
   height: 50px;
   font-size: 16px;
    color:#fff;
}
li  p{
    line-height: 50px;
}
</style>