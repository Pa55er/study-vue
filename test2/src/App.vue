<script>
import blogData from "./assets/blog.js";

export default {
    name: "App",
    data() {
        return {
            blogData,
            test: { a: 1, b: 2 },
            isMenuOpen: false,
        };
    },
    methods: {
        closeMenu() {
            this.isMenuOpen = false;
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
    watch: {
        $route() {
            this.closeMenu();
        },
    },
};
</script>

<template>
    <h1>App</h1>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/" @click="closeMenu"
                >로고</router-link
            >
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                :aria-expanded="isMenuOpen"
                aria-label="Toggle navigation"
                @click="toggleMenu"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="collapse navbar-collapse"
                :class="{ show: isMenuOpen }"
                id="navbarNav"
            >
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link
                            class="nav-link active"
                            aria-current="page"
                            to="/"
                            >Home</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/list"
                            >List</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/user"
                            >User</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <router-view :blogData="blogData" :test="test"></router-view>
</template>

<style scoped></style>
