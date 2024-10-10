<script>
export default {
    name: "Detail",
    props: ["blogData"],
    computed: {
        currentPost() {
            return this.blogData.find(
                (post) => post.id === this.$route.params.postid
            );
        },
    },
    mounted() {
        console.log(this.$route.params.postid);
    },
};
</script>

<template>
    <div>
        <h1>Detail</h1>
        <div v-if="currentPost">
            <p>{{ currentPost.title }}</p>
            <p>{{ currentPost.content }}</p>
            <p>{{ currentPost.userId }}</p>
            <p>{{ currentPost.date }}</p>
            <p>{{ currentPost.hits }}</p>

            <router-link to="/list">리스트로 돌아가기</router-link>
            <router-link :to="`/detail/${currentPost.id}/user`"
                >사용자 정보보기</router-link
            >
            <router-link :to="`/detail/${currentPost.id}/comment`"
                >댓글 리스트 보기</router-link
            >

            <router-view :blogData="blogData"></router-view>
        </div>
        <div v-else>
            <p>포스트가 없습니다.</p>
        </div>
    </div>
</template>

<style scoped></style>
