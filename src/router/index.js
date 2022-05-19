import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import CountryCured from '../views/CountryCured.vue';
import CountryDeaths from '../views/CountryDeaths.vue';
import CountryActive from '../views/CountryActive.vue';
import NotFound from '../views/NotFound.vue';


const routes = [
    {
      path: '/',
      name: 'Home',
      component: LandingPage
    },
    {
      path: '/active',
      name: 'Active',
      component: CountryActive
    },
    {
      path: '/cured',
      name: 'Cured',
      component : CountryCured
    },
    {
      path: '/deaths',
      name: 'Deaths',
      component : CountryDeaths
    },
    {
      path:'/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
    ]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;