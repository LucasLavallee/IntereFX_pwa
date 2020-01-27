import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import ChoiceSelector from '../views/ChoiceSelector'
import Lobby from '../views/Lobby'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: Lobby
    },
    {
      path: '/choiceSelector',
      name: 'choiceSelector',
      component: ChoiceSelector
    },
    {
      path: '/cinemaMode',
      name: 'cinemaMode',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/CinemaMode')
    },
  ]
});

export default router
