<template >
    <div>
        <input type="text" name='username' id='username' placeholder="请输入用户名">
        <input type="password" name="password" id="pwd" placeholder="请输入密码">
        <input type="submit" value="登录">
        <div class="other">
            <div class="register">
                立即注册
            </div>
            <div class="findPwd">
                找回密码
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Login',


}
</script>
<style lang="scss" scoped>
input{
    width: 100%;
    margin-bottom: 10px;
    height: 40px;
    line-height: 40px;
    text-indent: 1em;   
    font-size: 16px;
    border: none;
    outline: none;
    border-top: 1px solid #543252;
    border-bottom: 1px solid #543252;
}
input[type="text"]{
   margin-top: 60px;
}
input[type="submit"]{
    width: 90%;
    background: #43a350;
    color:azure;
    text-align: center;
    margin-left: 5%;
    outline: none;
    border: none;
}
.other{
    width: 96%;
    margin-left: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color:#d63980;
}
</style>