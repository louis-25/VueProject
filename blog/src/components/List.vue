<template lang="">
    <div v-for="blog in blogData" :key="blog">
        <h5>{{blog.title}}</h5>
        <p>{{blog.date}}</p>
        <p>{{blog.content}}</p>
    </div>    
</template>
<script>
export default {
    name: 'List',
    props:{
        blogData : Object
    }
}
</script>
<style lang="">
    
</style>