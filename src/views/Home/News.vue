<script setup>

</script>

<template>
  <div class="News">
    <div class="newsLeft">
      <img src="../../assets/image/2.jpg" alt="">
      <ul>
        <li><a href="">第一条</a></li>
        <li><a href="">第一条</a></li>
        <li><a href="">第一条</a></li>
        <li><a href="">第一条</a></li>
      </ul>
    </div>
    <div class="newsMiddle" />
    <div class="newsRight" />

  </div>
</template>

<style scoped>
.News {
  width: 100%;
  height: 690px;
  display: flex;
  justify-content: space-between;
}
.newsLeft {
  width: 20%;
  height: 100%;
  border: 1px solid black;
  margin-left: 4%;
  img{
    transition: transform 0.5s ease-in-out;
    width: 100%;
    height: 200px;
  }
  img:hover {
    transform: scale(1.2);
  }
}
.newsMiddle {
  width: 50%;
  height: 100%;
  border: 1px solid black;
}
.newsRight {
  width: 20%;
  height: 100%;
  border: 1px solid black;
  margin-right: 4%;
}
</style>
