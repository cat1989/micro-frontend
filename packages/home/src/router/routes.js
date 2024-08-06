import index from '@/views/index'

export default [
    {
        path: '/',
        component: index,
    },
    {
        path: '/details/:id',
        component: () => import(/* webpackChunkName: "details" */'@/views/details'),
    },
]
