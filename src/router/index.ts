import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CoursesView from "@/views/CoursesView.vue";
import CourseDetailView from "@/views/CourseDetailView.vue";
import CareersView from "@/views/CareersView.vue";
import CareerDetailView from "@/views/CareerDetailView.vue";
import NewsView from "@/views/NewsView.vue";
import NewsDetailView from "@/views/NewsDetailView.vue";
import AboutView from "@/views/AboutView.vue";
import GetStartedView from "@/views/GetStartedView.vue";
import PrivacyView from "@/views/PrivacyView.vue";
import TermsView from "@/views/TermsView.vue";
import TestView from "@/views/TestView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: HomeView },
    { path: "/courses", component: CoursesView },
    { path: "/courses/:courseId", component: CourseDetailView },
    { path: "/careers", component: CareersView },
    { path: "/careers/:openingId", component: CareerDetailView },
    { path: "/news", component: NewsView },
    { path: "/news/:newsId", component: NewsDetailView },
    { path: "/about", component: AboutView },
    { path: "/get-started", component: GetStartedView },
    { path: "/privacy", component: PrivacyView },
    { path: "/terms", component: TermsView },
    { path: "/test", component: TestView },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 208,
      };
    }
    return { top: 0 };
  },
});

export default router;
