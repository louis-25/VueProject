<template>  
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step==1" @click="step++">Next</li>
      <li v-if="step==2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <h3>{{$store.state.name}}</h3>
  <h3>{{$store.state.age}}</h3>
  <button @click="$store.commit('plus')">+</button>
  <Container @write="작성한글 = $event" :postData="postData" :step="step" :uploadImage="uploadImage"/>  
  <button @click="more">더보기</button>
  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- <div v-if="tabButton == 0">내용0</div>
  <div v-if="tabButton == 1">내용1</div>
  <div v-if="tabButton == 2">내용2</div>
  <button @click="tabButton = 0">버튼0</button>
  <button @click="tabButton = 1">버튼1</button>
  <button @click="tabButton = 2">버튼2</button>   -->

</template>

<script>
import Container from './components/Container.vue'
import postData from './assets/postData.js'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Container
  },
  data() {
    return{
      postData,
      count: 0,
      step: 0,
      uploadImage: "",
      작성한글 : '',
      filter: 'perpetua'
    }
  },
  mounted(){
    this.emitter.on('filter', (a)=>{
      this.filter = a;
    })
  },
  methods: {
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.count}.json`)
      .then((result)=>{ //result는 get요청으로 받아온 데이터
        //요청성공시 실행될 코드        
        this.postData.push(result.data);
        this.count++;
      })
    },
    upload(e){
      let file = e.target.files;
      console.log(file[0])
      this.uploadImage = URL.createObjectURL(file[0])
      this.step++;
    },
    publish(){
      let data = {
        name : 'donghyeon2',        
        likes: 45,
        liked: false,
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.uploadImage,
        content: this.작성한글,
        date: "May 16",
        filter: this.filter
      };
      this.postData.unshift(data);
      this.step = 0;
    }
  }
  
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
