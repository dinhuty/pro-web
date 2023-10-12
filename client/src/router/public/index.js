const publicRoutes = [
    {
        path: '/',
        component: () => import('@/view/pages/Home/HomePage')
    },
    {
        path: '/about',
        component: () => import('@/view/pages/About/About')
    },
    {
        path: '/product',
        component: () => import('@/view/pages/Product/Product')
    },
    {
        path: '/product/detail/:id',
        component: () => import('@/view/pages/ProductDetail/ProductDetail')
    },
    {
        path: '/cart',
        component: () => import('@/view/pages/Cart')
    }
]

export default publicRoutes