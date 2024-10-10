<script>
import Container from "./components/Container.vue";
import Header from "./components/Header.vue";
// import posts from "./assets/data.js";
import axios from "axios";

export default {
    name: "App",
    components: { Header, Container },
    data() {
        return {
            posts: [],
        };
    },
    methods: {
        async fetchPost() {
            try {
                const response = await axios.get(
                    "http://localhost:3000/posts",
                    {
                        params: {
                            _page: 1,
                            _limit: 3,
                        },
                    }
                );
                this.posts = response.data;
            } catch (error) {
                console.dir(error);
            }
        },
    },
    mounted() {
        this.fetchPost();
    },
};
</script>

<template>
    <div>
        <Header />
        <Container :posts="posts" />
    </div>
</template>

<style scoped></style>
