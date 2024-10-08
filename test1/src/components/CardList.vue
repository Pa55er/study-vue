<script>
export default {
    name: "CardList",
    props: ["product", "index", "count"],
    methods: {
        openModal() {
            this.$emit("open-modal", this.index);
        },
    },
};
</script>

<template>
    <div @click="openModal" class="list">
        <p>{{ product.title }}</p>
        <!-- <p>{{ count[i] }}</p>
        <button @click="counter(i)">카운터증가</button> -->
    </div>
</template>

<style scoped>
.list {
    cursor: pointer;
    padding: 0.5rem;
    border-bottom: 1px dotted #333;
}
.list:hover {
    background-color: #f0f0f0;
}
</style>
