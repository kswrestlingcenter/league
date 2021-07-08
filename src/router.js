import { createRouter, createWebHistory } from 'vue-router' // there is also createWebHashHistory and createMemoryHistory
import Home       from './app/pages/Home.vue'
// import LoginComponent from './app/pages/Login/index.vue'
import WrestlerDetail from './app/pages/WrestlerDetail.vue'
import WrestlerList from './app/pages/WrestlerList.vue'
import WrestlerAdd from './app/pages/WrestlerAdd.vue'
import LeagueEventAdd from './app/pages/LeagueEventAdd.vue'
import LeagueEventsList from './app/pages/LeagueEventsList.vue'
import LeagueEventDetail from './app/pages/LeagueEventDetail.vue'
import WeighIn from './app/pages/WeighIn.vue'
import LeagueWrestlerList from './app/pages/LeagueWrestlerList.vue'
import LeagueMatchList from './app/pages/LeagueMatchList.vue'
import LeagueMatchDetail from './app/pages/LeagueMatchDetail.vue'

// Migration Guide: https://next.router.vuejs.org/guide/migration/#new-features
// TODO # https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home},
    // { path: '/login', name: 'login', component: LoginComponent }, // Not part of MVP
    // Dashboard?
    { path: '/wrestlers', name: 'wrestler-list', component: WrestlerList },
    { path: '/wrestlers/:id', name: 'wrestler-detail', component: WrestlerDetail },
    { path: '/wrestlers/add', name: 'wrestler-add', component: WrestlerAdd },
    // { path: '/matches', name: 'match-list', component: MatchList }, // Not part of MVP
    // { path: '/matches/:id', name: 'match-detail', component: MatchDetail }, // Not part of MVP
    // { path: '/matches/add', name: 'match-add', component: MatchAdd }, // Not part of MVP
    { path: '/league-events', name: 'league-event-list', component: LeagueEventsList},
    { path: '/league-events/add', name: 'league-event-add', component: LeagueEventAdd},
    { path: '/league-events/:id', name: 'league-event-detail', component: LeagueEventDetail},
    { path: '/league-events/:id/weigh-in/:wrestlerId', name: 'weigh-in', component: WeighIn},
    { path: '/league-events/:id/wrestlers', name: 'events', component: LeagueWrestlerList},
    { path: '/league-events/:id/matches', name: 'events', component: LeagueMatchList},
    { path: '/league-events/:id/matches/:matchId', name: 'events', component: LeagueMatchDetail},
    // { path: '/league-events/:id/brackets', name: 'events', component: EventsList}, // Not part of MVP
    // { path: '/league-events/:id/brackets/:id', name: 'events', component: EventsList}, // Not part of MVP
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
