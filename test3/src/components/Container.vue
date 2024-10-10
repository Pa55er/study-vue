<script>
import Post from "./Post.vue";

export default {
    name: "Container",
    components: { Post },
    props: { posts: Array },
};
</script>

<template>
    <section class="sec1">
        <h1 hidden>Container</h1>
        <Post v-for="post in posts" :key="post.postid" :post="post" />
    </section>
</template>

<style scoped>
.sec1 {
    padding-top: 50px;
}
</style>
