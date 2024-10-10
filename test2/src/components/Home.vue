<script>
export default {
    name: "Home",
    props: {
        test: {
            type: Object,
        },
    },
};
</script>

<template>
    <div>
        <h1>Home</h1>
        <p>{{ test }}</p>
    </div>
</template>

<style scoped></style>
