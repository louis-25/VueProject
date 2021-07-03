import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'

const routes = [
    {
        path: "/list",
        component: List,
    },
    {
        path: "/detail/:id", //url 파라미터 문법
        component: Detail,
    },
    {
        path: "/",
        component: Home,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 