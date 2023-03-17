import { InjectionKey, Ref } from "vue";
import { RouteLocationNormalizedLoaded, Router } from "vue-router";

/**
 * Allows overriding the router instance returned by `useRouter` in tests. r
 * stands for router
 *
 * @internal
 */
export const routerKey = Symbol("router") as InjectionKey<Router>

/**
 * Allows overriding the current route returned by `useRoute` in tests. rl
 * stands for route location
 *
 * @internal
 */
export const routeLocationKey = Symbol('route location') as InjectionKey<RouteLocationNormalizedLoaded>

/**
 * Allows overriding the current route used by router-view. Internally this is
 * used when the `route` prop is passed.
 *
 * @internal
 */
export const routerViewLocationKey = Symbol('router view location') as InjectionKey<Ref<RouteLocationNormalizedLoaded>>