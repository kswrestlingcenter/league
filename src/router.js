import { createRouter, createWebHistory } from 'vue-router' // there is also createWebHashHistory and createMemoryHistory
import Dashboard          from './app/pages/Dashboard.vue'
import Events          from './app/pages/events/Index.vue'


// Migration Guide: https://next.router.vuejs.org/guide/migration/#new-features
// TODO # https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',  name: 'dashboard', component: Dashboard, },
    { path: '/events',  name: 'events', component: Events, }
  ]
})

// router.beforeEach (to, from, next) ->
//   loggedIn = localStorage.getItem('user')
//   console.log "BeforeEach - loggedIn?: ", loggedIn

//   if (to.matched.some((record) -> record.meta.requiresAuth) and not loggedIn)
//     console.log("Did not make it past authentication!")
//     next('/login')
//   else
//     console.log("Made it past authentication!")
//     next()


// router.beforeEach((routeTo, routeFrom, next) => {
//   NProgress.start()
//   next()
// })

// router.afterEach(() => {
//   NProgress.done()
// })

export default router
