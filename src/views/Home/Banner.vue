<script setup>
</script>

<template>
  <div class="banner">
    <el-carousel indicator-position="outside" height="690px">
      <el-carousel-item v-for="item in 5" :key="item" />
    </el-carousel>
  </div>
</template>

<style scoped>
.banner {
  width: 100%;
  border: 1px solid black;
  position: relative;
  top: -60px;
  height: 690px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(1) {
  background-image: url("../../assets/image/1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.el-carousel__item:nth-child(2) {
  background-image: url("../../assets/image/2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.el-carousel__item:nth-child(3) {
  background-image: url("../../assets/image/3.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
}
.el-carousel__item:nth-child(4) {
  background-image: url("../../assets/image/4.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.el-carousel__item:nth-child(5) {
  background-image: url("../../assets/image/5.webp");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
