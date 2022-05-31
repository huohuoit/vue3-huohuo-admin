const Layout = () => import("/@/layout/index.vue");

const homeRouter = {
  path: "/",
  name: "Home",
  component: Layout, // 该页面所处的布局结构
  redirect: "/welcome",
  meta: {
    icon: "home-filled",
    title: "首页",
    rank: 0
  },
  children: [
    {
      path: "/welcome",
      name: "Welcome",
      component: () => import("/@/views/welcome/index.vue"),
      meta: {
        title: "首页"
      }
    }
  ]
};

export default homeRouter;
