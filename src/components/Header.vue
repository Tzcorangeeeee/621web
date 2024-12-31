<script setup>

</script>

<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/image/logo.png" alt="">
    </div>
    <div class="headerBox">
      <div><a href="">首頁</a></div>
      <div class="mi"><a href="">
        概況
        <div class="down">
          <ul>
            <li><a href="">建立时间</a></li>
            <li><a href="">成员概况</a></li>
            <li><a href="">学校坐标</a></li>
            <li><a href="">学校附近</a></li>
            <li><a href="">学校内部</a></li>
            <li />
          </ul>
        </div>
      </a></div>
      <div class="qi"><a href="">
        走近621
        <div class="down">
          <ul>
            <li>建立时间</li>
            <li>成员概况</li>
            <li>学校坐标</li>
          </ul>
        </div>
      </a></div>
      <div class="bu"><a href="">
        旅行
        <div class="down">
          <ul>
            <li>珠海</li>
            <li>广州</li>
            <li>南京</li>
            <li>西安</li>
            <li>待去</li>
          </ul>
        </div>
      </a></div>
      <div class="miao"><a href="">
        酒局
        <div class="down">
          <ul>
            <li><a href="">建立时间</a> </li>
            <li><a href="">成员概况</a> </li>
            <li>学校坐标</li>
          </ul>
        </div>
      </a></div>
      <div class="wu"><a href="">
        游戏
        <div class="down">
          <ul>
            <li>建立时间</li>
            <li>成员概况</li>
            <li>学校坐标</li>
          </ul>
        </div>
      </a></div>
      <div />
    </div>
    <div class="lang"><a href="">English</a></div>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
.logo img{
  width: 200px;
  height: 100px;
  position: fixed;
  left: 120px;
}
.header {
  width: 100%;
  height: 100px;
  background: linear-gradient(#000000,	#00000000);
  opacity: 1.0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  .headerBox{
    width: 50%;
    height: 100%;
    margin-left: 400px;
    display: flex;
    justify-content: space-between;
    font-size: 25px;
    padding-top: 30px;
    position: fixed;
  }
  .headerBox a{
    text-decoration: none;
    color: white;
  }
  .headerBox a:hover{
    color: orange;
  }
  .down{
    width: 200px;
    height: 309px;
    background-color: white;
    position: fixed;
    left: 440px;
    top: 100px;
    display: none;
    color: black;
    border-radius: 12px;
    overflow: hidden;
    font-size: 20px;
  }
  .mi:hover .down{
    display: block;
    border: 5px solid orange;
  }
  .mi{
    height: 70px;
  }
  .qi:hover .down{
    display: block;
    position: fixed;
    top: 100px;
    left: 580px;
    border: 5px solid deeppink;
    line-height: 60px;
  }
  .qi{
    height: 70px;
  }
  .bu:hover .down{
    display: block;
    position: fixed;
    top: 100px;
    left: 720px;
    border: 5px solid yellow;
    line-height: 60px;
  }
  .bu{
    height: 70px;
  }
  .miao:hover .down{
    display: block;
    position: fixed;
    top: 100px;
    left: 840px;
    border: 5px solid greenyellow;
    line-height: 60px;
  }
  .miao{
    height: 70px;
  }
  .wu:hover .down{
    display: block;
    position: fixed;
    top: 100px;
    left: 960px;
    border: 5px solid darkblue;
    line-height: 60px;
  }
  .wu{
    height: 70px;
  }
  .down ul a{
    list-style: none;
    color: black;
    line-height: 60px;
    text-align: center;
  }
  .down li:hover{
    background-color: grey;
  }
}
.lang{
  position: fixed;
  right: 150px;
  top: 30px;
  font-size: 30px;
  a{
    text-decoration: none;
    color: white;
  }
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
  line-height: 50px;
}
.el-icon-arrow-down {
  font-size: 12px;
}

</style>
