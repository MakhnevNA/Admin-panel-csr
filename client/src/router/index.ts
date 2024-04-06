import { createRouter, createWebHistory } from 'vue-router';
import { ROUTES } from './routes.ts';

export const router = createRouter({
    history: createWebHistory(),
    routes: ROUTES,
});
