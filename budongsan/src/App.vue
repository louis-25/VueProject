<template>
  <div class="menu">
    <a v-for="item in menu" :key="item">{{ item }}</a>
  </div>  

  <Discount/> 
  
  <button @click="priceSort">오름차순 정렬</button>
  <button @click="priceSort2">내림차순 정렬</button>
  <button @click="priceSort3">이름순 정렬</button>
  <button @click="sortBack">되돌리기</button>
  
  <transition name="fade">  
    <Modal @closeModal="modal=false" :oneroom="oneroom" :index="index" :modal="modal"/>
  </transition>
  
  <Card @openModal="modal=true; index=$event;" :product="room"
  v-for="room in oneroom" :key="room"/>  

</template>

<script>
import data from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue'

export default {
  name: 'App',
  data(){
    return {                        
      index: 0, //클릭한 위치            
      modal: false,
      menu : ['Home', 'Shop', 'About'],      
      oneroom : data,
      oneroomOriginal : [...data]
    }
  },
  components: {
    Discount,
    Modal,
    Card
  },
  methods : {
    priceSort(){ //가격 오름차순
      this.oneroom.sort(function(a, b){
        return a.price - b.price
      })
    },
    priceSort2(){ //가격 내림차순
      this.oneroom.sort(function(a, b){
        return b.price - a.price
      })
    },
    priceSort3(){ //문자열 정렬 (오름차순)
      this.oneroom.sort(function(a, b){
        if(a.title < b.title) return -1;
        if(a.title > b.title) return 1;
        if(a.title === b.title) return 0;
      })
    },
    sortBack(){
      this.oneroom = [...this.oneroomOriginal]
    }
  }
}
</script>

<style>
.fade-enter-from { /*시작*/
  opacity: 0;
} 
.fade-enter-active { /*애니메이션*/
  transition : all 0.5s
}
.fade-enter-to { /*끝*/
  opacity: 1;
} 

.fade-leave-from { /*시작*/
  opacity: 1;
} 
.fade-leave-active { /*애니메이션*/
  transition : all 0.5s
}
.fade-leave-to { /*끝*/
  opacity: 0;
} 

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

.black-bg { 
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    padding: 20px;
}

.white-bg {
    width: 100%;
    background: white;
    border-radius: 8px;
    padding: 20px;
}
</style>
