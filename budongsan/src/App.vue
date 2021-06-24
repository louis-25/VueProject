<template>
  <div class="menu">
    <a v-for="item in menu" :key="item">{{ item }}</a>
  </div>

  <!-- <Modal :index="index" :modal="modal"/> -->
  <Discount/>
  
  <div v-for="room in oneroom" :key="room">
    <Card :product="room"/>
  </div>

</template>

<script>
import oneroom from './assets/oneroom.js';
import Discount from './Discount.vue';
// import Modal from './Modal.vue';
import Card from './Card.vue'

export default {
  name: 'App',
  data(){
    return {                  
      index: 0, //클릭한 위치            
      modal: false,
      menu : ['Home', 'Shop', 'About'],      
      oneroom
    }
  },
  components: {
    Discount,
    // Modal,
    Card
  }
}
</script>

<style>
body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.discount {
    background: #eee;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
  list-style: none;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
