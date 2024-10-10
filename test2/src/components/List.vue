<script>
export default {
    name: "List",
    props: ["blogData"],
};
</script>

<template>
    <div>
        <h1>List</h1>
        <ul class="list-group">
            <li
                class="list-group-item"
                v-for="post in blogData"
                :key="post.id"
                @click="$router.push(`/detail/${post.id}`)"
            >
                {{ post.title }}
            </li>
        </ul>
    </div>
</template>

<style scoped></style>
