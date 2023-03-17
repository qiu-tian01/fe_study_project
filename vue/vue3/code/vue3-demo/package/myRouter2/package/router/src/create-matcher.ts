import { createRouteMap } from "./create-route-map";


export function createMatcher(routes, router) {
  // 处理options
  const { pathMap } = createRouteMap(routes)

  // 新增一个路由,addRoutes已经废弃了，所以只实现addRoute，
  /**
   * 添加一个路由
   * @param parentOrRoute 
   * @param route 第二个参数传递时，是添加一个子路由
   */
  function addRoute(parentOrRoute: string, route?: string) {
    createRouteMap([route || parentOrRoute], pathMap);
  }

  function match(router: string) {
    const target = pathMap[router]
    if (!target) {
      console.error('未找到改路由')
      return undefined
    }
    const matches: string[] = [];
    let parent = target;
    while (parent) {
      matches.unshift(parent.path);
      parent = parent.parent;
    }
    return {
      path: matches,
      matched: matches.map((route) => {
        return pathMap[route] ?? {};
      }),
    };

  }

  return {
    match,
    addRoute
  }
}