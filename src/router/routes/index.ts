import { LayoutName } from '@/layouts';
import { RouteName } from '@/router/enums';
import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: RouteName.HOME,
    component: () => import('@/pages/HomePage.vue'),
    meta: {
      layout: LayoutName.EMPTY,
    },
  },
  // {
  //   path: '/test',
  //   name: RouteName.TEST,
  //   component: () => import('@/pages/TestPage.vue'),
  //   meta: {
  //     layout: LayoutName.DEFAULT,
  //   },
  // },
];
