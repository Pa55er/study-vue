<script>
export default {
    name: "Comment",
    props: ["blogData"],
    computed: {
        currentPost() {
            return this.blogData.find(
                (post) => post.id === this.$route.params.postid
            );
        },
    },
};
</script>

<template>
    <h1>Comment</h1>
    <p>{{ currentPost.userId }}</p>
</template>

<style scoped></style>
