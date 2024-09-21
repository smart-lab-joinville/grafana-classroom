import { createWebHistory, createRouter } from "vue-router";
import NewClassroomPage from "@/pages/NewClassroomPage.vue";
import ProfilePage from "@/pages/ProfilePage.vue";
import ViewClassroomsPage from "@/pages/ViewClassroomsPage.vue";

/** @type {import("vue-router").RouteRecordRaw[]} */
const routes = [
  {
    path: "/",
    component: ProfilePage,
    name: "homepage",
  },
  {
    path: "/perfil",
    component: ProfilePage,
    name: "profile",
  },
  {
    path: "/minhas-turmas",
    component: ViewClassroomsPage,
    name: "my-classrooms",
  },
  {
    path: "/nova-turma",
    component: NewClassroomPage,
    name: "new-classroom",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
