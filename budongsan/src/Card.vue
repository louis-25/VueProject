<template lang="">
    <div>
        <img :src="product.image" class="room-img" alt="">        
        <h4 @click="$emit('openModal', product.id)">{{ product.title }}</h4>        
        <p>{{ product.id }}</p>
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