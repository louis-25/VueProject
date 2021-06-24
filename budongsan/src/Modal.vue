<template lang="">
    <div class="black-bg" v-if="modal == true">
        <div class="white-bg">
            <img :src=oneroom[index].image style="width:100%" alt="">
            <h4>{{oneroom[index].title}}</h4>
            <p>{{oneroom[index].content}}</p>      
            <input id="inputMonth" @input="month = $event.target.value">
            <p>{{month}}개월 선택함 : {{oneroom[index].price * month}} 원</p>
            
            
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
            month : 1
        }
        
    },
    watch : {
        month(a){ // month라는 데이터가 변할 때마다 실행            
            if(a >= 13) {
                alert('13이상 입력하시 마세요');
                this.month = 1;
                document.getElementById("inputMonth").value="";
            }

            if(isNaN(a)) { //숫자가 아닐경우
                alert('숫자만 입력해주세요');
                this.month = 1;
                document.getElementById("inputMonth").value="";
            }
            
            let b = document.getElementById("inputMonth").value;
            if(b.search(/\s/) != -1) {
                alert("공백은 입력할 수 없습니다");
                this.month = 1;
                document.getElementById("inputMonth").value="";
            }
            
        }
    }
}
</script>
<style lang="">


</style>