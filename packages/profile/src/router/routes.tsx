import * as React from 'react'
import { RouteObject } from 'react-router-dom'
import Index from '@/views/index'
import Guide from './guide'
import About from '@/views/about'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Guide><Index /></Guide>,
    },
    {
        path: '/about',
        element: <About />,
    },
]

export default routes
