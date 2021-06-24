<template lang="">
    <div class="black-bg" v-if="modal == true">
        <div class="white-bg">
            <img :src=oneroom[index].image style="width:100%" alt="">
            <h4>{{oneroom[index].title}}</h4>
            <p>{{oneroom[index].content}}</p>      
            <p>가격 : {{oneroom[index].price}} 만원</p>
            <!-- <button @click="modal = false">닫기</button> -->
        </div>
    </div>
</template>
<script>
import oneroom from './assets/oneroom.js';

export default {
    name:'Modal',
    props : {
        index : Number,
        modal : Boolean
    },
    data(){
        return {            
            oneroom,            
        }
        
    }
}
</script>
<style lang="">

/* .black-bg { 
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
} */
</style>