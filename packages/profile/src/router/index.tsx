import * as React from 'react'
import routes from './routes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(routes)

const Router: React.FC = () => {
    return (
        <RouterProvider
            router={router}
        ></RouterProvider>
    )
}

export default Router
