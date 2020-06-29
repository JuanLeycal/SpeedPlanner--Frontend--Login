import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        { path: "/", alias: "/login", name: "login", component: () => import("./components/Login") },
        { path: "/findPassword", alias: "/findPassword", name: "findPassword", component: () => import("./components/FindPassword") },
        { path: "/passwordFound", alias: "/passwordFound", name: "foundPassword", component: () => import("./components/PasswordFound") },
        { path: "/adminLogin", alias: "/adminLogin", name: "adminLogin", component: () => import("./components/AdminLogin") },
        { path: "/noSectionRequestsFound", alias: "/noSectionRequestsFound", component: () => import("./components/NoSectionRequestsFound") },
        { path: "/sectionRequests", alias: "/sectionRequests", component: () => import("./components/SectionRequests") },
        { path: "/studentHome", alias: "/studentHome", name: "studentHome", component: () => import("./components/StudentHome")},
        { path: "/careerCourse", alias: "/careerCourse", name: "careerCourse", component: () => import("./components/CareerCourse")},
        { path: "/optionalCourse", alias: "/optionalCourse", name: "optionalCourse", component: () => import("./components/OptionalCourse")},
        { path: "/successfullyRecordSchedule", alias:"/successfullyRecordSchedule", name: "successfullyRecordSchedule", component: () => import("./components/SuccessfullyRecordSchedule")},
        { path: "/dialogSaveSchedule", alias:"/dialogSaveSchedule", name: "dialogSaveSchedule", component: () => import("./components/DialogSaveSchedule")},
        { path: "/questionSaveSchedule", alias:"/questionSaveSchedule", name: "questionSaveSchedule", component:() => import("./components/QuestionSaveSchedule")}
        ]
});
