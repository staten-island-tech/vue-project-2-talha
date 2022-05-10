import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _17eac929 = () => interopDefault(import('..\\pages\\sights.vue' /* webpackChunkName: "pages/sights" */))
const _22f6ebbe = () => interopDefault(import('..\\pages\\towns.vue' /* webpackChunkName: "pages/towns" */))
const _20cda10c = () => interopDefault(import('..\\pages\\blogs\\food.vue' /* webpackChunkName: "pages/blogs/food" */))
const _0bde62cc = () => interopDefault(import('..\\pages\\blogs\\_slug.vue' /* webpackChunkName: "pages/blogs/_slug" */))
const _5ff96bef = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/sights",
    component: _17eac929,
    name: "sights"
  }, {
    path: "/towns",
    component: _22f6ebbe,
    name: "towns"
  }, {
    path: "/blogs/food",
    component: _20cda10c,
    name: "blogs-food"
  }, {
    path: "/blogs/:slug?",
    component: _0bde62cc,
    name: "blogs-slug"
  }, {
    path: "/",
    component: _5ff96bef,
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
