<template lang="">
    <div class="black-bg" v-if="modal == true">
        <div class="white-bg">
            <img :src=oneroom[index].image style="width:100%" alt="">
            <h4>{{oneroom[index].title}}</h4>
            <p>{{oneroom[index].content}}</p>      
            <p>가격 : {{oneroom[index].price}} 만원</p>
            <button @click="$emit('closeModal')">닫기</button>
        </div>
    </div>
</template>
<script>

export default {
    name:'Modal',
    props : {
        index : Number,
        modal : Boolean,
        oneroom : Array
    },
    data(){
        return {            

        }
        
    }
}
</script>
<style lang="">


</style>