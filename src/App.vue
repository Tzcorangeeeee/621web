<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import router from './router'

</script>

<template>
  <Header />
  <router-view />
  <Footer />
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
