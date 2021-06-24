<template lang="">
    <div>
        <img :src="product.image" class="room-img" alt="">        
        <!-- <h4 @click="modal = true; index = i">{{ product.title }}</h4> -->
        <h4>{{product.title}}</h4>
        <p>{{ product.price }} 만원</p>
    </div>
</template>
<script>
export default {    
    props : {
        product : Object
    }
}
</script>
<style lang="">
    
</style>