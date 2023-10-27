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
    },
    {
        path: '/cart/checkout',
        component: () => import('@/view/pages/Checkout')
    },
    {
        path: '/account',
        component: () => import('@/view/pages/Account'),

        children: [
            {
                path: '',
                redirect: to => {
                    // the function receives the target route as the argument
                    // a relative location doesn't start with `/`
                    // or { path: 'profile'}
                    return '/account/profile'
                },
            },
            {
                path: 'profile',
                component: () => import('@/view/pages/Account/Profile'),
            },
            {
                path: 'payment',
                component: () => import('@/view/pages/Account/Payments'),
            },
            {
                path: 'order',
                component: () => import('@/view/pages/Account/Orders'),
            },
            {
                path: 'wish-list',
                component: () => import('@/view/pages/Account/Wishlist'),
            },
            {
                path: 'voucher',
                component: () => import('@/view/pages/Account/Discounts'),
            },
            {
                path: 'notification',
                component: () => import('@/view/pages/Account/Notification'),
            },
            {
                path: 'help',
                component: () => import('@/view/pages/Account/Helps'),
            }

        ]
    },
    // { path: '/:pathMatch(.*)*', redirect: '/' }
]

export default publicRoutes