import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CoursesView from "@/views/CoursesView.vue";
import CareersView from "@/views/CareersView.vue";
import NewsView from "@/views/NewsView.vue";
import AboutView from "@/views/AboutView.vue";
import CourseDetailView from "@/views/CourseDetailView.vue";
import GetStartedView from "@/views/GetStartedView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/courses",
      name: "courses",
      component: CoursesView,
    },
    {
      path: "/courses/:courseId",
      name: "course_details",
      component: CourseDetailView,
    },
    {
      path: "/careers",
      name: "careers",
      component: CareersView,
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/get-started",
      name: "get_started",
      component: GetStartedView,
    },
  ],
});

export default router;
