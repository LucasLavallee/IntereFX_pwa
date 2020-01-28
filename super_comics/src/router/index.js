import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import ChoiceSelector from '../views/ChoiceSelector'
import CinemaMode from '../views/CinemaMode'
import TransitionChoice from '../views/TransitionChoice'

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
      path: '/choiceSelector',
      name: 'choiceSelector',
      component: ChoiceSelector,
      props: true
    },
    {
      path: '/cinemaMode',
      name: 'cinemaMode',
      component: CinemaMode
    },
    {
      path: '/transitionChoice',
      name: 'transitionChoice',
      component: TransitionChoice,
      props: true
    }
  ]
});

export default router
