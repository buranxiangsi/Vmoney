import  Money  from "@/views/Money.vue";
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import  Labels  from "@/views/Labels.vue";
import Statistics from "@/views/Statistics.vue"
import NoFound from "@/views/NoFound.vue"

Vue.use(VueRouter);


const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '*',
    component: NoFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
