
import { App, ComputedRef, reactive, shallowRef, unref } from 'vue'
import { RouteLocationNormalizedLoaded, RouterOptions } from 'vue-router'
import { START_LOCATION_NORMALIZED } from '../types'
import { Router } from '../types/router'
import { routeLocationKey, routerKey, routerViewLocationKey } from './injectionSymbols'

export function createRouter(options: RouterOptions) {

  const currentRoute = shallowRef<RouteLocationNormalizedLoaded>(
    START_LOCATION_NORMALIZED
  )
  const routerHistory = options.history

  const router: Router = {
    install(app: App) {
      const router = this
      // 创建link和view组件

      // 在全局变量中绑定$router
      app.config.globalProperties.$myRouter = router
      console.log(`$router`, router)

      //劫持了$route的get操作，使app.config.globalProperties.$route始终获取currentRoute信息
      Object.defineProperty(app.config.globalProperties, '$route', {
        enumerable: true,
        get: () => {
          console.log(`currentRoute`, currentRoute)
          return unref(currentRoute)
        },
      })

      // 浏览器环境开始第一次跳转，这里直接跳转
      // push(routerHistory.location).catch(err => {
      //   // if (__DEV__) warn('Unexpected error when starting the router:', err)
      // })

      const reactiveRoute = {} as {
        [k in keyof RouteLocationNormalizedLoaded]: ComputedRef<
          RouteLocationNormalizedLoaded[k]
        >
      }
      for (const key in START_LOCATION_NORMALIZED) {
        // @ts-expect-error: the key matches
        reactiveRoute[key] = computed(() => currentRoute.value[key])
      }

      app.provide(routerKey, router)
      app.provide(routeLocationKey, reactive(reactiveRoute))
      app.provide(routerViewLocationKey, currentRoute)
    }
  }
}