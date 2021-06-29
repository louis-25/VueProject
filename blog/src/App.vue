<template>  

  <blogHeader/>  

  <router-link to="/">Home</router-link>
  <router-link to="/list">리스트</router-link>
  <router-view :blogData="blogData"></router-view>
</template>

<script>
import blogHeader from './components/Header.vue'
import blogData from './assets/blog.js'

export default {
  name: 'App',
  data() {
    return {
      blogData      
    }
  },
  components: {    
    blogHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}
</style>
