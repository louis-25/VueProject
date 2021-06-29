<template lang="">
    <div>
        <h5>{{title}}</h5>
        <p>{{date}}</p>
        <p>{{content}}</p>
    </div>    
</template>
<script>
export default {
    name: 'List',
    props:{
        title : String,
        content : String,
        date : Number
    }
}
</script>
<style lang="">
    
</style>