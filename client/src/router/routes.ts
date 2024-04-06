import { ROUTER_LINK } from '@/shared/types';

export const ROUTES = [
    {
        path: ROUTER_LINK.MAIN_PAGE,
        name: 'MainPage',
        component: () => import('@/pages/MainPage.vue'),
    },
    {
        path: ROUTER_LINK.HISTORY_PAGE,
        name: 'HistoryPage',
        component: () => import('@/pages/HistoryPage.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/NotFoundPage.vue'),
    },
];
