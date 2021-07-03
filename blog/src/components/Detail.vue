<template lang="">
    {{$route.params.id}}
    <div>
        <h4>상세페이지</h4>
        <h5>{{blogData[$route.params.id].title}}</h5>
        <p>{{blogData[$route.params.id].content}}</p>
    </div>
</template>
<script>
export default {
    props:{
        blogData : Object
    }
}
</script>
<style lang="">
    
</style>