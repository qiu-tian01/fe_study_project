
/**
 * vue2 的vue-router 模拟
 * 1. 对options 进行格式化，提供matched和addRoutes方法
 * 2. 给每个Vue实例绑定$router
 * 3. 实现transitionTo ( 这个方法是Router内置方法，用于路由跳转 ) ，并绑定$route
 * 4. 实现 router-view 和 router-link
 */

import { createMatcher } from "./create-matcher"
import { RouteRecord } from "./create-route-map";

/**
 * @example

  const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( "../views/About.vue"),
      children: [
        {
          path: "a",
          component: {
            render() {
              return <h1>A views</h1>;
            },
          },
        },
        {
          path: "b",
          component: {
            render() {
              return <h1>B views</h1>;
            },
          },
        },
      ],
    },
  ];
  
  const router = new VueRouter({
    mode: "hash",
    routes,
  });    
 */

export default class VueRouter {
  history: any;
  matcher: { match: (router: string) => { path: string[]; matched: RouteRecord[]; } | undefined; addRoute: (parentOrRoute: string, route?: string | undefined) => void; };

  constructor(options) {
    let mode = options.mode || 'hash'
    this.matcher = createMatcher(options.routes || [], this)
    switch (options.mode) {
      case "hash":
        // this.history = new HashHistory(this);
        break;
      case "history":
        // this.history = new BrowserHistory(this);
        break;
    }

  }

  init(app: any) {

  }

}