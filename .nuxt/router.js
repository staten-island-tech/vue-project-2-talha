import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2d620c5c = () => interopDefault(import('..\\pages\\sights.vue' /* webpackChunkName: "pages/sights" */))
const _f27e13aa = () => interopDefault(import('..\\pages\\towns.vue' /* webpackChunkName: "pages/towns" */))
const _ed21348e = () => interopDefault(import('..\\pages\\blogs\\food.vue' /* webpackChunkName: "pages/blogs/food" */))
const _91159882 = () => interopDefault(import('..\\pages\\blogs\\_slug.vue' /* webpackChunkName: "pages/blogs/_slug" */))
const _78791348 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2d620c5c,
    name: "sights"
  }, {
    path: "/towns",
    component: _f27e13aa,
    name: "towns"
  }, {
    path: "/blogs/food",
    component: _ed21348e,
    name: "blogs-food"
  }, {
    path: "/blogs/:slug?",
    component: _91159882,
    name: "blogs-slug"
  }, {
    path: "/",
    component: _78791348,
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
