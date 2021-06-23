<template>

  <div class="black-bg" v-if="modal == true">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button @click="modal = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="메뉴 in 메뉴들" :key="메뉴">{{ 메뉴 }}</a>
  </div>
  
  <div v-for="product in products" :key="product">
    <img :src="product.image" class="room-img" alt="">    
    <h4 @click="modal = true">{{ product.title }}</h4>
    <p>{{ product.price }} 만원</p>
    <button @click="product.신고수++">허위매물 신고버튼</button> <span>신고수 : {{product.신고수}}</span>
  </div>

</template>

<script>

export default {
  name: 'App',
  data(){
    return {            
      modal : false,
      메뉴들 : ['Home', 'Shop', 'About'],
      products : [
        {title : '역삼동원룸', price : 80, 신고수 : 0, image : require('./assets/room0.jpg')}, 
        {title : '천호동원룸', price : 90, 신고수 : 0, image : require('./assets/room1.jpg')}, 
        {title : '마포구원룸', price : 100, 신고수 : 0, image : require('./assets/room2.jpg')}
        ],
    }
  },
  components: {
    
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
