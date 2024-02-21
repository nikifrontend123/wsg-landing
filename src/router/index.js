import { createRouter, createWebHistory } from "vue-router";

const routes = [

  {
    path: "/",
    name: "FrontPage",
    component: () =>
      import("../views/FrontPage.vue"),
  },
  {
    path: "/registraion/:name",
    name: "RegistrationPage",
    component: () =>
      import("../components/RegistrationPage.vue"),
  },
  {
    path: "/get-support",
    name: "GetSupport",
    component: () =>
      import("../components/Resources/GetSupport.vue"),
  },
  {
    path: "/faq",
    name: "AskFaq",
    component: () =>
      import("../components/Resources/AskFaq.vue"),
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: () =>
      import("../components/Resources/PrivacyPolicy.vue"),
  },
  {
    path: "/terms-of-use",
    name: "TermsOfUSe",
    component: () =>
      import("../components/Resources/TermsCondition.vue"),
  },
   
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
