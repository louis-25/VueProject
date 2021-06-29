<template>  

  <blogHeader/>

  <div v-for="blog in blogData" :key="blog">
    <List :title="blog.title" :date="blog.date" :content="blog.content"/>
  </div>

</template>

<script>
import List from './components/List.vue'
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
    List,
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
