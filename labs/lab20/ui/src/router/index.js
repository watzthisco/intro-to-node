import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [{
        name: "home",
        path: "/",
        component: () =>import("@/components/Home"),
    },
    {
        name: "login",
        path: "/login",
        component: () => import("@/components/Login")
    },
    {
        name: "register",
        path: "/register",
        component: () => import("@/components/Register")
    }
    ]
});