import Loadable from 'react-loadable';

let config = [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: Loadable({
      loader: () => import('../pages/Home'),
      loading: () => null,
    }),
  },
  {
    name: 'about',
    path: '/about',
    exact: true,
    component: Loadable({
      loader: () => import('../pages/About'),
      loading: () => null,
    }),
    children: [
      {
        path: '/about/:topicId',
        exact: true,
        component: Loadable({
          loader: () => import('../pages/About'),
          loading: () => null,
        }),
      },
    ],
  },

  {
    name: 'mst',
    path: '/mst',
    exact: true,
    component: Loadable({
      loader: () => import('../components/Mst'),
      loading: () => null,
    }),
  },
  {
    name: 'user',
    path: '/users',
    exact: true,
    component: Loadable({
      loader: () => import('../components/Hello'),
      loading: () => null,
    }),
  },
  {
    name: 'todo',
    path: '/todo',
    exact: true,
    component: Loadable({
      loader: () => import('../components/Notes'),
      loading: () => null,
    }),
  },
  {
    name: '404',
    path: '/404',
    exact: true,
    component: Loadable({
      loader: () => import('../pages/NotFound'),
      loading: () => null,
    }),
  },
];
export default config;
