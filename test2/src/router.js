import { createMemoryHistory, createRouter } from "vue-router";

import Home from "./components/Home.vue";
import List from "./components/List.vue";
import User from "./components/User.vue";
import Detail from "./components/Detail.vue";
import Comment from "./components/Comment.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/list", component: List },
    { path: "/user", component: User },
    {
        path: "/detail/:postid",
        component: Detail,
        children: [
            { path: "comment", component: Comment },
            { path: "user", component: User },
        ],
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
