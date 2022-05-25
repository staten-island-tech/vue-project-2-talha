import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3760eeca = () => interopDefault(import('../pages/sights.vue' /* webpackChunkName: "pages/sights" */))
const _7c23760c = () => interopDefault(import('../pages/towns.vue' /* webpackChunkName: "pages/towns" */))
const _0495b741 = () => interopDefault(import('../pages/blogs/food.vue' /* webpackChunkName: "pages/blogs/food" */))
const _bdcdd992 = () => interopDefault(import('../pages/blogs/_slug.vue' /* webpackChunkName: "pages/blogs/_slug" */))
const _8db41386 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
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
    path: "/blogs/food",
    component: _0495b741,
    name: "blogs-food"
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

export function createRouter () {
  return new Router(routerOptions)
}
