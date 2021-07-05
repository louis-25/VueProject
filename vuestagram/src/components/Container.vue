<template>
    <div >
        <Post :post=postData[i] v-for="(post,i) in postData" :key="post"/>
    </div>
</template>
<script>
import Post from './Post.vue'

export default {
    components: {
        Post,
    },
    props: {
        postData : Object,
    },
    
}
</script>
<style></style>
