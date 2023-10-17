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
        path: '/san-pham',
        component: () => import('@/view/pages/Product/Product'),
        children: [
            {
                path: '',
                component: () => import('@/view/pages/Product/MobileProduct/MobileProduct.vue'),
            },
            {
                path: 'dien-thoai',
                component: () => import('@/view/pages/Product/MobileProduct/MobileProduct.vue'),
            },
            {
                path: 'may-tinh-xach-tay',
                component: () => import('@/view/pages/Product/LaptopProduct/LaptopProduct.vue'),
            },
            {
                path: 'phu-kien',
                component: () => import('@/view/pages/Product/AccessoryProduct/AccessoryProduct'),
            },
            {
                path: 'may-tinh-bang',
                component: () => import('@/view/pages/Product/TabletProduct/TabletProduct.vue'),
            },
            {
                path: 'dong-ho',
                component: () => import('@/view/pages/Product/WatchProduct/WatchProduct.vue'),
            }
        ]
    },
    {
        path: '/san-pham/:slug',
        component: () => import('@/view/pages/ProductDetail/ProductDetail')
    },
    {
        path: '/cart',
        component: () => import('@/view/pages/Cart')
    }
]

export default publicRoutes