<script>
export default {
    name: "Post",
    props: { post: Object },
};
</script>

<template>
    <article class="post">
        <div class="post-header">
            <div class="profile">
                <img :src="post.userImage" :alt="post.name" />
            </div>
            <span class="profile-name">{{ post.name }}</span>
        </div>
        <div class="post-body">
            <img :src="post.postImage" :alt="post.content" />
        </div>
        <div class="post-content">
            <p>{{ post.likes }}</p>
            <p>{{ post.content }}</p>
            <p class="date">{{ post.date }}</p>
        </div>
    </article>
</template>

<style scoped>
.post {
    width: 100%;
    border-bottom: 1px dotted lightgray;
}
.post-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
}
.profile {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
}
.profile img {
    width: 100%;
    object-fit: cover;
}
.profile-name {
    font-size: 14px;
}

.post-body {
    overflow: hidden;
}
.post-body img {
    width: 100%;
    object-fit: cover;
}
.post-content {
    padding: 1rem;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}
.date {
    font-size: 11px;
    color: grey;
}
</style>
