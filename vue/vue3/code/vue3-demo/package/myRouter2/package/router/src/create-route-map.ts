export interface RouteRecord {
  path: string,
  component: any,
  parent: RouteRecord
}

export function createRouteMap(routes, oldpathMap?: Record<string, RouteRecord>) {
  const pathMap: Record<string, RouteRecord> = oldpathMap || Object.create(null)

  routes.forEach(route => {
    addRouteRecord(pathMap, route)
  });

  return {
    pathMap
  }
}

function addRouteRecord(pathMap, route, parent?: any) {
  const { path, name } = route

  const record = {
    path,
    component: route.component,
    parent: parent,
  }
  if (!pathMap[path]) {
    pathMap[path] = record
  }

  route.children &&
    route.children.forEach((child) => {
      addRouteRecord(pathMap, child, record);
    });
}