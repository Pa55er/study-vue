<script>
import Logo from "./Logo.vue";

export default {
    name: "Header",
    components: { Logo },
};
</script>

<template>
    <h1><Logo /></h1>
</template>

<style scoped>
h1 {
    position: fixed;
    top: 0;
    margin: 0 auto;
    max-width: 400px;
    width: calc(100% - 2rem);
    z-index: 1000;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    background-color: #eaeaea;
}
</style>
