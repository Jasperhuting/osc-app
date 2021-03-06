import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Overview from '@/pages/Overview';
import Present from '@/pages/Present';
import PresentSingle from '@/pages/PresentSingle';
import Selection from '@/pages/Selection';
import Matches from '@/pages/Matches';
import Opponents from '@/pages/Opponents';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/selection',
      name: 'Selection',
      component: Selection,
    },
    {
      path: '/matches',
      name: 'Matches',
      component: Matches,
    },
    {
      path: '/opponents',
      name: 'Opponents',
      component: Opponents,
    },
    {
      path: '/overview',
      name: 'Overview',
      component: Overview,
    },
    {
      path: '/present/:id',
      name: 'PresentSingle',
      component: PresentSingle,
    },
    {
      path: '/present/',
      name: 'Present',
      component: Present,
    },
  ],
});
