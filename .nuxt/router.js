import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3760eeca = () => interopDefault(import('../pages/sights.vue' /* webpackChunkName: "pages/sights" */))
const _7c23760c = () => interopDefault(import('../pages/towns.vue' /* webpackChunkName: "pages/towns" */))
const _2215b92c = () => interopDefault(import('../pages/blogs/_food.vue' /* webpackChunkName: "pages/blogs/_food" */))
const _69d85606 = () => interopDefault(import('../pages/blogs/_foodie.vue' /* webpackChunkName: "pages/blogs/_foodie" */))
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
    path: "/sights",
    component: _3760eeca,
    name: "sights"
  }, {
    path: "/towns",
    component: _7c23760c,
    name: "towns"
  }, {
    path: "/blogs/:food?",
    component: _2215b92c,
    name: "blogs-food"
  }, {
    path: "/blogs/:foodie?",
    component: _69d85606,
    name: "blogs-foodie"
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
