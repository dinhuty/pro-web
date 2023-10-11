import { createRouter, createWebHistory } from 'vue-router'
import publicRoutes from '@/router/public'
import adminRoutes from '@/router/admin';

const routes = [
    {
        path: '/',
        name: 'public',
        component: () => import('@/view/layout/public'),
        children: publicRoutes
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('@/view/layout/dashboard'),
        children: adminRoutes
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router