import Vue from 'vue'
import VueRouter from 'vue-router'

const RickAndMortyList = () => import('../views/RickAndMortyList.vue') // import RickAndMortyList from '../views/RickAndMortyList.vue'
const RickAndMortyCharacter = () => import('../views/RickAndMortyCharacter.vue') // import RickAndMortyCharacter from '../views/RickAndMortyCharacter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'RickAndMortyList',
    component: RickAndMortyList
  },
  {
    path: '/character/:id',
    name: 'CharacterDetails',
    component: RickAndMortyCharacter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router