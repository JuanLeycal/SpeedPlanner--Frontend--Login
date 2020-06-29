import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { path: "/", alias: "/login", name: "login", component: () => import("./components/Login") },
        { path: "/findPassword", alias: "/findPassword", name: "findPassword", component: () => import("./components/FindPassword") },
        { path: "/passwordFound", alias: "/passwordFound", name: "foundPassword", component: () => import("./components/PasswordFound") },
        //{ path: "/adminLogin", alias: "/adminLogin", name: "adminLogin", component: () => import("./components/AdminLogin") },
        //{ path: "/noSectionRequestsFound", alias: "/noSectionRequestsFound", component: () => import("./components/NoSectionRequestsFound") },
        //{ path: "/sectionRequests", alias: "/sectionRequests", component: () => import("./components/SectionRequests") },
        { path: "/studentHome", alias: "/studentHome", name: "studentHome", component: () => import("./components/StudentHome")},
        { path: "/cursoDeCarrera", alias: "/cursoDeCarrera", name: "cursoDeCarrera", component: () => import("./components/CursoDeCarrera")},
        { path: "/cursoElectivo", alias: "/cursoElectivo", name: "cursoElectivo", component: () => import("./components/CursoElectivo")}
    ]
});
