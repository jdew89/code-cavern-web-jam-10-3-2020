import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/haunted-house.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
		redirect: 'haunted-house'
  },
	{
		path: '/haunted-house',
    name: 'Haunted House',
    component: Home
	},
  {
    path: '/corn-maze',
    name: 'Corn Maze',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/corn-maze.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
