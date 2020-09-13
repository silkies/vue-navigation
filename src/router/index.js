import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{ path: "/", exact: true, redirect: "/home" },
{
    path: '/home', 
    name: 'Home', 
  },
  { 
    path: '/react', 
    name: 'React sample', 
  },
  { 
    path: '/angular', 
    name: 'Angular sample', 
  }];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;