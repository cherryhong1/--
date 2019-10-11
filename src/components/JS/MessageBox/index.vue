<template >
  <div class="messageBox">
    <h2>{{title}}</h2>
    <p>是否切换到当前城市：<span>{{content}}</span></p>
    <div class="btn">
      <div class="cancel" @touchstart='handleCancel'>{{cancel}}</div>
      <div class="yes" @touchstart='handleYes'>{{yes}}</div>
    </div>
  </div>
</template>
<script>
export default {
    name:'MessageBox'
};
</script>
<style  lang="scss" scoped>
.messageBox{
    position: absolute;
    left: 50%;
    top:50%;
    margin-left: -120px;
    margin-top: -70px;
    width: 240px;
    height: 140px;
    border: 1px solid #eeeeee;
    background: #dfdfdf;
    box-shadow: 3px 3px 3px 3px #344332;
    border-radius: 10px;
}
.messageBox h2{
    text-align: center;
    line-height: 50px;
}
.messageBox p{
    text-align: center;
    line-height: 30px;
    margin-bottom: 10px;
}
.messageBox p span{
    color:#b4590e;
    font-weight: bold;
}
.messageBox .btn{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.messageBox .btn div{
    width: 80px;
    line-height: 30px;
    background: #c6d351;
    text-align: center;
    border-radius: 10px;
    color:#fff;
}
.messageBox .btn div.yes{
    background: #55d193;
}
</style>