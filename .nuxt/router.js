import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0495b741 = () => interopDefault(import('../pages/blogs/food.vue' /* webpackChunkName: "pages/blogs/food" */))
const _2fdd9299 = () => interopDefault(import('../pages/blogs/sights.vue' /* webpackChunkName: "pages/blogs/sights" */))
const _65cd344e = () => interopDefault(import('../pages/blogs/towns.vue' /* webpackChunkName: "pages/blogs/towns" */))
const _bdcdd992 = () => interopDefault(import('../pages/blogs/_slug.vue' /* webpackChunkName: "pages/blogs/_slug" */))
const _8db41386 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blogs/food",
    component: _0495b741,
    name: "blogs-food"
  }, {
    path: "/blogs/sights",
    component: _2fdd9299,
    name: "blogs-sights"
  }, {
    path: "/blogs/towns",
    component: _65cd344e,
    name: "blogs-towns"
  }, {
    path: "/blogs/:slug?",
    component: _bdcdd992,
    name: "blogs-slug"
  }, {
    path: "/",
    component: _8db41386,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
