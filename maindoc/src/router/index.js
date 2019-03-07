/* 路由器对象模块 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home/Home.vue";
import Search from "../pages/Search/Search.vue";
import Order from "../pages/Order/Order.vue";
import Personal from "../pages/Personal/Personal.vue";

//声明使用插件
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home
    },
    {
      path: "/search",
      component: Search
    },
    {
      path: "/order",
      component: Order
    },
    {
      path: "/personal",
      component: Personal
    },
    {
      path:'/',
      redirect:'home'
    }
  ]
});
