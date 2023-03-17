export function install(Vue: any) {
  /**
   * 通过代理模式为每一个Vue实例添加一个router属性，只有Vue的根实例才有$options.router属性,
   * 添加一个_routerRoot属性，后面的Vue实例都通过找父实例的_routerRoot来为自己绑定_routerRoot属性
   * 最后通过Object.defineProperty来实现代理模式  
   */
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);

      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
    }
  })

  Object.defineProperty(Vue.prototype, '$router', {
    get() { return this._routerRoot._router }
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get() { return this._routerRoot._route }
  })
}